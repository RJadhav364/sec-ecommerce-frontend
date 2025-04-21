import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
const Admin = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>  
  )
}

export default Admin
