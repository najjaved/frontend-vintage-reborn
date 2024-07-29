import { Title } from "@mantine/core";

const OrdersPage = () => {
    const { token, user } = useContext(SessionContext);
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUserOrders = async () => {
        try {
            console.log(`Fetching orders for user ID: ${user._id}`);
            const response = await fetch(`http://localhost:5006/api/orders/${user._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched orders:', data);
                setOrders(data);
            } else {
                setError('Failed to fetch orders');
                console.error('Failed to fetch orders');
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUserOrders();
        } else {
            setLoading(false);
        }
    }, [user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Title align="center" size="xl" mb="lg">User Orders</Title>
            <div>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <ul key={order._id}>
                            <li>Order ID: {order._id}</li>
                            <li>UserID: {order.userId}</li>
                            <li>Status: {order.status}</li>
                            <li>
                                Order Items: {order.orderItems.map(item => (
                                    <span key={item.id}>{item.name} </span>
                                ))}
                            </li>
                            <li>Total Amount: {order.totalAmount}</li>
                            <li><a href={`/user/${order.userId}/`}>View User</a></li>
                        </ul>
                    ))
                ) : (
                    <div>No orders found</div>
                )}
            </div>
        </>
    );
};

export default OrdersPage;
