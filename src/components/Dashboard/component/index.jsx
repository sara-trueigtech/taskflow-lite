import React from 'react'
import useLogout from '../hooks/useLogout';
import TaskBoard from '../../TaskBoard/component';

const Dashboard = () => {
  const { handleLogout } = useLogout();

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px"
        }}
      >
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 14px",
            backgroundColor: "#dc2626",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "6px",
        }}
      >
        <TaskBoard />
      </div>
    </div>
  );
};

export default Dashboard;
