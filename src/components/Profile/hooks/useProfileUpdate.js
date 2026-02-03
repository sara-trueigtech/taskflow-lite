import { useContext, useState } from "react";
// import { PROFILE_FORM_CONTROLLER } from "../constant";
import { AuthContext } from "../../../context/AuthContext";
import { updateUser } from "../../../services/patch/index";
import { useNavigate } from "react-router-dom";

export const useProfileUpdate = () => {
    const [loading, setLoading] = useState(false);
    const { user, updateUserCtx } = useContext(AuthContext);
    const nav = useNavigate();

  const handleProfileUpdate = async (data) => {
    try {
      setLoading(true);
      const updatedUser = await updateUser(user.id, data);
      updateUserCtx(updatedUser);
      nav("/dashboard");
    }
    catch(err){
        console.error(err.message);
      alert("Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleProfileUpdate,
    loading,
    user
  };
};
