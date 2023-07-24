import { FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";
import MarqueeSEO from "../components/MarqueeSEO";

const Aplicar = () => {
  return (
    <div className="pt-28  lg:px-20 px-5">
      <div className="h-screen pt-20 lg:px-44 grid md:grid-cols-2 grid-cols-1 gap-20 ">
        <div className="flex-wrap pt-20 align-middle justify-center">
          <h1 className="text-center font-bold text-3xl">
            Aplica como tomador
          </h1>
          <h2 className="font-medium text-center text-xl pt-10">
            ¿Quién es el tomador?
          </h2>
          <p className="text-justify py-5">
            el tomador es la persona que toma en arriendo una propiedad y se
            compromete a cumplir con las condiciones del contrato durante el
            período establecido, garantizando una convivencia armoniosa y un
            arrendamiento exitoso.
          </p>
          <Link to="/aplicar_tomador">
            <div className="flex items-center  pt-10  justify-center">
              <button className=" flex w-full text-white items-center justify-center  cursor-pointer gap-3 duration-300 hover:saturate-200 rounded-full px-6  bg-gradient-to-r from-indigo-400 to-indigo-600 p-2">
                <FaWpforms className="text-white" />
                Aplicar
              </button>
            </div>
          </Link>
        </div>
        <div className="flex-row pt-20 items-center justify-center">
          <h1 className="text-center font-bold text-3xl">Aplica como CoA</h1>
          <h2 className="font-medium text-center text-xl pt-10">
            ¿Quién es el Co-arrendatario?
          </h2>
          <p className="text-justify py-5">
            El COA arrendatario es una persona que se compromete a asumir la
            responsabilidad si el tomador no cumple con las obligaciones del
            contrato de arrendamiento, brindando seguridad al arrendador.
          </p>
          {/* <p className="text-justify py-5">
            el COA arrendatario es aquel que, voluntariamente, se compromete a
            asumir la responsabilidad en caso de que el tomador no cumpla con
            sus obligaciones en el contrato de arrendamiento, brindando una
            mayor seguridad al arrendador y mitigando los riesgos asociados con
            el arrendamiento.
          </p> */}
          <Link to="/aplicar_CoA">
            <div className="flex items-center pt-10 justify-center">
              <div className=" flex w-full  text-white items-center justify-center  cursor-pointer gap-3 duration-300 hover:saturate-200 rounded-full px-6  bg-gradient-to-r from-indigo-400 to-indigo-600 p-2">
                <FaWpforms /> Aplicar
              </div>
            </div>
          </Link>
        </div>
      </div>
      <MarqueeSEO />
    </div>
  );
};

export default Aplicar;
