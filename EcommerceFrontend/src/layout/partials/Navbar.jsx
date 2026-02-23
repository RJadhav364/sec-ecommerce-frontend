import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { fetchCategories } from "../../utils/fetchCategory";
import useCategoryStore from '../../store/categoryStore';
import useCustomerStore from '../../store/customerStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Button from '../../components/Button';
import CategoryDrawer from '../../views/home/CategoryDrawer';

const Navbar = ({ blockBg }) => {
  const [options, setOptions] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // console.log(options)
  const storeCategory = useCategoryStore();
  const getCategories = async () => {
    const data = await fetchCategories(); // API call
    storeCategory.setAuth({
      isLoading: true,
      data: data
    })
    setOptions(data);
  }
  useEffect(() => {
    getCategories(); // It will call API only once due to `fetched` flag
  }, []);
  const { isCustomerLogin } = useCustomerStore();
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }
  return (
    <>
      <div className={`border-b-[1px] border-[#c1c1c1] bg-white dark:bg-darkbg-default dark:border-[#423c3c] font-display-Montserrat sticky w-full top-[90.5px] ${isCustomerLogin ? "" : ""} ${blockBg ? "z-[-1]" : "z-[101]"}`}>
        {/* <div className={`py-[20px] w-[800px] m-auto`}> */}
        <div className='mx-auto w-[1400px] py-[20px] max-[1480px]:w-full grid grid-cols-5 gap-[5px]'>
          <Button insideELements={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6.532 4.75h6.936c.457 0 .854 0 1.165.03c.307.028.685.095.993.348c.397.326.621.814.624 1.322c.002.39-.172.726-.34.992c-.168.27-.411.59-.695.964l-.031.04l-.01.013l-2.555 3.369c-.252.332-.315.42-.359.51a1.2 1.2 0 0 0-.099.297c-.02.1-.023.212-.023.634v4.243c0 .208 0 .412-.014.578c-.015.164-.052.427-.224.663c-.21.287-.537.473-.9.495c-.302.019-.547-.103-.69-.183c-.144-.08-.309-.195-.476-.31l-.989-.683l-.048-.033c-.191-.131-.403-.276-.562-.477a1.7 1.7 0 0 1-.303-.585c-.071-.244-.07-.5-.07-.738v-2.97c0-.422-.004-.534-.023-.634a1.2 1.2 0 0 0-.1-.297c-.043-.09-.106-.178-.358-.51L4.825 8.459l-.01-.012l-.03-.04c-.284-.375-.527-.695-.696-.965c-.167-.266-.34-.602-.339-.992a1.72 1.72 0 0 1 .624-1.322c.308-.253.686-.32.993-.349c.311-.029.707-.029 1.165-.029m.397 4l1.647 2.17l.035.047c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715l.035-.046l1.646-2.17zm7.28-1.5c.195-.26.334-.45.43-.604c.08-.126.104-.188.11-.207a.22.22 0 0 0-.057-.134a1 1 0 0 0-.2-.032c-.232-.022-.556-.023-1.06-.023H6.568c-.504 0-.828 0-1.06.023a1 1 0 0 0-.2.032a.22.22 0 0 0-.057.134c.006.019.03.081.11.207c.096.155.235.344.43.604zm1.541 3.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.5 2.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m-.5 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75" /></svg>} btnLabel="Shop by Category" classes="dark:text-white flex items-center gap-[5px] justify-center border-1 rounded-[6px] cursor-pointer" onClick={handleOpenDrawer} />
          {/* <div></div> */}
          <ul className='flex gap-3 items-center max-[891px]:px-[20px] col-span-3'>
            <Swiper
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                200: {
                  slidesPerView: 'auto',
                  spaceBetween: 3,
                },
                1880: {
                  slidesPerView: 'auto',
                  spaceBetween: 5,
                }
              }}
              className="mySwiper navaigationSwiper"
            >
              <SwiperSlide className='w-[70.11px] h-[40px]'>
                <li className='group text-[16px] font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'><Link to={"/"}>Home
                </Link></li>
              </SwiperSlide>
              <SwiperSlide className='w-[70.11px] h-[40px]'>
                <li className='group text-[16px] font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'><Link to={"/"}>Home
                </Link></li>
              </SwiperSlide>
              <SwiperSlide className='w-[70.11px] h-[40px]'>
                <li className='group text-[16px] font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'><Link to={"/"}>Home
                </Link></li>
              </SwiperSlide>
              <SwiperSlide className='w-[70.11px] h-[40px]'>
                <li className='group text-[16px] font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px]'><Link to={"/"}>Home
                </Link></li>
              </SwiperSlide>

              {
                options && options.passedData && options.passedData.length > 0 && options.passedData.map(({ id, categoryName, subNavbar, children }) => (
                  // <React.Fragment key={id}>
                  <SwiperSlide key={id}>
                    <li key={id} className='group text-[16px] font-semibold relative transition duration-[.4s] ease-in-out shadow-[inset_0_0_0_0_#ff5252] text-[#ff5252] hover:text-white hover:shadow-[inset_200px_0_0_0_#ff5252] p-[10px] rounded-[8px] cursor-pointer'>
                      <Link to={`products?catId=${id}`}>{categoryName}
                      </Link>
                      {subNavbar == true && (
                        <ul className='absolute z-[999] bg-white left-[-3%] w-[122px] top-[103%] border-[1px] shadow-md  opacity-0  transform  transition-all   max-h-0 invisible pointer-events-none group-hover:inline-block group-hover:visible group-hover:pointer-events-auto group-hover:max-h-[200px] group-hover:opacity-100 group-hover:transform group-hover:origin-top group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out'>
                          {/* group-hover:opacity-100 group-hover:inline-block
                            group-hover:transform group-hover:origin-top
                            group-hover:transition-all group-hover:duration-[.3s]
                            group-hover:ease-in-out
                            group-hover:max-h-[200px]
                            */}
                          {
                            children && children.length > 0 && children.map(({ subCategoryName, id, parentCategory, children }) => (
                              <div key={id} className="group/subgroup">
                                <Link to={`products?subCatId=${id}`}>
                                  <li key={id} className='py-[5px] px-[30px] text-black cursor-pointer relative '>{subCategoryName}
                                    {/* group/subgroup */}

                                    {/* <ul className='absolute left-[106%] w-[122px] top-[-2%] transform translate-x-0 opacity-0 origin-left bg-white  transition-all duration-300 ease-in-out max-h-0 group-hover/subgroup:-translate-x-[5px]  group-hover/subgroup:max-h-[200px] group-hover/subgroup:opacity-100 invisible pointer-events-none group-hover/subgroup:visible group-hover/subgroup:pointer-events-auto
                                  '> */}
                                    {/* group-hover/subgroup:-translate-x-[5px] 
                                        group-hover/subgroup:max-h-[200px]
                                        group-hover/subgroup:opacity-100
                                    */}
                                    {/* {
                                      // children && children.length > 0 && children.map(({children,_id}) => (
                                        children.length > 0 && children.map(({thirdLevelCatName,_id}) => (
                                          // <Link to={`products?thirdLevelcategoryId=${_id}`} key={_id}>
                                            <li key={_id} className='py-[5px] px-[30px] text-black cursor-pointer'>{thirdLevelCatName}</li>
                                          // </Link>
                                        ))
                                      // ))
                                    } */}
                                    {/* </ul> */}
                                  </li>
                                </Link>
                                <ul className='absolute left-[105%] w-[122px] top-[50%] transform translate-x-0 opacity-0 origin-left bg-white  transition-all duration-300 ease-in-out max-h-0 group-hover/subgroup:-translate-x-[5px]  group-hover/subgroup:max-h-[200px] group-hover/subgroup:opacity-100 invisible pointer-events-none group-hover/subgroup:visible group-hover/subgroup:pointer-events-auto
                                  '>
                                  {
                                    // children && children.length > 0 && children.map(({children,_id}) => (
                                    children.length > 0 && children.map(({ thirdLevelCatName, _id }) => (
                                      <Link to={`products?thirdLevelcategoryId=${_id}`} key={_id}>
                                        <li key={_id} className='py-[5px] px-[30px] text-black cursor-pointer'>{thirdLevelCatName}</li>
                                      </Link>
                                    ))
                                    // ))
                                  }
                                </ul>
                              </div>
                            ))
                          }
                          {/* <ul className='childrem absolute z-[999] bg-white left-[-15%] w-[122px] top-[125%] border-[1px] border-black opacity-0 group-hover:opacity-100 group-hover:inline-block transform group-hover:transform group-hover:origin-top transition-all group-hover:transition-all group-hover:duration-[.3s] group-hover:ease-in-out max-h-0 group-hover:max-h-[200px]'>'>
                            {
                              children && children.length > 0 && children.map(({children,_id}) => (
                                children.length > 0 && children.map(({thirdLevelCatName,_id}) => (
                                  <li key={_id} className='py-[5px] px-[30px] text-black cursor-pointer'>{thirdLevelCatName}</li>
                                ))
                              ))
                            }
                            </ul> */}
                          {/* {
                              children && children.children && children.children.length > 0 && (
                                
                              )
                            } */}
                        </ul>
                      )
                      }
                    </li>
                  </SwiperSlide>
                  // </React.Fragment>
                ))
              }
            </Swiper>
          </ul>
          <div className='dark:text-[rgba(255,255,255,0.6)] text-black flex items-center justify-center'><span>Free Delivery</span></div>
        </div>
        {/* Navbar */}
      </div>
      <CategoryDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} data={options?.passedData} />
    </>
  )
}

export default Navbar
