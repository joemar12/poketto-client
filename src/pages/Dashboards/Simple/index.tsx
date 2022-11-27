import { Link } from "react-router-dom";

const SimpleDashboard = () => {
  return (
    <>
      <h1 className="text-lg">Simple Dashboard</h1>
      <Link to="/management/accounts">Accounts</Link>
    </>
  );
};

export default SimpleDashboard;
