/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//! IMPORT COMPONENTS...
import Users from "./Users";

//! IMPORT IMAGES FROM ASSETS FOLDER...
import Img from "../assets/img/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* TEXT */}
          <div className="">
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] lg-mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              porro adipisci quod exercitationem ducimus unde nam pariatur
              officia minus voluptate.
            </p>
            {/* BUTTONS */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">Get it Now!</span>
                </a>
              </button>
              <a
                href="##"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* IMAGE */}
          <div className="" data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="Hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
