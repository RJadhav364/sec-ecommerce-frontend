import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, EffectFade, Autoplay } from 'swiper/modules';

const HomeSlider = ({sliderData, isSliderLoading}) => {
  // console.log(sliderData)
    let slides = [
        "https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg",
        "https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg",
          "https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg",
          "https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg",
        ];
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(sliderData.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === sliderData.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    // useEffect(()=>{
    //   setTimeout(()=>{
    //     nextSlide();
    //   },3000)
    // })
  return (
      <div className='bg-[#F5F0F0] pt-[30px] dark:bg-darkbg-highlight'>
        {/* slider code start */}
        <div className="mx-auto w-[70%]">
          <div
            className={``}
            // className={`flex transition ease-out duration-[.5s]`}
          >
            {
              isSliderLoading ? (
                <div className="card rounded-[12px] text-xl shadow-2xl py-5 animate-pulse">
                  <a href="#">
                      <div className="w-full h-64 bg-gray-200 rounded mb-3"></div>
                  </a> 
                </div>
              ) : (

            <Swiper
            // slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
              {sliderData && sliderData.map(({homeSliderImage}) => (
                <SwiperSlide>
                  <img className='w-full h-full' src={homeSliderImage} />;
                </SwiperSlide>
              ))}
            </Swiper>
              )
            }
          </div>
        </div>
        {/* slider code end */}
    </div>
  )
}

export default HomeSlider
