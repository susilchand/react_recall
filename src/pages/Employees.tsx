import { Link } from "react-router";
const Employees = () => {
  return (
    <div>
      <h1>Employees</h1>

      <ul>
        <li>
          <Link to="/employees/101">John</Link>
        </li>

        <li>
          <Link to="/employees/102">David</Link>
        </li>

        <li>
          <Link to="/employees/103">Sarah</Link>
        </li>
      </ul>
    </div>
  );
};

export default Employees;
