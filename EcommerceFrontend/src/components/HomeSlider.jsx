import React, { useEffect, useState } from 'react'

const HomeSlider = () => {
    let slides = [
        "https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg",
        "https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg",
          "https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg",
          "https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg",
        ];
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    useEffect(()=>{
      setTimeout(()=>{
        nextSlide();
      },3000)
    })
  return (
      <div className='bg-[#F5F0F0] pt-[30px] dark:bg-darkbg-highlight'>
        {/* slider code start */}
      <div className="overflow-hidden relative mx-auto w-[70%]">
      <div
        className={`flex transition ease-out duration-[.5s]`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img className='w-full h-full' src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl abc">
        <button onClick={previousSlide} className='group p-[10px] rounded-full bg-white cursor-pointer hover:shadow-[inset_200px_0_0_0_#ff5252]'>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className='text-black group-hover:text-white'>
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button onClick={nextSlide} className='p-[10px] rounded-full bg-white cursor-pointer'>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" className='text-black'>
            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
        </div>
        {/* slider code end */}
    </div>
  )
}

export default HomeSlider
