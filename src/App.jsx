//! IMPORT REACT, { USE-EFFECT, USE-STATE } FROM REACT FILES...
import React, { useEffect, useState } from "react";

//! IMPORT COMPONENTS...
import {
  Banner,
  Experience,
  Explore,
  Header,
  Headsets,
  NavMobile,
  Testimonial,
  Video,
  Footer,
} from "./components";

//! IMPORT AOS (ANIMATE ON SCROLL)...
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  //! AOS INITIALIZATION...
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex before:animate-pulse">
      <div className="lg:h-[100vh]">
        <Header setNavMobile={setNavMobile} />
        <Banner />
      </div>
      {/* MOBILE NAV */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;

//! =======================================
//! DEVELOPED BY: MARO AL-KADES .
//? PHONE: +20 101 434 4053 .
//* E-MAIL: marolinkedin@gmail.com .
//! FACEBOOK: MARO ASAM .
//? INSTAGRAM: maro_kades_official .
//! =======================================
