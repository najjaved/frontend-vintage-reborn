import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import { Navigate } from "react-router-dom";
import { Title } from "@mantine/core";

//toDO: check user role
const AdminRoute = ({ children }) => {
  const { user, isLoading } = useContext(SessionContext);

  if (isLoading) {
    return <Title>Loading...</Title>
  }

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;