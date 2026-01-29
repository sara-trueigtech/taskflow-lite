import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_CONTROLLER } from "../constants";

function useLogin() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async(data) => {
        setLoading(true);
        login(data);
        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate("/");
        }
        catch(err){
            console.log(err);
        }
        finally{
            setLoading(false);
        }
        
    };

    return {handleLogin, loading, LOGIN_FORM_CONTROLLER};
}

export default useLogin;