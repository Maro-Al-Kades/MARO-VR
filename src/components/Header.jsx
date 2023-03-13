/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//! IMPORT COMPONENTS...
import LOGO from "../assets/img/logo.svg";
import Nav from "./Nav";

//! IMPORT ICONS FROM { REACT-ICONS }...
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6 h-[100px]"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a href="#">
            <img src={LOGO} alt="Logo" className="h-[80px]" />
          </a>
          {/* Nav */}
          <Nav />
          {/* Nav Mobile Button */}
          <HiMenu
            className="lg:hidden text-3xl text-white cursor-pointer"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
