import React, { useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [authMode, setAuthMode] = useState("");
  const [openProfile, setOpenProfile] = useState(false);

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
        onProfileClick={() => setOpenProfile(true)}
      />

      <Outlet context={{ openAuth, setOpenAuth, authMode, setAuthMode, openProfile, setOpenProfile }} />
    </>
  );
};

export default AppLayout