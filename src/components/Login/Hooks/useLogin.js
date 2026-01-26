import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogin() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (data) => {
        login(data);
        navigate("/dashboard");
    };

    return {handleLogin};
}

export default useLogin;