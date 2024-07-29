import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../contexts/SessionContext";

const ManageUsersPage = () => {

    const { token } = useContext(SessionContext);
    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5006/api/users", {
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


    return (<> <div className="users">
        {users.map((user) => (
            <ul key={user._id} className="usersul">
                <li>UserID: {user._id}</li>
                <li>Name: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Role: {user.role}</li>
                <li> <a href={`/user/${user._id}/products`}>View Products</a> </li>
                <li> <a href={`/user/${user._id}/orders`}>View Orders</a> </li>
            </ul>
        )

        )}
    </div>
    </>);
}

export default ManageUsersPage;