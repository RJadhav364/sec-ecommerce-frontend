import React from 'react'

const FooterNavigation = () => {
  return (
    <div className='bg-[#f7f7f7] dark:bg-darkbg-default fixed bottom-0 left-0 right-0 dark:text-white w-full z-10 justify-between px-[15px] border-[1px] border-[#423c3c] max-[769px]:flex hidden'>
        <a activeclassname="isActive" className="py-[5px] pt-[8px]" href="/" data-discover="true">
        <button className="flex flex-col justify-center items-center gap-[5px]" tabIndex="0" type="button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"></path><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"></path></svg>
            <span className="text-[12px]">Home</span>
        </button>
        </a>
        <a activeclassname="isActive" className="py-[5px] pt-[8px]" href="/" data-discover="true">
        <button className="flex flex-col justify-center items-center gap-[5px]" tabIndex="0" type="button">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            <span className="text-[12px]">Wishlist</span>
        </button>
        </a>
        <a activeclassname="isActive" className="py-[5px] pt-[8px]" href="/" data-discover="true">
        <button className="flex flex-col justify-center items-center gap-[5px]" tabIndex="0" type="button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"></path><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path></svg>
            <span className="text-[12px]">Orders</span>
        </button>
        </a>
        <a activeclassname="isActive" className="py-[5px] pt-[8px]" href="/" data-discover="true">
        <button className="flex flex-col justify-center items-center gap-[5px]" tabIndex="0" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path d="M12 20a8 8 0 1 0 0-16"/><path strokeLinejoin="round" d="M4 12h10m0 0l-3-3m3 3l-3 3"/></g></svg>
            <span className="text-[12px]">Login</span>
        </button>
        </a>
        <a activeclassname="isActive" className="py-[5px] pt-[8px]" href="/" data-discover="true">
        <button className="flex flex-col justify-center items-center gap-[5px]" tabIndex="0" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 1.9a2.1 2.1 0 1 1 0 4.2A2.1 2.1 0 0 1 12.9 8A2.1 2.1 0 0 1 15 5.9M4 7v3H1v2h3v3h2v-3h3v-2H6V7zm11 6c-2.67 0-8 1.33-8 4v3h16v-3c0-2.67-5.33-4-8-4m0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H8.9V17c0-.64 3.1-2.1 6.1-2.1"/></svg>
            <span className="text-[12px]">Registers</span>
        </button>
        </a>
    </div>
  )
}

export default FooterNavigation
