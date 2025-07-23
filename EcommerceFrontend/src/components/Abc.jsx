import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link} from "react-router-dom"
// import './styles.css';

// import required modules
import { Pagination,Navigation, EffectCoverflow } from 'swiper/modules';
import ProductLoader from "./ProductLoader";
import PopularProductSlider from "../views/home/PopularProductSlider";

const Abc = ({popularProductsData , isPopularProductLoading}) => {
    let ProductSkeltonLoader = 5;
  return (
    <div className="pb-[30px] dark:bg-darkbg-highlight homeSlider">
            { isPopularProductLoading ? (
                <ProductLoader skeltonNo={ProductSkeltonLoader} classes="grid grid-cols-5 gap-[20px]" />
            ) : (
                <PopularProductSlider data={popularProductsData} />
            )
            }
        {/* </div> */}
    </div>
  );
};

export default Abc;
