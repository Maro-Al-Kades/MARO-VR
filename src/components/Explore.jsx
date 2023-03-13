/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Explore = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4 ">
      <div className="container mx-auto h-full">
        <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
          <h3
            className="text-3xl font-semibold mb-8"
            data-aos="fade-right"
            data-aos-offset="1100"
          >
            Explore Product in New Way
          </h3>
          <p
            className="max-w-xs mb-12"
            data-aos="fade-right"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          {/* FORM */}
          <form 
          className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
          data-aos="fade-up"
          data-aos-offset="200"
          >
            <input
              className="animate-pulse bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md"
              type="text"
              placeholder="Your Email"
            />
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
                <span className="relative text-white">Start</span>
              </a>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
