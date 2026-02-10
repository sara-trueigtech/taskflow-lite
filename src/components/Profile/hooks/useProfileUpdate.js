import { useContext } from "react";
import { PROFILE_FORM_CONTROLLER } from "../constant";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../../store/services/userApi";

export const useProfileUpdate = () => {
  const { user, updateUserCtx } = useContext(AuthContext);
  const nav = useNavigate();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleProfileUpdate = async (data) => {
    try {
      const updatedUser = await updateUser({
        id: user.id,
        updatedUser: data,
      }).unwrap();

      updateUserCtx(updatedUser);
      nav("/dashboard");
    } catch (err) {
      console.error(err.message);
      alert("Profile update failed");
    }
  };

  return {
    handleProfileUpdate,
    loading: isLoading,
    PROFILE_FORM_CONTROLLER,
    user,
  };
};
