import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import { Title } from "@mantine/core";

//toDO: route to check for user roles. From verify route, get token and access userId from payload and get user role
const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(SessionContext);

  if (isLoading) {
    return <Title align="center" size="xl" mb="lg">Loading...</Title>
  }

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;