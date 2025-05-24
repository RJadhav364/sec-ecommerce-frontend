import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getParticularProduct } from './services/SingleProductRelatedApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ProductRating from "../../components/ProductRating"

const SingleProduct = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // console.log(id)
  useEffect(() => {
    getSingleProductData(id)
  },[id])
  const getSingleProductData = async(id) => {
    try {
      const getResponse = await getParticularProduct(id);
      const result = await getResponse.json();
      // console.log(result)
      setData(result.data);
    } catch (error) {
      
    }
  }
  return (
    <section className='py-5 dark:bg-darkbg-highlight'>
      <div className="div w-[1400px] grid grid-cols-2 mx-auto">
        <div className='flex gap-3'>
          <div className='w-[15%]'>
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              // loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiperSingleProduct"
              style={{ height: "400px" }}
            >
              {
                data && data.images && data.images.map((image,index) => (
                  // console.log(image)
                  <SwiperSlide key={index}>
                    <div className='h-full overflow-hidden rounded-md'>
                      <img src={image} />
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className='w-[85%]'>
            {/* <img src="" alt="" /> */}
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                width: "512px",
                height: "500px"
              }}
              loop={true}
              spaceBetween={10}
              // navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
              // direction='vertical'
            >
              {
                data && data.images && data.images.map((image,index) => (
                    // console.log(image)
                    <SwiperSlide key={index}>
                      <div className='h-full rounded-md w-full'>
                        <img src={image} className='w-full' />
                      </div>
                    </SwiperSlide>
                  ))
              }
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        <div className='w-full lg:w-[60%] pr-2 pl-2 lg:pr-10 lg:pl-10 dark:text-white'>
          <h1 class="text-[18px] sm:text-[22px] font-[600] mb-2">Apple iPhone 15 (Blue, 128 GB)</h1>
          <div className='flex'>
            <span className='productBrand'>productBrand</span><span className='productRating flex flex-row'><ProductRating stars={4} /></span>
          </div>
          <div className='pt-[16px]'>
            <div>
              <div>
                productOldPrice
              </div>
              <div>
                productCurrentPrice
              </div>
            </div>
            <div>
              Available IN Stock
            </div>
          </div>
          <div className='mt-3 pr-10 mb-5'>
            <p>Product Description</p>
          </div>
          <div className='flex items-center gap-4 py-4'>
            <div className='qtyBoxWrapper w-[70px]'>
              <input type="number" name="" id="" />
            </div>
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
          <div className="addToWishList">
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
    </section>
  )
}

export default SingleProduct
