import { Link } from "react-router-dom";
import { cronohand, safe, moneybag, piggy, clock, shield } from "../assets";

import Lottie from "lottie-react";

const SobreArriendalo = () => {
  return (
    <div className="md:pt-10 py-5 lg:px-10 px-5 ">
      <h1 className="text-3xl text-center md:pb-10 pt-5 ">
        <strong>¿ Que es Arriendalo ?</strong>
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 lg:gap-10 lg:px-10  :px-5 gap-5 ">
        <div className="p-5 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-lg">
          <div className=" h-48 flex justify-center items-center  ">
            <img className="w-36" src={piggy} />
            {/* <Lottie
              animationData={moneybag}
              style={{ width: "100%", height: "100%" }}
              loop={true}
            /> */}
          </div>

          <h1 className="text-center lg:text-xl text-lg font-bold">
            Te adelantamos hasta 11 meses de arriendo
          </h1>

          <p className="lg:text-justify md:text-center  pt-5  lg:text-lg sm:text-md pb-5">
            ¿Necesitas liquidez? Te adelantamos hasta 11 meses de arriendo. ¡Sin
            letra pequeña! Directo a tu cuenta en 24 horas o menos.
          </p>
        </div>

        <div className="p-5 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-lg">
          <div className=" h-48 flex justify-center items-center  ">
            <img className="w-36" src={clock} />
            {/* <Lottie
              animationData={cronohand}
              style={{ width: "100%", height: "100%" }}
              loop={true}
            /> */}
          </div>

          <h1 className="text-center lg:text-xl text-lg font-bold">
            Arrendamos en tiempo récord
          </h1>

          <p className="lg:text-justify md:text-center  pt-5  lg:text-lg sm:text-md pb-5">
            Publica tu inmueble con nosotros y recibe <strong>GRATIS</strong> la
            republicación en <strong>más de 15 portales aliados</strong> para
            mayor visibilidad y aumentar las visitas un 300%
          </p>
        </div>
        <div className="p-5 bg-slate-100 dark:bg-slate-800 rounded-xl shadow-lg">
          <div className=" h-48 flex justify-center items-center  ">
            <img className="w-36" src={shield} />
            {/* <Lottie
              animationData={safe}
              style={{ width: "100%", height: "100%" }}
              loop={true}
            /> */}
          </div>

          <h1 className="text-center lg:text-xl text-lg font-bold">
            100% Online y Seguro
          </h1>

          <p className="lg:text-justify md:text-center  pt-5  lg:text-lg sm:text-md pb-5">
            Desde donde estés, estarás tranquilo y recibiendo puntualmente el
            pago de tu arriendo. ¡Sin mover un dedo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SobreArriendalo;
