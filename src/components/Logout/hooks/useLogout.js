import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogout() {
    const {logout, setShowLogout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setShowLogout(false);
        navigate("/", { replace: true });
    };

    return {handleLogout};
}

export default useLogout;