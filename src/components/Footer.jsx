/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="bg-transparent">
        <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <span className="inline md:block">Join Us</span>
            <span className=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              We are
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Hiring
              </span>{" "}
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <button className="" data-aos="fade-left" data-aos-offset="300">
              <a
                href="#"
                className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-md shadow-2xl group"
              >
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Join Us Now!</span>
              </a>
            </button>
          </div>
        </div>
      </section>
      <hr
        className="text-green-200 mx-80"
        data-aos="fade-right"
        data-aos-offset="300"
      />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-center">
            <p
              className="mt-4 font-bold font-primary text-center text-gray-400 lg:text-center lg:mt-0"
              data-aos="fade-up"
              data-aos-offset="300"
            >
              DEVELOPED BY :{" "}
              <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 font-semibold">
                <a
                  href="https://maro-al-kades.github.io/Maro-Al-Kades/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MARO AL-KADES
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
