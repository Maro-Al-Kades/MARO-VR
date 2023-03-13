import React from "react";

//! IMPORT IMAGES...
import Avatar1 from "../assets/img/avt1.png";
import Avatar2 from "../assets/img/avt2.png";
import Avatar3 from "../assets/img/avt3.png";
import Avatar4 from "../assets/img/avt4.png";

//! IMPORT ICONS FROM REACT-ICONS...
import { BsFillCircleFill } from "react-icons/bs";

const Users = () => {
  return (
    <div
      className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start"
      data-aos="fade-down"
      data-aos-delay="900"
    >
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar1} alt="Avatar" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar2} alt="Avatar" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar3} alt="Avatar" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar4} alt="Avatar" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse " />
        <div className="">400k People Online Now!</div>
      </div>
    </div>
  );
};

export default Users;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
