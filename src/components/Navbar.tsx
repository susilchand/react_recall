import { NavLink } from "react-router";
import "../index.css";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {" | "}

      <NavLink to="/login"> Login</NavLink>

      {" | "}

      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>

      {" | "}

      <NavLink to="/employees">Employees</NavLink>

      {" | "}

      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
