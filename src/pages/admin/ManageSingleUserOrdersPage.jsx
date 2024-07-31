import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import classes from "../../styles/ManageUsersPage.module.css"

const UserOrderDetails = () => {

    const { token } = useContext(SessionContext)
    const { userId } = useParams();
    const [orders, setOrders] = useState([])
    const [userData, setUserData] = useState([])

    const fetchOrders = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/currentuser/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            setOrders(data)
        } catch (error) {

        }
    }

    const fetchUserData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users/${userId}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log("Error fetching user data: ", error);
        }
    };

    useEffect(() => {
        fetchOrders(),
            fetchUserData()
    }, [userId])

    return (
        <div>
            {userData && (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.username}</p>
                    <p>Email: {userData.email}</p>
                    <p>Address: {userData.Address}</p>
                </div>
            )}
            <h2>Orders</h2>
            {orders.length > 0 ? (
                orders.map((order) => (
                    <ul key={order._id} className={classes.usersul}>
                        <li>Full name: {order.firstName}{order.lastName} </li>
                        <li>Items: {order.orderItems}</li>
                        <li>Status: {order.price}</li>
                    </ul>
                ))
            ) : (
                <p>No orders found for this user.</p>
            )}
        </div>
    );
}

export default UserOrderDetails;