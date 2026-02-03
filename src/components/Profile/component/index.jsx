import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import { useProfileUpdate } from "../hooks/useProfileUpdate";
import { AuthContext } from "../../../context/AuthContext";
import image from "../../../assets/image2.png";

const Profile = ({ open = false, onClose = () => {} }) => {
  const { control, handleSubmit, reset } = useForm();
  const { handleProfileUpdate, loading, PROFILE_FORM_CONTROLLER } =
    useProfileUpdate(onClose);
  const dialogRef = useRef(null);
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <>
      <dialog
        ref={dialogRef}
        onClose={onClose}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onClose();
          }
        }}
        className="backdrop:bg-black/60 rounded-xl p-0 m-auto "
      >
        <div className="w-[80rem] bg-bgColor p-5 flex flex-col items-center">
          <h2 className="text-[1.5rem] font-bold text-white mb-2">
            Personal Information
          </h2>
{/* 
          <img
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          /> */}

          {user.name && (
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

            <button
              type="submit"
              disabled={loading}
              className="roundButtonStyle mt-8 self-center"
            >
              {loading ? "updating..." : "Update"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Profile;
