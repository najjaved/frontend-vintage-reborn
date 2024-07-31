import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import { Link } from "react-router-dom";

const ManageUsersPage = () => {

    const { token } = useContext(SessionContext);
    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])


    return (<> <div className={classes.users}>
        {users.map((user) => (
            <ul key={user._id} className={classes.usersul}>
                <li>UserID: {user._id}</li>
                <li>Name: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Role: {user.role}</li>
                <li> <Link to={`/user/${user._id}/products`}>View Products</Link> </li>
                <li> <Link to={`/user/${user._id}/orders`}>View Orders</Link> </li>
            </ul>
        )

        )}
    </div>
    </>);
}

export default ManageUsersPage;