import React, { useContext, useState } from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const AppLayout = () => {
  const {setOpenAuth, setAuthMode} = useContext(AuthContext)

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

      <Outlet />
    </>
  );
};

export default AppLayout