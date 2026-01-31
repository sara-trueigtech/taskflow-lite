import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_CONTROLLER } from "../constants";

function useLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    try {
      setLoading(true);

      await login(data); 

      navigate("/dashboard");
    } catch (err) {
      return(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {handleLogin, loading, LOGIN_FORM_CONTROLLER };
}

export default useLogin;