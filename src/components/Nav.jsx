/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center space-x-12 font-secondary">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Company</a>
        </li>
        <li className="nav-link">
          <a href="#">Features</a>
        </li>
        <li className="">
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
              <span className="relative text-white">Sign Up</span>
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
