import React, { useEffect, useState } from 'react'
import WebsiteLogo from '../../components/WebsiteLogo';

const Header = () => {
  const [theme, setTheme] = useState(null);
  
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
  return (
    <div className='border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c]'>
      <div className='mx-auto w-[1400px] py-[20px] grid grid-cols-3 items-center'>
        <div>
          {/* <img src="	https://serviceapi.spicezgold.com/download/1744255975457_logo.jpg" alt="" /> */}
          <WebsiteLogo />
          </div>
          <div>
            {/* empty */}
          </div>
        <div className='flex justify-end gap-[10px]'>
          <div className='flex gap-[8px] items-center'>
            <a href="" className='dark:text-white'>Login</a><span className='border-[1px] border-[#968287] h-[60%] inline-block'></span><a href="" className='dark:text-white'>Register</a>
          </div>
          <button className='cursor-pointer hover:bg-[#e2dedf] p-[10px] rounded-full dark:text-white dark:hover:bg-[#444444]'>
            <svg stroke="currentColor" fill='currentColor' stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg></button>
          <button className='cursor-pointer hover:bg-[#e2dedf] p-[10px] rounded-full dark:text-white dark:hover:bg-[#444444]'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
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
    </div>
  )
}

export default Header
