import { useState, useEffect } from "react";
import SobreArriendalo from "../components/SobreArriendalo";
import HomeFilter from "../components/filters/HomeFilter";
import PropRecientes from "../components/recientespublic/PropRecientes";
import HeroSlider from "../components/slider/HeroSlider";
import Testimonios from "../components/testimonios/Testimonios";
import MarqueeSEO from "../components/MarqueeSEO";
import CiudadesGallery from "../components/CiudadesGallery";
import HeroSection from "../components/slider/HeroSection";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth <= 768;

  return (
    <div className="container mx-auto">
      <div className="lg:flex lg:justify-center">
        <div className="w-full pt-20 lg:pt-0 ">
          {/* {!isSmallScreen && (
            <div className="pt-5">
              <HeroSlider />
            </div>
          )} */}
          <HeroSection />

          {/* <HomeFilter /> */}
          <SobreArriendalo />
          <PropRecientes />
          <CiudadesGallery />
          <Testimonios />
          <MarqueeSEO />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import { useState, useEffect } from "react";

// import SobreArriendalo from "../components/SobreArriendalo";
// import HomeFilter from "../components/filters/HomeFilter";
// import PropRecientes from "../components/recientespublic/PropRecientes";
// import HeroSlider from "../components/slider/HeroSlider";

// const Home = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const isSmallScreen = windowWidth <= 768;

//   return (
//     <div className="py-28 lg:px-28 px-5 md:relative">
//       {!isSmallScreen && (
//         <div className="pt-5">
//           <HeroSlider />
//         </div>
//       )}
//       <HomeFilter />
//       <SobreArriendalo />
//       <PropRecientes />
//     </div>
//   );
// };

// export default Home;
