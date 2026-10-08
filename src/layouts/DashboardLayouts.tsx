import { Link, Outlet } from "react-router";
const DashboardLayouts = () => {
  return (
    <div>
      <h1>Employee Management System</h1>

      <nav>
        <Link to="/dashboard">Dashboard</Link>

        {" | "}

        <Link to="/dashboard/employees">Employees</Link>

        {" | "}

        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default DashboardLayouts;
