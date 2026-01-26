import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/Dashboard/component";
import Login from "../components/Login/component";
import AuthProvider from "../context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoutes />
      </AuthProvider>
    ),
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
  },
]);

export default router;
