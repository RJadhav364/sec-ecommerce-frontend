import React, { useEffect, useRef, useState } from 'react'
import navbarDetails from '../../utils/NavbarOptions'
import { useSearchParams } from 'react-router-dom';
import { getProduct, getWishListDetails, productInWishList, removeProductFromFavourite } from './services/ProductRelatedApis';
import ProductRating from '../../components/ProductRating';
import {Link} from "react-router-dom"
import useCustomerStore from '../../store/customerStore';
import { toast } from 'react-toastify';
import ConfirmationBox from '../../components/ConfirmationBox';
import Relogin from '../../components/Relogin';
import useCartStore from '../../store/cartStore';

const ProductsList = () => {
    const {token, id: userId} = useCustomerStore();
    console.log(token,userId)
    const {cartData , setAuth} = useCartStore();
    const [isReloginModelOpen, setIsReloginModelOpen] = useState(false)
    const paramMap = {
        catId: 'categoryId',
        subCatId: 'subCategoryId',
        thirdLevelcategoryId: 'thirdLevelcategoryId',
    };
    const [searchParams] = useSearchParams();
    const [confirmationBoxOpen, setConfirmationBoxOpen] = useState(false);
    let filterKey = null;
    let filterValue = null;
    for(const [key, value] of Object.entries(paramMap)){
        // console.log(key, key)
        const Id = searchParams.get(key);
        if(Id){
            filterKey = value;
            filterValue = Id;
            // setChangedInId(filterValue);
        }
    }
    const [products,setProducts] = useState([]);
    const getData = async() => {
        // const url = "https://example.org/products.json";
        try {
            const response = await getProduct(`${[filterKey]}=${filterValue}`);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setProducts(json.passedData)
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getData();
    },[filterValue])
    const addProductInFavourite = async(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId) => {
        const response = await productInWishList(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId,token);
        switch(true){
            case response.status == 200:
                toast.success(`Product Added in Cart \u{1F600}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                const getResponse = await getWishListDetails(token ,userId);
                const updatedCart = await getResponse.json();
                setAuth({cartData: updatedCart.data})
                break;
            case response.status == 409:
                toast.error(`Product already in Cart`, {
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
            case response.status == 403:
                setIsReloginModelOpen(true);
                break;
        }
    }
    const removeFromWishLIst = async(productId, userId) => {
        try {
            const result = await removeProductFromFavourite(token,productId, userId);
            const convertedResult = await result.json();
            switch(true){
                    case result.status == 200:
                        toast.success(`Product removed from cart`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                    });
                    const getResponse = await getWishListDetails(token, productId.userId);
                    const updatedCart = await getResponse.json();
                    setAuth({cartData: updatedCart.data})
                    break;
                default:
                    alert("Something went wrong")
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <div className='dark:bg-darkbg-highlight py-[30px] font-display-Montserrat'>
            <div className="mx-auto w-[1400px] flex gap-[10px]">
                <div className='dark:text-text-color w-[20%]'>
                    {/* category list start */}
                    <h3 className='w-full mb-[5px] text-[16px] font-[600] flex items-center pr-5 font-display-Montserrat'>Product Categories</h3>
                    <div className='h-[200px] overflow-y-scroll scrollProperties'>
                        {
                            navbarDetails && navbarDetails.length > 0 && navbarDetails.map(({key,to,pageName,subNavbar,subNavbarLink}) => (
                                <div key={key} className='flex items-center p-[5px_10px]'>
                                    <input type="checkbox" name={key} id={key} className='mr-2 h-4 border-gray-300 rounded focus:ring-indigo-500 hover:cursor-pointer' />
                                    <label htmlFor={key} className='text-sm text-gray-700 hover:cursor-pointer w-full dark:text-text-color text-[13px]'>
                                        {pageName}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                    {/* category list end */}
                </div>
                {/* products listing start */}
                    <div className='dark:text-text-color w-[80%] font-display-Montserrat'>
                        {/* listing bar start */}
                        <div className='bg-[#f1f1f1] p-[5px_30px] w-full mb-4 rounded-md flex items-center justify-between'>
                            {/* product count */}
                            <div className='text-black'>{products.length} products</div>
                            {/* if user want to change product view */}
                            <div className='flex gap-[15px]'>
                                <span className='p-[10px] rounded-[50%] bg-[#c1c1c1]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="black"></path>
                                        <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="black"></path>
                                        <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="black"></path>
                                        <path d="M8 4C9.10457 4 10 3.10457 10 2C10 0.89543 9.10457 0 8 0C6.89543 0 6 0.89543 6 2C6 3.10457 6.89543 4 8 4Z" fill="black"></path>
                                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" fill="black"></path>
                                        <path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" fill="black"></path>
                                        <path d="M14 4C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0C12.8954 0 12 0.89543 12 2C12 3.10457 12.8954 4 14 4Z" fill="black"></path>
                                        <path d="M14 10C15.1046 10 16 9.10457 16 8C16 6.89543 15.1046 6 14 6C12.8954 6 12 6.89543 12 8C12 9.10457 12.8954 10 14 10Z" fill="black"></path>
                                        <path d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z" fill="black"></path>
                                    </svg>
                                </span>
                                <span className='p-[10px] rounded-[50%]'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 7C14.433 7 16 5.433 16 3.5C16 1.567 14.433 0 12.5 0C10.567 0 9 1.567 9 3.5C9 5.433 10.567 7 12.5 7Z" fill="black"></path>
                                        <path d="M3.5 7C5.433 7 7 5.433 7 3.5C7 1.567 5.433 0 3.5 0C1.567 0 0 1.567 0 3.5C0 5.433 1.567 7 3.5 7Z" fill="black"></path>
                                        <path d="M12.5 16C14.433 16 16 14.433 16 12.5C16 10.567 14.433 9 12.5 9C10.567 9 9 10.567 9 12.5C9 14.433 10.567 16 12.5 16Z" fill="black"></path>
                                        <path d="M3.5 16C5.433 16 7 14.433 7 12.5C7 10.567 5.433 9 3.5 9C1.567 9 0 10.567 0 12.5C0 14.433 1.567 16 3.5 16Z" fill="black"></path>
                                    </svg>
                                </span>
                                <span className='p-[10px] rounded-[50%]'>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="black"></path>
                                    <path d="M2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.89543 6 0 6.89543 0 8C0 9.10457 0.89543 10 2 10Z" fill="black"></path>
                                    <path d="M2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14C0 15.1046 0.89543 16 2 16Z" fill="black"></path>
                                    <path d="M20 2C20 2.552 19.553 3 19 3H7C6.448 3 6 2.552 6 2C6 1.448 6.448 1 7 1H19C19.553 1 20 1.447 20 2Z" fill="black"></path>
                                    <path d="M20 8C20 8.552 19.553 9 19 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H19C19.553 7 20 7.447 20 8Z" fill="black"></path>
                                    <path d="M20 14C20 14.552 19.553 15 19 15H7C6.448 15 6 14.552 6 14C6 13.447 6.448 13 7 13H19C19.553 13 20 13.447 20 14Z" fill="black"></path>
                                </svg>
                                </span>
                            </div>
                        </div>
                        {/* listing bar end */}
                        <div className='grid grid-cols-4 gap-[10px]'>
                        {products && products.map(({ id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId }) => (
                            <div
                            key={id}
                            className="shadow-lg rounded-md overflow-hidden border border-[#efe1e1] dark:border-[#959090] w-full flex-shrink-0"
                            >
                                {/* <Link to={`/products/${id}`}> */}
                                    <div className="group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative z-0">
                                        <a href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">
                                        <div className="img h-[200px] overflow-hidden">
                                            <Link to={`/products/${id}`}>
                                                <img src={`http://localhost:9000/product/get-product-image/${id}/0`} />
                                                <img src={`http://localhost:9000/product/get-product-image/${id}/1`} className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"></img>
                                            </Link>

                                        </div>
                                        </a>
                                        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500] bg-[#ff5252]">{productDiscount}%</span>
                                        <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                                        <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary css-iyey26 flex justify-center items-center" tabIndex="0" type="button">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[18px] !text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                                            </svg>
                                        </button>
                                        {
                                            (() => {
                                                const isFavourite = cartData?.some(({productId}) => productId == id);
                                                return isFavourite ? (
                                                    <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button" onClick={() => removeFromWishLIst({productId: id ,userId})}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-[red]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                                                    </button>
                                                ) : (
                                                    <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button" onClick={() => {addProductInFavourite(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId)}}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                                            </svg>
                                                    </button>
                                                )
                                            })()
                                        }
                                        {/* {
                                            cartData && cartData.map(({productId, userId, _id}) => (
                                                productId == id ? (
                                                    <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-[red]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                                                    </button>
                                                ) : (
                                                    <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button" onClick={() => {addProductInFavourite(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId)}}>
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                                            </svg>
                                                    </button>
                                                )
                                            ))
                                        }
                                        {
                                            <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button" onClick={() => {addProductInFavourite(userId,id,productDiscount, productName, productOldPrice,productCurrentPrice, productRating,productInStock, productBrand, categoryName, categoryId)}}>
                                                {
                                                    cartData?.map(({productId ,  _id}) => productId == id ? (
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-[red]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"></path></svg>
                                                    ) : (
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                                        </svg>
                                                    ))
                                                }
                                            </button>
                                        } */}
                                        </div>
                                    </div>
                                    <div className="info p-3 py-5 relative pb-[50px] h-[190px]">
                                        <h6 className="text-[13px] !font-[400]">
                                            <span className="link transition-all dark:text-text-color">{productBrand}</span>
                                        </h6>
                                        <h3 className="text-[12px] lg:text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
                                            <a
                                            className="link transition-all dark:text-text-color whitespace-nowrap w-[240px] overflow-hidden text-ellipsis inline-block"
                                            href="/product/67dbe07b6e949cc6cd65781d"
                                            data-discover="true"
                                            >
                                            {productName}
                                            </a>
                                        </h3>
                                        <span
                                            className="MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-lsmt2w flex"
                                            role="img"
                                            aria-label="5 Stars"
                                        >
                                            {/* shows product rating code start */}
                                            <ProductRating stars={productRating} />
                                            {/* shows product rating code end */}
                                        </span>
                                        <div className="flex items-center gap-4 justify-between">
                                            <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500]">
                                                ₹{productOldPrice}.00
                                            </span>
                                            <span className="price text-primary text-[12px] lg:text-[14px]  font-[600] dark:text-text-color">
                                            ₹{productCurrentPrice}.00
                                            </span>
                                        </div>
                                        <div className="!absolute bottom-[15px] left-0 pl-3 pr-3 w-full">
                                            <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex w-full btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px]"
                                            tabIndex="0"
                                            type="button"
                                            >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 24 24"
                                                className="text-[18px]"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path fill="none" d="M0 0h24v24H0V0z"></path>
                                                <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                                            </svg>{" "}
                                            Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>  
                        ))}
                        </div>
                    </div>
                {/* products listing end */}
            </div>
        </div>
        {/* <ConfirmationBox setConfirmationBoxOpen={setConfirmationBoxOpen} confirmationBoxOpen={confirmationBoxOpen} handleConfirmButtonFn={addProductInFavourite} confirmationHeading="Something went wrong" confirmationContent="Token has expired need to relogin" /> */}
        <Relogin 
            isReloginModelOpen={isReloginModelOpen}
            onReloginModelClosed={() => setIsReloginModelOpen(false)}
        />
    </>
  )
}

export default ProductsList
