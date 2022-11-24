import { useMsal } from "@azure/msal-react";

const LogoutButton = () => {
  const { instance } = useMsal();
  const handleLogout = () => {
    const account = instance.getActiveAccount();
    if (account) {
      instance.logoutPopup({ account });
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
