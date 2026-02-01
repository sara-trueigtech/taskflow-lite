import React, { useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setOpenLogin(true)} onSignupClick={() => setOpenSignup(true)} />

      <Outlet context={{ openLogin, setOpenLogin, openSignup, setOpenSignup }} />
    </>
  );
}

export default AppLayout