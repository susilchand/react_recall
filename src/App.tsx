import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Employees from "./pages/Employees";
// import EmployeeDetail from "./pages/EmployeeDetails";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";
// import DashboardLayout from "./layouts/DashboardLayouts";
import DashboardHome from "./pages/DashboardHome";
import DashboardEmployees from "./pages/DashboardEmployee";
import DashboardSettings from "./pages/DashboardSetting";
import DashboardLayouts from "./layouts/DashboardLayouts";
// import Profile from "./Profile";
//import { UserContext } from "./UserContext";
import { UserProvider } from "./UserContext";
const App = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Dashboard />
      </UserProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Home />} />

          <Route path="login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/employees/:id" element={<EmployeeDetail />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<NotFound />} /> */}
          <Route path="/dashboard" element={<DashboardLayouts />}>
            <Route index element={<DashboardHome />} />

            <Route path="employees" element={<DashboardEmployees />} />

            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
