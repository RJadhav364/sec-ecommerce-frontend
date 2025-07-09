import React, { useState } from 'react'
import Button from './Button'

const Address = () => {
  const [showTextarea, setShowTextarea] = useState(false)
  // const handleAddNewAddress = () => {
  //   // console.log("Hello sir")

  // }
  return (
    <>
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c] flex justify-between">
            <h2>Address</h2>
            {/* <p className="mt-0 mb-0 text-[#ff2727] p[2px_5px] cursor-pointer hover:underline">Change Password</p> */}
        </div>
        <div className='py-5 px-3'>
            <Button btnLabel="" onClick={() => setShowTextarea(!showTextarea)} classes="flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer w-full" insideELements={<span className="text-[14px] font-[500] text-black ">Add Address</span>} />
                {/* <span className="text-[14px] font-[500] text-black">Add Address</span> */}
                {/* <Button btnLabel="Add Address" classes="text-[14px] font-[500] text-black" onClick={handleAddNewAddress} /> */}
            {/* </div> */}
            {
              showTextarea && (
                <div className='mt-5'>
                  <textarea name="" id="" className='border-1 border-[rgba(0,0,0,0.2)] dark:border-amber-50 w-full p-4 rounded-md resize-none' maxlength="130"></textarea>
                </div>
              )
            }
        </div>
    </>
  )
}

export default Address
