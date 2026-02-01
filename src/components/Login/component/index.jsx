import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useLogin from "../Hooks/useLogin";
import CommonFormController from "../../../common/commonFormController";
import { Link } from "react-router-dom";

const Login = ({ open, onClose }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleLogin, loading, LOGIN_FORM_CONTROLLER } = useLogin(onClose);

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
        style={{
          border: "none",
          borderRadius: "12px",
          padding: "0",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          margin: "auto",
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            onClose();
          }
        }}
      >
        <div style={{ padding: "24px" }}>
          <div>
            <form
              onSubmit={handleSubmit(handleLogin)}
              style={{
                backgroundColor: "#eef2ff",
                padding: "24px",
                width: "320px",
                borderRadius: "10px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "18px",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Login
              </h3>

              <CommonFormController
                controls={LOGIN_FORM_CONTROLLER}
                control={control}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "16px",
                  backgroundColor: loading ? "#a5b4fc" : "#4f46e5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontWeight: "500",
                  transition: "background 0.2s ease",
                }}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p
              style={{
                textAlign: "center",
                marginTop: "14px",
                fontSize: "14px",
                color: "#374151",
              }}
            >
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#4f46e5",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Login;
