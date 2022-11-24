import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginRequest } from "../../features/Authentication";

const Login = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  const navigate = useNavigate();

  let originalLocation =
    (location.state && (location.state as any).from?.pathname) || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(originalLocation, { replace: true });
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    instance.loginPopup(LoginRequest).catch((error) => {
      // TODO: redirect to an error page
    });
  };
  return (
    <>
      <h1 className="text-lg">Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
