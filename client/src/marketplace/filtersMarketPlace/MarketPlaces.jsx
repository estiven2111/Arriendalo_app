//! SIRVE

import { useEffect, useState } from "react";
import {
  useGetPropertiesQuery,
  useGetAllPropertiesQuery,
  useGetPropertiesearchQuery,
} from "../../redux/RTKquery/propertyApi";

import PropiedadCard from "../../components/recientespublic/PropiedadCard";
import Maps from "../../components/Maps/Maps";
import Filter from "./filter";
import Pagination from "../Pagination";
import Loading from "../../components/Loading";
import BarraVerMapa from "../BarraVerMapa";
import FullMapModal from "../FullMapModal";
import Empty from "../../components/Empty";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useLocation } from "react-router-dom";
import {
  FilterData,
  filterMinMaxProperties,
  filterTipesProperties,
} from "../../redux/landingpage/FilterDataObj.slice";
import MarqueeSEO from "../../components/MarqueeSEO";

const MarketPlaces = () => {
  const { filterLanding } = useSelector((state) => state.FilterDataObjSlice);
  const dispatch = useDispatch();
  // const history = useHistory();
  // const location = useLocation();
  // const [searchsMain, setSearchsMain] = useState({
  //   search: "",
  //   petfriendly: false,
  //   exclusive: "",
  //   bathrooms: "",
  //   garages: "",
  //   bedrooms: "",
  //   stratum: "",
  //   pricemin: "",
  //   pricemax: "",
  //   areamin: "",
  //   areamax: "",
  //   priceMinMax: "",
  //   tipeproperty: "",
  // });
  const [ban, setBan] = useState(0);
  const [activeFilters, setActiveFilters] = useState(0);
  // console.log(activeFilters);

  const { data: filterProperty = [], isLoading } =
    useGetPropertiesearchQuery(filterLanding);

  const filtros = filterProperty;
  const fil = filterLanding;
  let filtered;
  if (filterLanding.length > 0) {
    filtered = fil;
  } else {
    filtered = filtros;
  }
  //! ---------------------->  MAPA
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  //! <--------------------------------------

  //! ---------------------->  MAPA FULL
  const [showFullMap, setShowFullMap] = useState(false);

  const toggleFullMap = () => {
    // console.log("oper full map");
    setShowFullMap(!showFullMap);
  };

  //! <--------------------------------------

  const [currentPage, setCurrentPage] = useState(1);

  //? PAGINACION CON INPUT ========================================
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const propertiesPerPage = 10;
  const end = currentPage * propertiesPerPage;
  const start = end - propertiesPerPage;
  const displayedProperties = filterProperty.slice(start, end);
  const totalPages = Math.ceil(filterProperty?.length / propertiesPerPage);

  //?============================================================

  const handlerSearch = (obj) => {
    // if (searchsMain.garages || searchsMain.bathrooms) {
    //   setSearchsMain({
    //     search: "",
    //     petfriendly: false,
    //     exclusive: "Active",
    //     bathrooms: "",
    //     garages: "",
    //     bedrooms: "",
    //     stratum: "",
    //   })
    // }
    dispatch(
      FilterData({
        search: "",
        petfriendly: false,
        exclusive: "",
        bathrooms: "",
        garages: "",
        bedrooms: "",
        stratum: "",
        pricemin: "",
        pricemax: "",
        areamin: "",
        areamax: "",
        priceMinMax: "",
        tipeproperty: "",
        ciudad: "",
        habitaciones: "",
        tipo: "",
      })
    );
    // setSearchsMain({
    //   search: "",
    //   petfriendly: false,
    //   exclusive: "",
    //   bathrooms: "",
    //   garages: "",
    //   bedrooms: "",
    //   stratum: "",
    //   pricemin: "",
    //   pricemax: "",
    //   areamin: "",
    //   areamax: "",
    //   priceMinMax: "",
    //   tipeproperty: "",
    //   ciudad: "",
    //   habitaciones: "",
    //   tipo: "",
    // });
    // console.log(obj)
    // setSearchsMain(obj);
  };

  useEffect(() => {
    const filtrosAplicados = Object.values(filterLanding).filter(
      (el) => el !== "" && el !== false && el !== "Active"
    ).length;
    setActiveFilters(filtrosAplicados);
    dispatch(filterTipesProperties());
    dispatch(filterMinMaxProperties());
  }, [filterLanding]);

  // useEffect(() => {
  //   setSearchsMain(searchsMain);
  // }, [searchs]);
  return (
    <div className="pt-28 lg:px-20 px-5  ">
      <Filter
        toggleMap={toggleMap}
        // searchFuntion={handlerSearch}
        activeFilters={activeFilters}
        // searchsMain={searchsMain}
        ban={ban}
      />
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="lg:flex flex-row gap-0 lg:gap-5 rounded-xl">
          <div
            className={`lg:w-${
              showMap ? "0" : "3/5"
            } overflow-y-scroll h-[60vh]  rounded-xl`}
          >
            {/* Property card listing section */}
            {showMap ? null : (
              <>
                <div className="grid justify-center md:grid-cols-2  lg:grid-cols-2 px-3 sm:grid-cols-1 py-2 gap-5">
                  {filtered.length === 0 ? (
                    <div className="flex items-center justify-center">
                      <Empty />
                    </div>
                  ) : (
                    displayedProperties.map((property) => (
                      <PropiedadCard
                        key={property.id_propiedad}
                        propiedad={property}
                      />
                    ))
                  )}
                </div>
              </>
            )}
          </div>
          {/* <div className={`w-2/5 `}> */}
          <div className={`w-${showMap ? "full" : "2/5"} lg:block hidden py-2`}>
            <Maps />
          </div>
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className="lg:hidden block  fixed bottom-0 left-0 z-10 bg-white dark:bg-slate-950 w-full py-5">
        <BarraVerMapa showFullMap={showFullMap} toggleFullMap={toggleFullMap} />
      </div>
      {showFullMap && (
        //! Mirar estilos del mapa
        <FullMapModal toggleFullMap={toggleFullMap} />
      )}
      <MarqueeSEO />

      {/* {showFullMap && (
        <div className="fixed top-0 mt-28 left-0 w-full h-full bg-white dark:bg-black z-">
          <div className="flex items-center justify-center w-full h-full">
            <Maps
              latitud={maps.latitud}
              longitud={maps.longitud}
              direccion={maps.direccion}
              imagenes={maps.imagenes}
              ubicacion={properties}
              propiedad={propert}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default MarketPlaces;
