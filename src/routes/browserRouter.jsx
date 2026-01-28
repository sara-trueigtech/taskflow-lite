import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/Dashboard/component";
import Login from "../components/Login/component";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../common/commonErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoutes />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />, 
    children: [{ index:true, element: <Dashboard /> }],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <Login />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />, 
  },
]);

export default router;
