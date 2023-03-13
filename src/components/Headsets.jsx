//! IMPORT REACT FROM REACT FILES...
import React from "react";

//! IMPORT IMAGES FROM ASSETS FOLDER...
import Headset1 from "../assets/img/headset-1.png";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* TITLE */}
        <h2
          className="text-3xl font-bold mb-6 text"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* GRID */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* ITEM */}
          <div
            className="relative"
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="800"
          >
            <img
              className="transition ease-in-out duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] cursor-pointer"
              src={Headset1}
              alt=""
            />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 rounded-tr-3xl">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* ITEM */}
          <div
            className="relative"
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="1100"
          >
            <img
              className="transition ease-in-out duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] cursor-pointer"
              src={Headset2}
              alt=""
            />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 rounded-tr-3xl">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* ITEM */}
          <div
            className="relative"
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="1400"
          >
            <img
              className="transition ease-in-out duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] cursor-pointer"
              src={Headset3}
              alt=""
            />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 rounded-tr-3xl">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* ITEM */}
          <div
            className="relative"
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="1700"
          >
            <img
              className="transition ease-in-out duration-500 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] cursor-pointer"
              src={Headset4}
              alt=""
            />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6 rounded-tr-3xl">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
