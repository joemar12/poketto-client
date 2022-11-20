import { useMsal } from "@azure/msal-react";
import { LoginRequest } from "../../features/Authentication/msal.config";

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    console.log("login");
    console.log(instance);
    instance.loginPopup(LoginRequest);
  };
  return (
    <>
      <h1 className="text-lg">Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
