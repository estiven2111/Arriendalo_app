/* eslint-disable no-unused-vars */
import Lottie from "lottie-react";
import { heroanimation, dots, herobg, home } from "../../assets";
import HeroFilter from "../filters/HeroFilter";

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-7 grid-cols-1  gap-5 h-screen content-center  ">
      <div className="lg:col-span-2  lg:block hidden">
        <Lottie animationData={heroanimation} loop={true} />
      </div>
      <div className="lg:col-span-3 lg:pt-0 pt-20 ">
        <HeroFilter />
      </div>

      <div className="lg:col-span-2 md: ">
        <Lottie animationData={heroanimation} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;

// {/* <div className=" flex items-center justify-center">
//   {/* <Lottie
//     animationData={dots}
//     loop={true}
//     className=" rotate-90 h-3/2  w-1/2"
//     // className="    w-3/2"
//   /> */}
// {/* </div>  */}
