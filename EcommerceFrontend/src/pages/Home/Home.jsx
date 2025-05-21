import React, { useEffect, useRef, useState } from 'react'
import kitchen from "../../assets/kitchen.png"
import bycycle from "../../assets/bycycle.png"
import watter_bottle from "../../assets/water-bottle.png"
import toys from "../../assets/toys.png"
import brand from "../../assets/brand.png"
import blanket from "../../assets/blanket.png"
import Abc from '../../components/Abc'
import HomeSlider from '../../components/HomeSlider.jsx'
import { homeSliderImages, popularProducts } from './services/apiCalls.jsx'
import useCategorysStore from '../../store/categoryStore.jsx'

const Home = () => {
  const [result,setResult] = useState({sliderData: [], popularProductsData: ""});
  const {data} = useCategorysStore();
  useEffect(() => {
    callSlider();
    // getOptions()
  },[])
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
  const callSlider = async() => {
    try{
      const getResponse = await homeSliderImages();
      // const getResponse2 = await popularProducts();
      const data = await getResponse.json();
      // const data2 = await getResponse2.json();
      setResult({sliderData: data.allImages, popularProductsData: details});
    } catch(err){
      console.log(err)
    }
  }
  
  return (
    <>
    <HomeSlider abc={result.sliderData}/>
      <div className='py-5 bg-[#F5F0F0] dark:bg-darkbg-highlight'>
        <div className="mx-auto w-[70%] grid grid-cols-8 gap-[5px]">
          {/* <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true" >
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                
                <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" className='w-[44%]' />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Electronics</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={kitchen} className='w-[44%]' />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Kitchen</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={bycycle} className='w-[44%]' />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Bicycles</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={watter_bottle} className="w-[44%]" />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Bottle</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={toys} className="w-[44%]" />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Toys</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={brand} className="w-[44%]" />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Clothes</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src={blanket} className="w-[44%]" />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Blankets</h3>
              </div>
            </a>
          </div>
          <div className="">
            <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
              <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" className="w-[44%]" />
                  <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">Footwear</h3>
              </div>
            </a>
          </div> */}
          {
            data && data.passedData && data.passedData.length > 0 && data.passedData.map(({id,categoryName,subNavbar,children}) => (
              <div className="" key='id'>
                <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
                  <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img src={`http://localhost:9000/category/get-category-image/${id}`} className="w-[44%]" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{categoryName}</h3>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
      {/* popular products start */}
      <div className='dark:bg-darkbg-highlight'>
        <div className='mx-auto w-[70%] pt-[10px]'>
          <div className="flex pb-[30px]">
            <div className='w-[40%]'>
              <p className='text-[20px] font-[600] dark:text-text-color'>
                Popular Products
              </p>
              <p className='text-[14px] font-[400] dark:text-text-color'>
                Do not miss the current offers until the end of March.
              </p>
            </div>
            {/* Tabs start */}
            <div className='w-[60%]' >
              <div className='flex gap-[20px]'>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Electronics</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Kitchen</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Bicycles</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Bottle</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Toys</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Clothes</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Blankets</button>
                <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color'>Footwear</button>
              </div>
            </div>
            {/* Tabs end */}
          </div>
          <Abc popularProductsData={result.popularProductsData} />
        </div>
      </div>
      {/* according to tab products start */}
        {/* <div className="pt-5 flex gap-[5px]"> */}
        {/* <Abc popularProductsData={data.popularProductsData} /> */}
        {/* </div> */}
        {/* according to tab products end */}
      {/* popular products end */}
    </>
  )
}

export default Home
