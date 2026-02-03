import React, { useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  return (
    <>
      <Header
        onLoginClick={() => {
          setAuthMode("login");
          setOpenAuth(true);
        }}
        onSignupClick={() => {
          setAuthMode("signup");
          setOpenAuth(true);
        }}
      />

      <Outlet context={{ openAuth, setOpenAuth, authMode }} />
    </>
  );
};

export default AppLayout