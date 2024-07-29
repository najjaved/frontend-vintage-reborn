import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";

const ManageOdersPage = () => {
    const { token } = useContext(SessionContext);
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await fetch("http://localhost:5006/api/orders", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                setOrders(data);
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [])


    return (<>
        <div>
            {orders.map((order) => (
                <ul key={order._id}>
                    <li>UserID: {order.userId}</li>
                    <li>Name: {order.status}</li>
                    <li>Email: {order.orderItems}</li>
                    <li>Role: {order.totalAmount}</li>
                    <li> <a href={`/user/${order.userId}/`}>View User</a> </li>
                </ul>
            )

            )}
        </div>
    </>);
}

export default ManageOdersPage;