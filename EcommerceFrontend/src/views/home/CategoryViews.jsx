import { Link } from "react-router-dom"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const CategoryViews = ({data}) => {
  return (
    <>
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
            spaceBetween: 20,
          },
          1857: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          1880: {
            slidesPerView: 8,
            spaceBetween: 15,
          }
        }}
        className="mySwiper categoryViewsSlider w-[1400px] max-[1858px]:w-[80%] max-[1605px]:w-[90%]"
      >
    {
        data && data?.length > 0 && data?.map(({id,categoryName,subNavbar,children}) => (
          <div className="w-[162.31px] h-[152.47px]" key={id}>
                <SwiperSlide key={id} style={{width: "162.31px !important" , height: "152.47px"}} className="w-162-31 h-[152.47px]">
                {/* 162.31 152.47 */}
                <Link to={`/products?catId=${id}`} data-discover="true">
                  <div className="item border border-gray-200 py-4 lg:py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-col">
                    <img src={`http://localhost:9000/category/get-category-image/${id}`} className="w-[44%]" />
                      <h3 className="text-[12px] lg:text-[15px] font-[500] mt-3">{categoryName}</h3>
                  </div>
                </Link>
              </SwiperSlide>
              </div>
        ))
    }
    </Swiper>
    </>
  )
}

export default CategoryViews
