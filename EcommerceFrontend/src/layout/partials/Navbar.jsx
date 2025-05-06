import React, { useState } from 'react'

const Navbar = () => {
  return (
    <>
      <div className='border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c]'>
          <div className='mx-auto w-[1400px] py-[20px]'>
              {/* <div></div> */}
              <ul className='flex gap-3 items-center justify-center'>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Home</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Electronics</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Kitchen</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Bicycles</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Bottle</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Fashion accessories</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Clothes</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Blankets</a></li>
                  <li className='text-[16px] text-[#000c] font-semibold px-[10px]'><a href='#' className='transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'>Footwear</a></li>
              </ul>
              {/* <div></div> */}
          </div>
        {/* Navbar */}
      </div>
    </>
  )
}

export default Navbar
