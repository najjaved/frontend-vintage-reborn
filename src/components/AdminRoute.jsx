import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Navigate } from "react-router-dom";

//toDO: check user role
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