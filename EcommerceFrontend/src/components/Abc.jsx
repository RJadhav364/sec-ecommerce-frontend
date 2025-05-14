import React, { useRef, useState, useEffect } from "react";

const details = [
    {
        img: "https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg",
        percent: 10},
        {img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
        percent: 20},
        {img: "https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp",
        percent: 30},
        {img: "https://serviceapi.spicezgold.com/download/1742462552739_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
        percent: 40},
        {img: "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
        percent: 50},
        {img: "https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
        percent: 60},
        {img: "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp",
        percent: 70},
        {img: "https://serviceapi.spicezgold.com/download/1742462212409_ascscscscccswefsdvdd1.jpg",
        percent: 80},
        {img: "https://serviceapi.spicezgold.com/download/1742453374891_1000014029787-Green-GREEN-1000014029787_01-2100.jpg",
        percent: 90},
        {img: "https://serviceapi.spicezgold.com/download/1742453278959_fgfg1.jpg",
        percent: 100},
]

const Abc = ({popularProductsData}) => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const itemWidth = 308; // width + gap
//   const itemWidth = 355; // width + gap
  const step = itemWidth * 3; // scroll by 3 cards at a time

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const visibleCards = Math.floor(containerWidth / itemWidth);
      const totalCards = details.length;
      const maxOffsetValue = (totalCards - visibleCards) * itemWidth * -1;
      console.log(maxOffsetValue)
      setMaxOffset(maxOffsetValue < 0 ? maxOffsetValue : 0);
    }
    console.log("containerRef.current.offsetWidth",containerRef.current.offsetWidth)
  }, [popularProductsData]);

  const handleSliderButton = (direction) => {
    if (direction === "next") {
      setOffset((prev) => Math.max(prev - step, maxOffset));
    } else {
      setOffset((prev) => Math.min(prev + step, 0));
    }
  };

  return (
    <div className="pb-[30px] relative overflow-hidden w-full dark:bg-darkbg-highlight" ref={containerRef}>
      <button
        onClick={() => handleSliderButton("prev")}
        className="p-[10px] rounded-full bg-white cursor-pointer absolute left-[13.8%] top-[54%] transform -translate-y-1/2 z-10 shadow-md"
      >
        ◀
      </button>
      <button
        onClick={() => handleSliderButton("next")}
        className="p-[10px] rounded-full bg-white cursor-pointer absolute right-[13.8%] top-[54%]  transform -translate-y-1/2 z-10 shadow-md"
      >
        ▶
      </button>

      {/* <div className="overflow-hidden w-full"> */}
        <div
          className="flex flex-row gap-[5px] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${offset == 0 ? "284" : offset}px)` }}
        >
          {popularProductsData && popularProductsData.map(({ productName, productBrand,id }) => (
            <div
              key={id}
              className="shadow-lg rounded-md overflow-hidden border border-[#efe1e1] dark:border-[#959090] w-[290px] flex-shrink-0"
            >
              <div className="group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative">
                <a href="/product/67dbe07b6e949cc6cd65781d" data-discover="true">
                <div className="img h-[200px] overflow-hidden">
                    <img src={`http://localhost:9000/product/get-product-image/${id}`} />
                    {/* <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" /> */}
                </div>
                </a>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">{productBrand}</span>
                <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                    </svg>
                </button>
                <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m304 160-64-64 64-64m-97 320 64 64-64 64"></path>
                    <circle cx="112" cy="96" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                    <circle cx="400" cy="416" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle>
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"></path>
                    </svg>
                </button>
                <button className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26" tabindex="0" type="button">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-[18px] !text-black group-hover:text-white hover:!text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                    </svg>
                </button>
                </div>
                </div>
              <div className="info p-3 py-5 relative pb-[50px] h-[190px]">
                <h6 className="text-[13px] !font-[400]">
                    <span className="link transition-all dark:text-text-color">CLAFOUTIS</span>
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
                <span
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
                </span>
                <div className="flex items-center gap-4 justify-between">
                    <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500]">
                    ₹1,650.00
                    </span>
                    <span className="price text-primary text-[12px] lg:text-[14px]  font-[600] dark:text-text-color">
                    ₹1,450.00
                    </span>
                </div>
                <div className="!absolute bottom-[15px] left-0 pl-3 pr-3 w-full">
                    <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary btn-org addToCartBtn btn-border flex w-full btn-sm gap-2 css-uiq2rh dark:text-text-color border border-[#ff5252] hover:text-white hover:shadow-[inset_300px_0_0_0_#ff5252] justify-center items-center py-[5px] transition duration-[.4s] ease-in-out cursor-pointer rounded-[5px]"
                    tabindex="0"
                    type="button"
                    >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
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
          ))}
        </div>
      {/* </div> */}
    </div>
  );
};

export default Abc;
