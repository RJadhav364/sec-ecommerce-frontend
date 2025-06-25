import React, { useEffect, useRef, useState } from 'react'
import useCustomerStore from '../store/customerStore';

const My_profile = () => {
    const {username , email , token , id, phonenumber} = useCustomerStore();
     const [isOpen, setIsOpen] = useState(false);
    const [customerUpdatedData , setCustomerUpdatedData] = useState(
    {
        username: username,
        email: email,
        phonenumber: "",
    });
    const handleUpdateCustomerData = (e) => {
        e.preventDefault();
        // for(let key in extraData.current){
        //     setCustomerUpdatedData({[key] : extraData.current[key].value})
        // }
        console.log(customerUpdatedData);
    }
    const opnPasswordModel = () => {
        setIsOpen(!isOpen);
        // handleInputChange("username", "")
        // for (let key in extraData.current) {
        //     if (extraData.current[key]) {
        //         extraData.current[key].value = ''; // reset value to empty
        //     }
        // }
    }
    useEffect(() => {
        setCustomerUpdatedData(
            isOpen
            ? { oldPassword: "", newpassword: "", confirmPassword: "" }
            : { username: username, email: email, phonenumber: "" }
        );
        // console.log(customerUpdatedData)
    }, [isOpen]);
  return (
    <>
        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c] flex justify-between">
            <h2>{isOpen ? "Change Password" : "My Profile"}</h2>
            <button className="mt-0 mb-0 text-[#ff2727] p[2px_5px] cursor-pointer hover:underline" onClick={opnPasswordModel}>Change Password</button>
        </div>
        <form className='mt-8 px-3 py-3 pb-8'>
            <div className="grid grid-cols-2 gap-10">
                {
                    // isOpen ? (
                    //     customerUpdatedData && Object.keys(customerUpdatedData).map((value) => (
                    //         // console.log("render"),
                    //         <div className="col">
                    //             <div className="">
                    //                 <div className="relative w-full  h-10 z-[1]">
                    //                     <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 dark:focus:border-white" placeholder=" " defaultValue={customerUpdatedData[value]} onChange={(e) => { setCustomerUpdatedData((prev) => ({...prev,[value]: e.target.value,
                    //                     }));}} />
                    //                     <label className={`peer-focus:text-text-ff5252 transition-all peer-focus:-translate-y-[16px] peer-focus:text-[12px] dark:peer-focus:bg-[#000000] peer-focus:bg-white peer-focus:px-[5px]  ${customerUpdatedData[value] != "" ? "dark:bg-[#000000] bg-white px-[5px] -translate-y-[16px] text-text-ff5252 text-[12px] absolute top-[8px] left-[12px] z-[1]" : "absolute top-[8px] left-[12px] z-[-1] peer-focus:z-[1]"}`}>{value} </label>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     ))
                    // ) : (
                        customerUpdatedData && Object.keys(customerUpdatedData).map((value, index) => (
                            // console.log(customerUpdatedData),
                            <div className="col" key={index}>
                                <div className="">
                                    <div className="relative w-full  h-10 z-[1]">
                                        <input className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 dark:focus:border-white" placeholder=" " value={customerUpdatedData[value]} 
                                        onChange={(e) => {
                                            setCustomerUpdatedData((prev) => ({...prev,[value]: e.target.value,}));
                                            // handleInputChange(value, e.target.value)
                                        }} 
                                        // ref={(e)=>{extraData.current.username = e}}
                                        />
                                        <label className={`peer-focus:text-text-ff5252 transition-all peer-focus:-translate-y-[16px] peer-focus:text-[12px] dark:peer-focus:bg-[#000000] peer-focus:bg-white peer-focus:px-[5px]  ${customerUpdatedData[value] != "" ? "dark:bg-[#000000] bg-white px-[5px] -translate-y-[16px] text-text-ff5252 text-[12px] absolute top-[8px] left-[12px] z-[1]" : "absolute top-[8px] left-[12px] z-[-1] peer-focus:z-[1]"}`}>{value} </label>
                                    </div>
                                </div>
                            </div>
                        ))
                    // )
                }
            </div>
            {/* </div> */}
            <p className='mt-[30px]'>
                <button className='bg-text-ff5252 p-[5px_20px] text-[15px] rounded-[5px] cursor-pointer' onClick={(e) => handleUpdateCustomerData(e)}>Update Profile</button>
            </p>
        </form>
    </>
  )
}

export default My_profile
