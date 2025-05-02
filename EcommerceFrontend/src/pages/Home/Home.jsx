import React from 'react'
import kitchen from "../../assets/kitchen.png"
import bycycle from "../../assets/bycycle.png"
import watter_bottle from "../../assets/water-bottle.png"
import toys from "../../assets/toys.png"
import brand from "../../assets/brand.png"
import blanket from "../../assets/blanket.png"
import Abc from '../../components/Abc'

const Home = () => {
  return (
    <>
      <div className='py-5'>
        <div className="mx-auto w-[70%] grid grid-cols-8 gap-[5px]">
          <div className="">
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
          </div>
        </div>
      </div>
      {/* popular products start */}
      <div className='mx-auto w-[70%]'>
        <div className="flex">
          <div className='w-[40%]'>
            <p className='text-[20px] font-[600]'>
              Popular Products
            </p>
            <p className='text-[14px] font-[400]'>
              Do not miss the current offers until the end of March.
            </p>
          </div>
          {/* Tabs start */}
          <div className='w-[60%]' >
            <div className='flex gap-[20px]'>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Electronics</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Kitchen</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Bicycles</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Bottle</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Toys</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Clothes</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Blankets</button>
              <button className='text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer'>Footwear</button>
            </div>
          </div>
          {/* Tabs end */}
        </div>
      </div>
      {/* according to tab products start */}
        {/* <div className="pt-5 flex gap-[5px]"> */}
        <Abc />
        {/* </div> */}
        {/* according to tab products end */}
      {/* popular products end */}
    </>
  )
}

export default Home
