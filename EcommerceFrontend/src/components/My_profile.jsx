import React from 'react'
import useCustomerStore from '../store/customerStore';

const My_profile = () => {
    const {username , email , token , id} = useCustomerStore();
  return (
    <>
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c] flex justify-between">
            <h2>My Profile</h2>
            <p className="mt-0 mb-0 text-[#ff2727] p[2px_5px] cursor-pointer hover:underline">Change Password</p>
        </div>
        <form className='mt-8 px-3 py-3 pb-8'>
            <div className="grid grid-cols-2 gap-10">
                <div className="col">
                    <div className=""><div className="relative w-full  h-10 z-[1]"><input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 dark:focus:border-white" placeholder=" " defaultValue={username} /><label className={`absolute top-[8px] left-[12px] peer-focus:text-text-ff5252 transition-all peer-focus:-translate-y-[16px] peer-focus:text-[12px] dark:peer-focus:bg-[#000000] peer-focus:bg-white peer-focus:px-[5px] -z-[1] peer-focus:z-10 ${username != "" ? "dark:bg-[#000000] bg-white px-[5px] -translate-y-[16px] z-10 text-text-ff5252 text-[12px]" : "absolute top-[8px] left-[12px] -z-[1]"}`}>Username </label></div></div>
                </div>
                <div className="col">
                    <div className=""><div className="relative w-full h-10 z-[1]"><input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 dark:focus:border-white" placeholder=" " value={email} /><label className="absolute top-[8px] left-[12px] peer-focus:text-text-ff5252 transition-all peer-focus:-translate-y-[16px] peer-focus:text-[12px] dark:peer-focus:bg-[#000000] peer-focus:bg-white peer-focus:px-[5px] -z-[1] peer-focus:z-10">Email </label></div></div>
                </div>
                <div className="col">
                    <div className=""><div className="relative w-full h-10 z-[1]"><input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 dark:focus:border-white" placeholder=" " value={email} /><label className="absolute top-[8px] left-[12px] peer-focus:text-text-ff5252 transition-all peer-focus:-translate-y-[16px] peer-focus:text-[12px] dark:peer-focus:bg-[#000000] peer-focus:bg-white peer-focus:px-[5px] -z-[1] peer-focus:z-10">Phone Number </label></div></div>
                </div>
            </div>
            {/* </div> */}
            <p className='mt-[30px]'>
                <button className='bg-text-ff5252 p-[5px_20px] text-[15px] rounded-[5px] cursor-pointer'>Update Profile</button>
            </p>
        </form>
    </>
  )
}

export default My_profile
