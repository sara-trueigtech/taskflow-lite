import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/Dashboard/component";
import Login from "../components/Login/component";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../common/commonErrorPage";
import Signup from "../components/Signup/component";
import AppLayout from "../components/AppLayout";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Home /> },

      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },

      {
        element: <ProtectedRoutes />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);

export default router;
