/* eslint-disable no-unused-vars */
import { loading_bar, logo, loading3 } from "../assets";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img className="h-14 " src={logo} alt="logo de arriendalo" />
      <Lottie animationData={loading_bar} loop={true} className="w-64" />
    </div>
  );
};

export default Loading;
