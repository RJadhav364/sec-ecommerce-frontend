import React, { useEffect, useState } from 'react'
import WebsiteLogo from '../../components/WebsiteLogo';
import { Link } from 'react-router-dom';
import person_dark from "../../assets/person-dark.png"
import person_white from "../../assets/person-white.png"
import label_dark from "../../assets/label-dark.png"
import label_light from "../../assets/label-light.png"
import shopping_bag_dark from "../../assets/shopping-bag_dark.png"
import shopping_bag_light from "../../assets/shopping-bag-light.png"
import log_out_dark from "../../assets/log-out_&.png"
import logout123_light from "../../assets/log-out.png"
import useCustomerStore from '../../store/customerStore';
import { getWishListDetails } from '../../pages/ProductListing/services/ProductRelatedApis';
import useCartStore from '../../store/cartStore';

const Header = ({handleChild1Data}) => {
  const [theme, setTheme] = useState(null);
  const {username , email , isCustomerLogin, wishList, token , id , customerLogout} = useCustomerStore();
  const storeCartData = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const toggleDropdown = () => {
       setIsOpen(!isOpen);
       handleChild1Data(!isOpen)
  };
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  
  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const dropDown = [
    {
      label: "Profile",
      img_dark: person_dark,
      img_light: person_white,
      width: "30px",
      height: "30px",
      link: "customer/my-profile"
    },
    {
      label: "Orders",
      img_dark: label_dark,
      img_light: label_light,
      width: "30px",
      height: "30px",
      link: "customer/my-orders"
    },
    {
      label: "My List",
      img_dark: shopping_bag_dark,
      img_light: shopping_bag_light,
      width: "30px",
      height: "30px",
      link: "customer/my-list"
    }
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchCartDetails = async() => {
    try {
      const getResponse = await getWishListDetails(token, id);
      const result = await getResponse.json();
      // console.log(getResponse)
      switch(true){
        case getResponse.status == 200:
          storeCartData.setAuth({
            cartData: result.data
          });
          setCartCount(result.data.length)
          break;
        default:
          storeCartData.setAuth({
            cartData: "no data"
          });
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(isCustomerLogin , id)
  useEffect(() => {
    if(isCustomerLogin == true){
      fetchCartDetails();
    }
  },[isCustomerLogin])

  return (
    <>
      <header className='border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c] font-display-Montserrat sticky w-full top-0 z-[101]'>
        <div className='mx-auto w-[1400px] max-[1534px]:w-full max-[1534px]:px-[20px] py-[20px] grid grid-cols-3 items-center'>
          <div>
            {/* <img src="	https://serviceapi.spicezgold.com/download/1744255975457_logo.jpg" alt="" /> */}
            <WebsiteLogo />
            </div>
            <div>
              {/* empty */}
            </div>
          <div className='flex justify-end gap-[10px]'>
            {
              isCustomerLogin ? (
                <div className='p-[6px_8px] flex flex-row items-center gap-[10px] cursor-pointer relative max-[769px]:hidden' onClick={toggleDropdown}>
                  <div className='dark:hidden inline-block'>
                    <img src={person_dark} alt="" className='w-[40px] h-[40px] rounded-[50%] bg-[#E8E2E6]' />
                  </div>
                  <div className='hidden dark:inline-block'>
                    <img src={person_white} alt="" className='w-[40px] h-[40px] rounded-[50%] bg-[#656565]' />
                  </div>
                  <div className='flex flex-col gap-[5px]'>
                    <span className='dark:text-white text-[rgba(0,0,0,0.6)] leading-3 text-[15px] font-[500] mb-0 capitalize text-left justify-start'>
                      {username}
                    </span>
                    <span className='dark:text-white text-[rgba(0,0,0,0.6)] text-[13px] font-[400] capitalize text-left justify-start'>{email}</span>
                  </div>
                  {
                    isOpen && (
                      <div
                      // transition
                      className={`absolute right-auto z-10 top-[55px] mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#07070A] shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in w-56 
                        `}
                        // ${isOpen ? "opacity-[100%] w-56 h-auto" : "opacity-0 w-0 h-0"}
                      >
                        <div className="py-1 border-[#bab2b4]">
                          {
                            dropDown && dropDown.map(({label,img_dark,img_light,width,height,link},index) => (
                              <div key={index}>
                                <Link
                                  to={link}
                                  className="flex items-center gap-[10px] px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                >
                                  <img src={img_dark} className={`dark:hidden inline-block w-[30px] h-[30px]`} alt="" />
                                  <img src={img_light} className={`hidden dark:inline-block w-[30px] h-[30px]`} alt="" />
                                  {label}
                                </Link>
                              </div>
                            ))
                          }
                        </div>
                        <div className="py-1">
                          <div>
                            <a
                              onClick={() => customerLogout()}
                              className="flex items-center gap-[10px] px-4 py-2 text-sm text-gray-700 dark:text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden pl-[25px]"
                            >
                              <img src={log_out_dark} className={`dark:hidden inline-block w-[25px] h-[25px]`} alt="" />
                              <img src={logout123_light} className={`hidden dark:inline-block w-[25px] h-[25px]`} alt="" />
                              Logout
                            </a>
                          </div>
                        </div>
                        </div>
                    )
                  }
                </div>
              ) : (
                <div className='flex gap-[8px] items-center max-[769px]:hidden'>
                  <Link to={'/login'} className='dark:text-white'>Login</Link><span className='border-[1px] border-[#968287] h-[60%] inline-block'></span>
                  <Link to={'/register'} className='dark:text-white'>Register</Link>
                </div>
              )
            }
            <Link to={isCustomerLogin ? 'customer/my-list' : '/login'} className='cursor-pointer hover:bg-[#e2dedf] p-[10px] rounded-full dark:text-white dark:hover:bg-[#444444] w-[50px] h-[50px] flex justify-center items-center relative max-[769px]:hidden'>
              <svg stroke="currentColor" fill='currentColor' strokeWidth="0" viewBox="0 0 512 512" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg>
              <span className={`${isCustomerLogin ? "text-[13px] bg-[#ff5252] rounded-[50%] flex justify-center items-center absolute right-[8px] top-[24px] min-w-[19px]" : "hidden"}`}>{storeCartData?.cartData?.length}</span>
            </Link>
            <button className='cursor-pointer hover:bg-[#e2dedf] p-[10px] rounded-full dark:text-white dark:hover:bg-[#444444] w-[50px] h-[50px] flex justify-center items-center'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
            </button>
            <button
            type="button"
            onClick={handleThemeSwitch}
            className="fixed z-10 right-2 top-2 text-black bg-indigo-500 dark:text-white text-lg p-1 rounded-md"
            >
            {theme === 'dark' ? '🌙' : '🌞'}
            {/* Toggle Theme */}
            </button>
          </div>
        </div>
      </header>
      <div onClick={toggleDropdown} className={`${isOpen ? "fixed top-0 left-0 right-0 bottom-0 z-[10] bg-[rgba(145,145,145,0.5)]" : "hidden"}`}></div>
    </>
  )
}

export default Header
