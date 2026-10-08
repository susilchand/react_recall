import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("loggedin Successfully");
    navigate("/dashboard");
  };
  return (
    <>
      <h1>Login here</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
