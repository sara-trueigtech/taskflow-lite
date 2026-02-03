import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../common/commonErrorPage";
import AppLayout from "../components/AppLayout";
import Home from "../components/Home";
import TaskBoard from "../components/TaskBoard/component";
import Profile from "../components/Profile/component";

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
      {
        element: <ProtectedRoutes />,
        children: [
          { path: "dashboard", element: <TaskBoard /> },
          {path: "profile", element: <Profile/> }
        ],
      },
    ],
  },
]);

export default router;
