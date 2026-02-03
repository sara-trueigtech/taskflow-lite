import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM_CONTROLLER } from "../constants";
import { SIGNUP_FORM_CONTROLLER } from "../constants";

export const useAuth = (mode, onSuccess) => {
  const { login, signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAuth = async (data) => {
    try {
      setLoading(true);

      if (mode === "login") {
        await login(data);
      } else {
        await signup(data);
      }

      onSuccess();
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAuth,
    loading,
    controls:
      mode === "login"
        ? LOGIN_FORM_CONTROLLER
        : SIGNUP_FORM_CONTROLLER,
  };
};