import React, { useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setOpenLogin(true)} onSignupClick={() => setOpenSignup(true)} onProfileClick={() => setOpenProfile(true)} />

      <Outlet context={{ openLogin, setOpenLogin, openSignup, setOpenSignup, openProfile, setOpenProfile }} />
    </>
  );
}

export default AppLayout