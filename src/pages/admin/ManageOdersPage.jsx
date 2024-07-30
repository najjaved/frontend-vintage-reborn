import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";

const ManageOdersPage = () => {
    const { token } = useContext(SessionContext);
    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
<<<<<<< HEAD
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
=======
            const response = await fetch(`${import.meta.env.VITE_API_URL}api/orders`, {
>>>>>>> 89be9de (Minor changes on about page)
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