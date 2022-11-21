import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginRequest } from "../../features/Authentication";
import {
  getUserProfileFailure,
  getUserProfileSuccess,
} from "../../features/Authentication";
import { extractUserProfileFromAuthResult } from "../../features/Authentication/utils";
import { useAppDispatch } from "../../hooks";

const Login = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let originalLocation =
    (location.state && (location.state as any).from?.pathname) || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(originalLocation, { replace: true });
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    instance
      .loginPopup(LoginRequest)
      .then((result) => {
        const userProfile = extractUserProfileFromAuthResult(result);
        dispatch(getUserProfileSuccess(userProfile));
      })
      .catch((error) => {
        dispatch(getUserProfileFailure(error));
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
