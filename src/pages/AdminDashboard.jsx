import { useContext, useState } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Button } from "@mantine/core";

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
    </>
  );
};

export default AdminDashboard;
