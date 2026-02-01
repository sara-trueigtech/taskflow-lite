import React, { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import { useProfileUpdate } from "../hooks/useProfileUpdate";
import { AuthContext } from "../../../context/AuthContext";

const Profile = ({ open = false, onClose = () => {}}) => {
  const { control, handleSubmit, reset } = useForm();
  const { handleProfileUpdate, loading, PROFILE_FORM_CONTROLLER } = useProfileUpdate(onClose);
  const dialogRef = useRef(null);
  const {user} = useContext(AuthContext);

    useEffect(() => {
    if (user) {
      reset({
        fullName: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone || "",
        gender: user.gender || "",
        dob: user.dob || "",
        address: user.address || "",
        zipcode: user.zipcode || "",
        state: user.state || "",
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
        style={{
          border: "none",
          borderRadius: "12px",
          padding: "0",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          margin: "auto",
        }}
      >
        <div
          style={{ padding: "24px" }}
        >
          <form
            onSubmit={handleSubmit(handleProfileUpdate)}
            style={{
              width: "340px",
              padding: "24px",
              background: "#f0f3ff",
              borderRadius: "10px",
            }}
          >

            <CommonFormController
              controls={PROFILE_FORM_CONTROLLER}
              control={control}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "16px",
                background: loading ? "#86efac" : "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "500",
              }}
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
