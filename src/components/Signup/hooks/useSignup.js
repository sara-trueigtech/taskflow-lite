import { useState } from "react";
import { createUser, getUsers } from "../../../services/userApi";
import { SIGNUP_FORM_CONTROLLER } from "../constants";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (data) => {
    try {
      setLoading(true);

      const users = await getUsers();
      const exists = users.find((u) => u.email === data.email);

      if (exists) {
        alert("User already exists");
        return;
      }

      await createUser(data);
      navigate("/login");
    } catch (err) {
      alert(err.message);
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
