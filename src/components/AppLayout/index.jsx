import React from 'react'
import Header from '../Header/component'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default AppLayout