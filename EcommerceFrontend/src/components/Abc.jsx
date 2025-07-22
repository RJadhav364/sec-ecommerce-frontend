import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom"
// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';
import ProductLoader from "./ProductLoader";

const Abc = ({popularProductsData , isPopularProductLoading}) => {
    let ProductSkeltonLoader = 5;
  return (
    <div className="pb-[30px] dark:bg-darkbg-highlight homeSlider">
        {/* <div className="grid grid-cols-5">
        <div className="flex-1 space-y-4 py-1">
            <div className=" bg-gray-200 rounded animate-pulse w-full h-[200px]"></div>
            <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-1/6 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-2/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
        </div>
        <div className="flex-1 space-y-4 py-1">
            <div className=" bg-gray-200 rounded animate-pulse w-full h-[200px]"></div>
            <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-1/6 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-2/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
        </div>
        </div> */}
        {/* <div
          className={``}
        > */}
            { isPopularProductLoading ? (
                <ProductLoader skeltonNo={ProductSkeltonLoader} classes="grid grid-cols-5 gap-[20px]" />
            ) : (
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                // breakpoints={{
                // 640: {
                //     slidesPerView: 'auto',
                //     spaceBetween: 20,
                // },
                // 1857: {
                //     slidesPerView: 'auto',
                //     spaceBetween: 15,
                // },
                // 1880: {
                //     slidesPerView: 6.5,
                //     spaceBetween: 15,
                // }
                // }}
                className="mySwiper popularSwiperProduct"
            >
            {popularProductsData && popularProductsData.map(({ productName, productBrand,id,productOldPrice,productCurrentPrice,productRating,productInStock }) => (
                <SwiperSlide className="w-[290px]" style={{width: '290px'}} key={id}>
                    <div
                    className="shadow-lg rounded-md border border-[#efe1e1] dark:border-[#959090] w-[290px] flex-shrink-0"
                    >
                    <div className="group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative">
                    <Link to={`products/${id}`}  data-discover="true">
                    <div className="img h-[200px] overflow-hidden">
                        <img src={`http://localhost:9000/product/get-product-image/${id}/0`} />
                        <img src={`http://localhost:9000/product/get-product-image/${id}/1`} className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"></img>
                    </div>
                    </Link>
                    <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-[500]">{productRating}%</span>
                    <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                        <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary css-iyey26 flex justify-center items-center" tabIndex="0" type="button">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[18px] !text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                            </svg>
                        </button>
                        <button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary  group css-iyey26 cursor-pointer flex justify-center items-center" tabIndex="0" type="button">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[18px] text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                            </svg>
                        </button>
                    </div>
                    </div>
                    <div className="info p-3 py-5 relative pb-[50px] h-[190px] w-full">
                    <h6 className="text-[13px] !font-[400]">
                        <span className="link transition-all dark:text-text-color">{productBrand}</span>
                    </h6>
                    <h3 className="text-[12px] lg:text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
                        <a
                        className="link transition-all dark:text-text-color"
                        href="/product/67dbe07b6e949cc6cd65781d"
                        data-discover="true"
                        >
                        {productName}
                        </a>
                    </h3>
                    {/* <span
                        className="MuiRating-root MuiRating-sizeSmall Mui-readOnly MuiRating-readOnly css-lsmt2w flex"
                        role="img"
                        aria-label="5 Stars"
                    >
                        <span>
                        <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05 h-[20px] w-[20px]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                            fill="#FCCE64"
                            >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </span>
                        </span>
                        <span>
                        <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05 h-[20px] w-[20px]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                            fill="#FCCE64"
                            >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </span>
                        </span>
                        <span>
                        <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05 h-[20px] w-[20px]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                            fill="#FCCE64"
                            >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </span>
                        </span>
                        <span>
                        <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05 h-[20px] w-[20px]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                            fill="#FCCE64"
                            >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </span>
                        </span>
                        <span>
                        <span className="MuiRating-icon MuiRating-iconFilled css-e8k0ez">
                            <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1l6e05 h-[20px] w-[20px]"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="StarIcon"
                            fill="#FCCE64"
                            >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                            </svg>
                        </span>
                        </span>
                    </span> */}
                    {/* place rating here */}
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
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            )
            }
        {/* </div> */}
    </div>
  );
};

export default Abc;
