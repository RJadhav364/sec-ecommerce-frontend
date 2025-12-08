import React, { useRef } from "react";
import login_bg_img from "../../../assets/patern.webp";
import Button from "../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Admin_Login = () => {
  const swiperRef = useRef();

  const goToRegister = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.slideTo(1);
  };

  const goToLogin = () => {
    if (swiperRef.current?.swiper) swiperRef.current.swiper.slideTo(0);
  };
  return (
    <div className="w-full h-full">
      <img
        src={login_bg_img}
        alt=""
        className="w-full fixed top-0 left-0 right-0 bottom-0 opacity-[0.04]"
      />
      {/* form div section start */}
      <div className="mx-auto w-[600px] 2xl:pt-[50px]">
        <div className="flex justify-center items-center gap-[60px] font-display-Montserrat">
          <Button
            classes="text-[16px] bg-[#E3EBF7] p-[10px_0px] font-semibold text-[#3780ed] w-[200px]"
            btnLabel="Login"
            onClick={goToLogin}
          />
          <Button
            classes="text-[16px] bg-[#F7F7F7] p-[10px_0px] font-semibold text-[#CDCBC9] w-[200px]"
            btnLabel="Register"
            onClick={goToRegister}
          />
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // 💥 IMPORTANT
          }}
          slidesPerView={1}
          allowTouchMove={false} /* block manual swiping */
          speed={700} /* smooth transition */
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
        </Swiper>
      </div>
      {/* form div section end */}
    </div>
  );
};

export default Admin_Login;
