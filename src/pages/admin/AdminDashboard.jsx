import { useContext, useState } from "react";
import { Button } from "@mantine/core";
import { SessionContext } from "../../contexts/SessionContext";
import { Link } from "react-router-dom";
import ManageUsersPage from "./ManageUsersPage";
import ManageListingsPage from "./ManageListingsPage";
import ManageOrdersPage from "./ManageOdersPage";

const AdminDashboard = () => {
  const { currentUser, fetchWithToken } = useContext(SessionContext);

  const [users, setUsers] = useState([]);

  // test for admin rights
  const getAllUsers = async () => {
    try {
      const data = await fetchWithToken("/users");
      console.log("fetched users: ", data);
      if (!data) {
        throw new Error("forbidden");
      }
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Admin Page</h1>
      {currentUser && (
        <>
          <h2>Current user: {currentUser}</h2>
          <Button onClick={getAllUsers}>Fetch users</Button>
          <ul>
            {users.map((user) => (
              <li key={user._id}>{user.username}</li>
            ))}
          </ul>
        </>
      )}
      <Link to={ManageUsersPage}> <h2>Users list</h2> </Link>
      <Link to={ManageListingsPage}><h2>Products list</h2></Link>
      <Link to={ManageOrdersPage} ><h2>Orders list</h2></Link>


    </>
  );
};

export default AdminDashboard;
