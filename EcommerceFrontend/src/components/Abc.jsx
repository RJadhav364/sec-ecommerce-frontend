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
        {img: "https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg",
            percent: 110},
        {img: "https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp",
            percent: 120},
        {img: "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp",
            percent: 130},
        {img: "https://serviceapi.spicezgold.com/download/1742462383488_siril-georgette-brown-color-saree-with-blouse-piece-product-images-rvegeptjtj-3-202308161432.webp",
            percent: 140},
        {img: "https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg",
            percent: 150},
            {img: "https://serviceapi.spicezgold.com/download/1742462287664_siril-poly-silk-white-beige-color-saree-with-blouse-piece-product-images-rv2vcdkuly-0-202304220523.webp",
                percent: 70},
                {img: "https://serviceapi.spicezgold.com/download/1742462729828_zoom_0-1673275594.webp",
                    percent: 30},
]

const Abc = () => {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const itemWidth = 295; // width + gap
//   const itemWidth = 355; // width + gap
  const step = itemWidth * 3; // scroll by 3 cards at a time

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const visibleCards = Math.floor(containerWidth / itemWidth);
      const totalCards = details.length;
      const maxOffsetValue = (totalCards - visibleCards) * itemWidth * -1;
      setMaxOffset(maxOffsetValue < 0 ? maxOffsetValue : 0);
    }
  }, []);

  const handleSliderButton = (direction) => {
    if (direction === "next") {
      setOffset((prev) => Math.max(prev - step, maxOffset));
    } else {
      setOffset((prev) => Math.min(prev + step, 0));
    }
  };

  return (
    <div className="pt-5 relative overflow-hidden w-full" ref={containerRef}>
      <button
        onClick={() => handleSliderButton("prev")}
        className="p-[10px] rounded-full bg-white cursor-pointer absolute left-[2%] top-1/2 transform -translate-y-1/2 z-10 shadow-md"
      >
        ◀
      </button>
      <button
        onClick={() => handleSliderButton("next")}
        className="p-[10px] rounded-full bg-white cursor-pointer absolute right-[2%] top-1/2 transform -translate-y-1/2 z-10 shadow-md"
      >
        ▶
      </button>

      {/* <div className="overflow-hidden w-full"> */}
        <div
          className="flex flex-row gap-[5px] transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${offset == 0 ? "212" : offset}px)` }}
        >
          {details.map(({ img, percent }, idx) => (
            <div
              key={idx}
              className="shadow-lg rounded-md overflow-hidden border w-[290px] flex-shrink-0"
            >
              <div className="relative group">
                <img src={img} alt="product" className="w-full h-[200px]" />
                <span className="absolute top-[10px] left-[10px] bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">
                  {percent}
                </span>
                <div className="actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
                        <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26"
                            tabindex="0"
                            type="button"
                        >
                            <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="text-[18px] !text-black group-hover:text-white hover:!text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="m15 3 2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"></path>
                            </svg>
                        </button>
                        <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26"
                            tabindex="0"
                            type="button"
                        >
                            <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            className="text-[18px] !text-black group-hover:text-white hover:!text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                                d="m304 160-64-64 64-64m-97 320 64 64-64 64"
                            ></path>
                            <circle
                                cx="112"
                                cy="96"
                                r="48"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                            ></circle>
                            <circle
                                cx="400"
                                cy="416"
                                r="48"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                            ></circle>
                            <path
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                                d="M256 96h84a60 60 0 0 1 60 60v212m-145 48h-84a60 60 0 0 1-60-60V144"
                            ></path>
                            </svg>
                        </button>
                        <button
                            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group css-iyey26"
                            tabindex="0"
                            type="button"
                        >
                            <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            className="text-[18px] !text-black group-hover:text-white hover:!text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                            </svg>
                            <span className="MuiTouchRipple-root css-4mb1j7"></span>
                        </button>
                        </div>
              </div>
              <div className="p-3 h-[190px]">
                <h6 className="text-[13px] font-[400]">CLAFOUTIS</h6>
                <h3 className="text-[13px] font-[500] mt-1 mb-1 text-[#000]">
                  Men Opaque Casual Shirt...
                </h3>
                <div className="flex justify-between text-[14px]">
                  <span className="line-through text-gray-500">₹1,650.00</span>
                  <span className="text-primary font-[600]">₹1,450.00</span>
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
