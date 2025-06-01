import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Context.jsx";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return !user ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRoute; 