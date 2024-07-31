import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import classes from "../../styles/ManageUsersPage.module.css"


const UserProductsDetails = () => {

    const { user, token } = useContext(SessionContext)

    const { userId } = user;
    const [product, setProduct] = useState([])
    const [userData, setUserData] = useState([])

    const fetchProduct = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${createdBy}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            const data = await response.json()
            setProduct(data)
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
        fetchProduct(),
            fetchUserData()
    }, [userId])

    return (
        <div>
            {userData && (
                <div>
                    <h2>User Details</h2>
                    <p>Name: {userData.username} </p>
                    <p>Email: {userData.email}</p>
                    <p>Address: {userData.address}</p>
                </div>
            )}
            <h2>Products</h2>
            {product.length > 0 ? (
                product.map((e) => (
                    <ul key={e.id} className={classes.usersul}>
                        <li>Name: {e.name}</li>
                        <li>Category: {e.category} </li>
                        <li>Price: {e.price}</li>
                        <li>Created by: {e.createdBy}</li>
                    </ul>
                ))
            ) : (
                <p>No orders found for this user.</p>
            )}
        </div>
    );
}

export default UserProductsDetails;