import { useContext } from "react";
import { UserContext } from "../UserContext";

function Dashboard() {
  const context = useContext(UserContext);

  if (!context) {
    return null;
  }

  const { user, setUser } = context;

  const login = () => {
    setUser({
      name: "Susil",
      email: "susil@example.com",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Dashboard</h2>
          <p>{user.email}</p>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
