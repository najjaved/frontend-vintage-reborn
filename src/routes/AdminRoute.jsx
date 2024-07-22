import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { isAdmin, isLoading } = useContext(SessionContext);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
// ToDO: admin route