import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  const navbarDetails = [
    {
      to: "/",
      pageName: "Home",
      key: 1,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Electronics",
      key: 2,
      subNavbar: true,
      subNavbarLink: [
        {
          subPageName: "Mobile",
          key: "mobile"
        },
        {
          subPageName: "TV",
          key: "tv",
        },
        {
          subPageName: "Laptop",
          key: "laptop",
        },
        {
          subPageName: "Camera",
          key: "camera",
        }
      ]
    },
    {
      to: "/",
      pageName: "Kitchen",
      key: 3,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Bicycles",
      key: 4,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Bottle",
      key: 5,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Fashion accessories",
      key: 6,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Clothes",
      key: 7,
      subNavbar: true,
      subNavbarLink: [
        {
          subPageName: "Men",
          key: "men"
        },
        {
          subPageName: "Women",
          key: "women",
        },
        {
          subPageName: "Kids",
          key: "kids",
        },
      ]
    },
    {
      to: "/",
      pageName: "Blankets",
      key: 8,
      subNavbar: false
    },
    {
      to: "/",
      pageName: "Footwear",
      key: 9,
      subNavbar: false
    },
  ]
  return (
    <>
      <div className='border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c]'>
          <div className='mx-auto w-[1400px] py-[20px]'>
              {/* <div></div> */}
              <ul className='flex gap-3 items-center justify-center'>
                {
                  navbarDetails && navbarDetails.length > 0 && navbarDetails.map(({key,to,pageName,subNavbar,subNavbarLink}) => (
                    <li key={key} className='group text-[16px]font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>
                      <Link to={to}>{pageName}
                      </Link>
                      { subNavbar == true && (
                        <ul className='absolute z-[999] bg-white left-[-15%] w-[122px] top-[110%] border-[1px] border-black opacity-0 group-hover:opacity-100 group-hover:inline-block transform group-hover:transform group-hover:origin-top transition-all group-hover:transition-all group-hover:duration-[.5s] group-hover:ease-in-out max-h-0 group-hover:max-h-[200px]'>
                          {
                            subNavbarLink && subNavbarLink.length > 0 && subNavbarLink.map(({subPageName,key}) => (
                              <li key={key} className='py-[5px] px-[30px] text-black'>{subPageName}</li> 
                            ))
                          }
                        </ul>
                      )
                      }
                    </li>
                  ))
                }
              </ul>
              {/* <div></div> */}
          </div>
        {/* Navbar */}
      </div>
    </>
  )
}

export default Navbar
