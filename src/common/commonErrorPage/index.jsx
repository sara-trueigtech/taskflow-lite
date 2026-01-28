import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f8fafc",
      }}
    >
      <h1>Oops!</h1>
      <p>Something went wrong</p>

      {error?.statusText || error?.message ? (
        <p style={{ color: "red" }}>
          {error.statusText || error.message}
        </p>
      ) : null}

      <button
        onClick={() => navigate("/login")}
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          cursor: "pointer",
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
