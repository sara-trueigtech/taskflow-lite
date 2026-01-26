import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../components/Dashboard/component";
import Login from "../components/Login/component";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoutes/>,
        children: [
            {index: true, element: <Dashboard />}
        ]
    },
    {
        path: "/login",
        element: <Login/>,
    }
])

export default router;