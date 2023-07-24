import { useDispatch, useSelector } from "react-redux";
import { chia, bogota, cajica, calera, ibague, zipaquira } from "../assets";
import { FilterData } from "../redux/landingpage/FilterDataObj.slice";
import { useGetPropertiesearchQuery } from "../redux/RTKquery/propertyApi";
import { useNavigate } from "react-router-dom";

const CiudadesGallery = () => {
  const { filterLanding } = useSelector((state) => state.FilterDataObjSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: filterProperty = [], isLoading } =
    useGetPropertiesearchQuery(filterLanding);

  console.log("ciudades", filterLanding);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (
    //   !filterlanding.ciudad &&
    //   !filterlanding.habitaciones &&
    //   !filterlanding.tipo
    // ) {
    //   navigate("/propiedades");
    // } else {

    //   await dispatch(filterProperties(filterlanding));
    //   navigate("/propiedades");
    // }
    navigate("/propiedades");
  };

  const onClickHandler = (e) => {
    const { name, value } = e.currentTarget; // Use e.currentTarget instead of e.target
    const updatedFilterLanding = {
      ...filterLanding,
      [name]: value,
    };
    dispatch(FilterData(updatedFilterLanding));
    // navigate("/propiedades");
  };
  return (
    <div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="text-3xl font-bold text-center pb-10">
          Encuentranos en tu ciudad
        </h1>
        <form onSubmit={onSubmitHandler}>
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex md:w-1/2 flex-wrap">
              <button
                onClick={onClickHandler}
                name="search"
                value="Zipaquirá"
                className="cursor-pointer w-1/2 p-1 md:p-2 relative  "
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={zipaquira}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  Zipaquirá
                </h1>
              </button>
              <button
                onClick={onClickHandler}
                name="search"
                value="Cajicá"
                className="cursor-pointer w-1/2 p-1 md:p-2 relative"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={cajica}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  Cajicá
                </h1>
              </button>
              <button
                onClick={onClickHandler}
                name="search"
                value="Ibagué"
                className="cursor-pointer w-full p-1 md:p-2 relative"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={ibague}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  Ibagué
                </h1>
              </button>
            </div>
            <div className="flex md:w-1/2 flex-wrap">
              <button
                onClick={onClickHandler}
                name="search"
                value="Bogotá"
                className="cursor-pointer w-full p-1 md:p-2 relative"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={bogota}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  Bogotá
                </h1>
              </button>
              <button
                onClick={onClickHandler}
                name="search"
                value="La Calera"
                className="cursor-pointer w-1/2 p-1 md:p-2 relative"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={calera}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  La Calera
                </h1>
              </button>
              <button
                onClick={onClickHandler}
                name="search"
                value="Chía"
                className="cursor-pointer w-1/2 p-1 md:p-2 relative"
              >
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg hover:scale-105 duration-200 object-cover object-center"
                  src={chia}
                />
                <h1 className="absolute md:bottom-3 md:left-6 bottom-1 left-3 font-extrabold text-white/90 md:text-2xl text-lg">
                  Chía
                </h1>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CiudadesGallery;
