import React from 'react'
import { useForm } from 'react-hook-form';
import useLogin from '../Hooks/useLogin';

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { handleLogin, loading } = useLogin();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(handleLogin)}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          width: "300px",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
          Login
        </h3>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "email is required" })}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "5px"
          }}
        />
        {formState.errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formState.errors.email.message}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "password is required" })}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "10px",
            marginBottom: "5px"
          }}
        />
        {formState.errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {formState.errors.password.message}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            backgroundColor: loading ? "#a5b4fc" : "#4f46e5",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
          disabled = {loading}
        >
          {loading ? "logging in..." : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
