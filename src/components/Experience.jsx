/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

//! IMPORT IMAGES...
import Img1 from "../assets/img/exp-img1.png";
import Img2 from "../assets/img/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* IMAGES */}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="200"
            >
              <img src={Img1} alt="image" />
            </div>
            <div 
            className="self-end"
            data-aos="fade-up"
            >
              <img src={Img2} alt="image" />
            </div>
          </div>
          {/* TEXT */}
          <div 
          className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
          data-aos="fade-left"
          data-aos-offset="400"
          >
            <h2 className="text-3xl font-bold mb-6">
              New Experince In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              rerum ut possimus beatae asperiores deleniti, laborum libero
              tempora impedit delectus.
            </p>
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
                <span className="relative text-white">Get it Now</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
