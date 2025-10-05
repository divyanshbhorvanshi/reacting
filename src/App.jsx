import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CompleteProfile from "./pages/CompleteProfile";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import EditProfile from "./pages/EditProfile";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminEmployeeEdit from "./pages/AdminEmployeeEdit";

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Signup /> },
        { path: "/complete-profile", element: <CompleteProfile /> },
        { path: "/login", element: <Login /> },
        { path: "/user-home", element: <UserHome /> },
        { path: "/edit-profile", element: <EditProfile /> },
        { path: "/admin-login", element: <AdminLogin /> },
        { path: "/admin-dashboard", element: <AdminDashboard /> },
        { path: "/admin-employee-edit", element: <AdminEmployeeEdit /> },
      ],
    },
  ]);

  return <RouterProvider router={myRouter} />;
}
