import React, { useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setOpenLogin(true)} />

      <Outlet context={{ openLogin, setOpenLogin }} />
    </>
  );
}

export default AppLayout