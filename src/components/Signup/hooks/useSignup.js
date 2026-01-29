import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { SIGNUP_FORM_CONTROLLER } from "../constant";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const { signup } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      setLoading(true);

      await signup(data); 

      navigate("/login");
    } catch (err) {
      return (err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignup,
    loading,
    SIGNUP_FORM_CONTROLLER,
  };
};

export default useSignup;
