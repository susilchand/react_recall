// import { NavLink } from "react-router";
// import "../index.css";
// const Navbar = () => {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>

//       {" | "}

//       <NavLink to="/login"> Login</NavLink>

//       {" | "}

//       <NavLink
//         to="/dashboard"
//         className={({ isActive }) => (isActive ? "active" : "")}
//       >
//         Dashboard
//       </NavLink>

//       {" | "}

//       <NavLink to="/employees">Employees</NavLink>

//       {" | "}

//       <NavLink to="/settings">Settings</NavLink>
//     </nav>
//   );
// };

// export default Navbar;

import { useContext } from "react";
import { UserContext } from "../UserContext";

function Navbar() {
  const context = useContext(UserContext);

  if (!context) {
    return null;
  }

  const { user } = context;

  return <nav>{user ? <p>Welcome, {user.name}</p> : <p>Not logged in</p>}</nav>;
}

export default Navbar;
