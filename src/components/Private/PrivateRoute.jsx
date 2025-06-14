import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Context.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;