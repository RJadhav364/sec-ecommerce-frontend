import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getParticularProduct } from './services/SingleProductRelatedApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

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
                width: "512px"
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
                      <div className='h-full rounded-md'>
                        <img src={image} className='' />
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
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
