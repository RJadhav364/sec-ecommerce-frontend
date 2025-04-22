import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
const Admin = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
    </>  
  )
}

export default Admin
