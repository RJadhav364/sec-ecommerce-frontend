import React, { useEffect, useRef, useState } from 'react'
import undraw from "../../assets/undraw.png"
import useCustomerStore from '../../store/customerStore'
import { getWishListProduct, handleChangeUserData, handleRemoveFromFavourite } from './services/profileApis';
import { toast, Zoom } from 'react-toastify';
import My_profile from '../../components/My_profile';
import WishList from '../../components/WishList';
import Address from '../../components/Address';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {username , email , token , id, setAuth, customeProfilePic} = useCustomerStore();
    const [myList , setMyList] = useState([]);
    const {slug} = useParams();
    // console.log("params",slug)
    const [activeTab , setActiveTab] = useState(slug);
    useEffect(() => {
        getAllWishProducts();
    },[])
    useEffect(() => {
        setActiveTab(slug);
    },[slug])
    const getAllWishProducts = async() => {
        const data = await getWishListProduct(token , id);
        const result = await data.json();
        // console.log(data)
        setMyList(result.data);
    }
    // const removeFromFavourite = async(productId , userId) => {
    //     const apiResponse = await handleRemoveFromFavourite(token , productId , userId);
    //     switch(true){
    //         case apiResponse.status == 200:
    //             toast.success(`Product removed from Wish List`, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: false,
    //                 pauseOnHover: false,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             getAllWishProducts();
    //             break;
    //         case apiResponse.status == 403:
    //             toast.error(`Token has expired`, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: false,
    //                 pauseOnHover: false,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             break;
    //         default:
    //             toast.error(`Something went wrong`, {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: false,
    //                 pauseOnHover: false,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "colored",
    //             });
    //             break;
    //     }
    // }
    const tabs = [
        {
            id: "my-profile" , label: " My Profile" , svg : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[15px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
        },
        {
            id: "address" , label: " Address" , svg: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        },
        {
            id: "my-list" , label: " My List" , svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[17px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"></path></svg>
        },
        {
            id: "my-orders" , label: " My Orders" , svg: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"></path><path d="M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"></path></svg>
        }
    ];
    const tabContent = {
        "my-profile" : (
            <My_profile />
        ),
        "my-list" : (
            <WishList />
        ),
        "address" : (
            <Address />
        )
    }
    const handleChangeProfilePic = async(fileObject) => {
        // console.log(fileObject)
        const formData = new FormData();
        formData.append("customeProfilePic", fileObject);
        const getUpdatedResponse = await handleChangeUserData(token , id, formData);
        console.log(getUpdatedResponse);
        switch(true){
            case getUpdatedResponse.status == 200:
                toast.success('Profile Image Updated', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "drak",
                    transition: Zoom,
                });
                let jsonData = await getUpdatedResponse.json();
                // console.log("jsonData",jsonData)
                setAuth({customeProfilePic: jsonData.data});
                break;
            case getUpdatedResponse.status == 403:
                break;
            default:
                toast.error(`Something went wrong`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                break;
        }
    }
  return (
    <div className='dark:bg-darkbg-highlight bg-[#F5F0F0] dark:text-white font-display-Montserrat'>
      <div className='mx-auto w-[1400px] flex gap-[20px]'>
        <div className='dark:text-text-color w-[20%] py-6'>
            <div className='shadow-md rounded-md sticky top-[190px]'>
                <div className="w-full p-5 flex items-center justify-center flex-col dark:bg-darkbg-default bg-white">
                    <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
                        {
                            customeProfilePic ? (<img src={customeProfilePic} className="w-full h-full object-cover" />) : (<img src={undraw} className="w-full h-full object-cover" />)
                        }
                        
                        <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-[#fff] text-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path>
                            </svg>
                            <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" accept="image/*" name="avatar" onChange={(e) =>{
                                // console.log(e.target.files[0]);
                                handleChangeProfilePic(e.target.files[0]);
                            }}  />
                        </div>
                    </div>
                    <h3>{username}</h3>
                    <h6 className="text-[13px] font-[500]">{email}</h6>
                </div>
                <ul className="list-none pb-5 dark:bg-darkbg-default bg-[#f1f1f1] myAccountTabs">
                    {
                        tabs && tabs.map(({id,label,svg}) => (
                        <li className="w-full cursor-pointer" key={id} onClick={() => {setActiveTab(id)}}>
                            <a activeclassname="isActive" className="" data-discover="true">
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary w-full !text-left !py-2 !px-5 !justify-start !capitalize dark:text-white text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2 css-iyey26" tabIndex="0" type="button">
                                    {svg} {label}<span className="MuiTouchRipple-root css-4mb1j7"></span>
                                </button>
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        <div className='dark:text-text-color w-[80%] py-6'>
            <div className='shadow-md rounded-md bg-white dark:bg-darkbg-default'>
                {
                    tabContent[activeTab]
                }
            </div>
        {/* wish list code start */}
            {/* <div className='shadow-md rounded-md bg-white dark:bg-darkbg-default'>
                <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c]">
                    <h2>My List</h2>
                    <p className="mt-0 mb-0">There are <span className="font-bold text-primary">{myList.length}</span> products in your My List</p>
                </div>
                {
                    myList && myList.length > 0 && myList.map(({wishList,categoryId,categoryName,id,productBrand,productCurrentPrice,productDiscount,productInStock,productName,productOldPrice,productRating,userId,_id,createdAt,productId}) => (
                        <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)] dark:border-[#4c4c4c]" key={_id}>
                            <div className="img w-[30%] sm:w-[15%] h-[138px] rounded-md overflow-hidden">
                                <a className="group" href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">
                                    <img src={`http://localhost:9000/product/get-product-image/${productId}/0`} />
                                </a>
                            </div>
                            <div className="info w-full md:w-[85%] relative">
                                <svg onClick={() => removeFromFavourite(productId,userId)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z">
                                    </path>
                                </svg>
                                <span className="text-[13px]">{wishList.productBrand}</span>
                                <h3 className="text-[13px] sm:text-[15px]">
                                    <a className="link" href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">{wishList.productName}</a>
                                </h3>
                                <div className="flex items-center gap-4 mt-2 mb-2">
                                    <span className="price text-[14px]  font-[600]">{wishList.productCurrentPrice}</span>
                                    <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">{wishList.productOldPrice}</span>
                                    <span className="price text-primary text-[14px]  font-[600]">{wishList.productDiscount} OFF</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */}
        {/* wish list code start */}
        {/* profile code start */}
            {/* <div className='shadow-md rounded-md bg-white dark:bg-darkbg-default'>
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
                    <p className='mt-[30px]'>
                        <button className='bg-text-ff5252 p-[5px_20px] text-[15px] rounded-[5px] cursor-pointer'>Update Profile</button>
                    </p>
                </form>
            </div> */}
        {/* profile code send */}
        </div>
      </div>
    </div>
  )
}

export default Profile
