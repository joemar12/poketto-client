import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate, useLocation } from "react-router-dom";

interface RequireAuthProps {
  children: JSX.Element;
  loginRoute: string;
  replace: boolean;
}

const RequireAuth = ({ children, loginRoute, replace }: RequireAuthProps) => {
  let isAuthenticated = useIsAuthenticated();
  let location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate to={loginRoute} state={{ from: location }} replace={replace} />
    );
  }
  return children;
};

export default RequireAuth;
