//! IMPORT REACT + { USE-STATE } FROM REACT FILES...
import React, { useState } from "react";

//! IMPORT VIDEO MODAL...
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

//! IMPORT ICONS...
import { BsPlayCircle } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3
            className=" text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            Awesome Experiences With Virtual Reality World
          </h3>
          {/* MODAL VIDEO */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOK_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          {/* VIDEO */}
          <div 
          className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
          data-aos="fade-left"
          data-aos-offset="350"
          >
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <BsPlayCircle className="animate-pulse text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
