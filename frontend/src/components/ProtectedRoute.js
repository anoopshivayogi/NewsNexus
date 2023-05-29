import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    // You can perform additional logic here when the authentication state
    // changes
    // For example, you can update the user object or trigger any
    // necessary actions
  }, [isAuthenticated]);

  return isAuthenticated;
};

const ProtectedRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // Show a loading spinner or placeholder while the authentication state is being determined
    return <LoadingSpinner />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;

};

export default ProtectedRoutes;
