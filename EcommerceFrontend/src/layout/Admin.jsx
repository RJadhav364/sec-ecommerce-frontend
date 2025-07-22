import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './partials/Header'
import Navbar from './partials/Navbar'
import Footer from './partials/Footer'
import useCustomerStore from '../store/customerStore'
import FooterNavigation from './partials/FooterNavigation'
const Admin = () => {
  const {isCustomerLogin} = useCustomerStore();
  const [blockBg , setBlockBg] = useState(false);
  const handleChild1Data = (data) => {
    setBlockBg(data); // Store data from Child1
  };
  return (
    <>
        <Header handleChild1Data={handleChild1Data} />
        <Navbar blockBg={blockBg} />
        <div className={`${isCustomerLogin ? "mt-[178px]" : "mt-[176px]" }`}>
          <Outlet />
        </div>
        <FooterNavigation />
        <Footer />
    </>  
  )
}

export default Admin
