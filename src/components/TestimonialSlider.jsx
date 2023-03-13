import React from "react";

//! IMPORT SWIPER REACT COMPONENTS...
import { Swiper, SwiperSlide } from "swiper/react";

//! IMPORT SWIPER STYLES...
import "swiper/css";
import "swiper/css/pagination";

//! IMPORT REQUIRED MODULES...
import { Pagination } from "swiper";

//! IMPORT DATA FROM { DATA.JS } FILE...
import { slider } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        //! DESTRUCTURE SLIDE...
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A45] backdrop-blur-2xl cursor-move "
            key={index}
          >
            <p className="mb-8 min-h-[100px] text-[15px]">{message}</p>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div className="">
                <div className="w-14">
                  <img className="mb-3 md:mb-0" src={image} alt="img" />
                </div>
                <div className="">
                  <div className="font-primary font-bold text-base">{name}</div>
                  <div className="font-medium text-rose-600">{email}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
