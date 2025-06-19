import React from 'react'

const Address = () => {
  return (
    <>
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c] flex justify-between">
            <h2>Address</h2>
            {/* <p className="mt-0 mb-0 text-[#ff2727] p[2px_5px] cursor-pointer hover:underline">Change Password</p> */}
        </div>
        <div className='py-5 px-3'>
            <div className="flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer">
                <span className="text-[14px] font-[500] text-black">Add Address</span>
            </div>
        </div>
    </>
  )
}

export default Address
