import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
const Admin = () => {
  return (
    <>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>  
  )
}

export default Admin
