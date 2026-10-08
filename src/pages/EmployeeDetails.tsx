import { useParams } from "react-router";
const EmployeeDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Employee Detail</h1>

      <p>Employee ID: {id}</p>
    </div>
  );
};

export default EmployeeDetails;
