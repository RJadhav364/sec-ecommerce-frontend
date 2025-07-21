import React, { useEffect, useRef, useState } from 'react'
import Abc from '../../components/Abc'
import HomeSlider from '../../views/home/HomeSlider.jsx'
import CategoryViews from '../../views/home/CategoryViews.jsx'
import { getPopularProduct, homeSliderImages } from './services/apiCalls.jsx'
import useCategorysStore from '../../store/categoryStore.jsx'
import Button from '../../components/Button.jsx'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Home = () => {
  const {data} = useCategorysStore();
  const [result,setResult] = useState({sliderData: [], isSliderLoading: true, isProductLoading: true, popularProductsData: "" , popularProductId: data?.passedData?.[0].id});
  const homePopularSection = useRef({
    isPopular : true,
    categoryId: data?.passedData?.[0].id,
  })
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
      const getResponse2 = await getPopularProduct(homePopularSection.current);
      const data = await getResponse.json();
      const data2 = await getResponse2.json();
      switch(true){
        case getResponse.status == 200:
          setResult({sliderData: data.allImages, isSliderLoading: false, isProductLoading: false ,popularProductsData: data2.data, popularProductId: result.popularProductId});
          break;
      }
    } catch(err){
      console.log(err)
    }
  }

  const handleShowPopularSection = async(id) => {
    homePopularSection.current.categoryId = id;
    // console.log(homePopularSection);
    try {
      setResult({sliderData: result.sliderData,popularProductsData: "", popularProductId: id, isProductLoading: true});
      const getResponse2 = await getPopularProduct(homePopularSection.current);
    switch(true){
      case getResponse2.status == 200:
        let newProducts = await getResponse2.json();
        setResult({sliderData: result.sliderData,popularProductsData: newProducts.data, popularProductId: id, isProductLoading: false});
        break;
      default:
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
    <HomeSlider sliderData={result.sliderData} isSliderLoading={result.isSliderLoading} />
      <div className='py-5 bg-[#F5F0F0] dark:bg-darkbg-highlight'>
        {/* <div className="mx-auto w-[70%] grid grid-cols-8 gap-[5px] max-[1858px]:w-[80%] max-[1605px]:w-[90%]"> */}
          {/* category with images block start */}
          {/* {
            data && data.passedData && data.passedData.length > 0 && data.passedData.map(({id,categoryName,subNavbar,children}) => (
              <div className="" key={id}>
                <a href="/products?catId=67cfa3233c7fa6b8e3276e3d" data-discover="true">
                  <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img src={`http://localhost:9000/category/get-category-image/${id}`} className="w-[44%]" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{categoryName}</h3>
                  </div>
                </a>
              </div>
            ))
          } */}
          <CategoryViews data={data?.passedData} />
          {/* category with images block end */}
        {/* </div> */}
      </div>
      {/* popular products start */}
      <div className='dark:bg-darkbg-highlight'>
        <div className='mx-auto w-[1400px] pt-[10px] max-[1858px]:w-[80%] max-[1605px]:w-[90%]'>
          <div className="flex pb-[30px] max-[1415px]:flex-col">
            <div className='w-[40%] max-[1415px]:w-full max-[1415px]:text-center'>
              <p className='text-[20px] font-[600] dark:text-text-color'>
                Popular Products
              </p>
              <p className='text-[14px] font-[400] dark:text-text-color'>
                Do not miss the current offers until the end of March.
              </p>
            </div>
            {/* Tabs start */}
            <div className='w-[60%] max-[1415px]:w-full' >
              <div className='flex gap-[20px] max-[1415px]:justify-center'>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  // navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                  breakpoints={{
                    640: {
                      slidesPerView: 'auto',
                      spaceBetween: 5,
                    },
                    1880: {
                      slidesPerView: 8,
                      spaceBetween: 5,
                    }
                  }}
                  className="mySwiper popularSwiper"
                >
                  {
                    data && data.passedData && data.passedData.length > 0 && data.passedData.map(({id,categoryName,subNavbar,children}) => (
                      <SwiperSlide className='w-102-2' style={{width: "102.2px !important" , height: "45px"}}>
                        <Button key={id} onClick={() => handleShowPopularSection(id)} classes={`relative text-[0.875rem] tracking-[0.02857em] p-[12px_16px] cursor-pointer dark:text-text-color cursor-pointer ${result.popularProductId == id && "after:content-[''] after:w-full after:bg-white after:absolute after:h-[3px] after:bottom-0 after:left-0 after:right-0"}`} btnLabel={categoryName} />
                       </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
            {/* Tabs end */}
          </div>
          <Abc popularProductsData={result.popularProductsData} isPopularProductLoading={result.isProductLoading} />
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
