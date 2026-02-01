import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import CommonFormController from "../../../common/commonFormController";
import useSignup from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = ({ open = false, onClose = () => {}, openLogin = () => {}}) => {
  const { control, handleSubmit } = useForm();
  const { handleSignup, loading, SIGNUP_FORM_CONTROLLER } = useSignup(onClose);
  const dialogRef = useRef(null);

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
            onSubmit={handleSubmit(handleSignup)}
            style={{
              width: "340px",
              padding: "24px",
              background: "#f0f3ff",
              borderRadius: "10px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#1f2937",
                fontSize: "20px",
              }}
            >
              Create Account
            </h3>

            <CommonFormController
              controls={SIGNUP_FORM_CONTROLLER}
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
              {loading ? "Signing up..." : "Signup"}
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "14px",
                fontSize: "14px",
                color: "#6b7280",
              }}
            >
              Already have an account?{" "}
              <span onClick={openLogin}
                  style={{
                    color: "#4f46e5",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Login
              </span>
            </p>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Signup;
