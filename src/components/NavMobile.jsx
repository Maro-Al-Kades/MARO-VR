/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//! IMPORT ICONS FROM { REACT-ICONS }...
import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden backdrop-blur-2xl w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-lg">
          <a href="#">Home</a>
        </li>
        <li className="text-lg">
          <a href="#">Company</a>
        </li>
        <li className="text-lg">
          <a href="#">Features</a>
        </li>
        <li className="btn">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
