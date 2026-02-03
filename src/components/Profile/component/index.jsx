import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import { useProfileUpdate } from "../hooks/useProfileUpdate";
import { AuthContext } from "../../../context/AuthContext";
import image from "../../../assets/image2.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { control, handleSubmit, reset } = useForm();
  const { handleProfileUpdate, loading, PROFILE_FORM_CONTROLLER } =
    useProfileUpdate();
  const { user } = useContext(AuthContext);
  const nav = useNavigate()

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "",
        dob: user.dob || "",
        address: user.address || "",
        state: user.state || "",
        zipcode: user.zipcode || "",
      });
    }
  }, [user, reset]);

  return (
    <>
        <div className="w-full bg-bgColor p-5 flex flex-col items-center">
          <h2 className="text-[1.5rem] font-bold text-white mb-2">
            Personal Information
          </h2>

          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          {user?.name && (
            <p className="text-white font-bold text-3xl mb-[0.05rem]">
              {user.name}
            </p>
          )}
          {user.username && (
            <p className="text-white text-lg mb-6">UserID: {user.username}</p>
          )}
          <form
            onSubmit={handleSubmit(handleProfileUpdate)}
            className="p-[3rem] rounded-xl w-full flex flex-col"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <CommonFormController
                controls={PROFILE_FORM_CONTROLLER}
                control={control}
              />
            </div>

          <div className="flex items-center justify-center gap-6">
            <button
              type="submit"
              disabled={loading}
              className="roundButtonStyle mt-8 "
            >
              {loading ? "updating..." : "Update"}
            </button>
            <button
            onClick={() => nav("/dashboard")}
              className="roundButtonStyle mt-8 "
            >
              Cancel
            </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default Profile;
