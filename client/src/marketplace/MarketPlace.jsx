import { useState, useEffect } from "react";
import {
  useGetPropertiesQuery,
  useGetAllPropertiesQuery,
} from "../redux/RTKquery/propertyApi";
import PropiedadCard from "../components/recientespublic/PropiedadCard";
import Loading from "../components/Loading";
// import Pagination from "./Pagination";

import Filter from "./filtersMarketPlace/filter";
import Maps from "../components/Maps/Maps";
//import Mapss from "../components/Maps/Mapss";

const MarketPlace = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [ubicacion, setUbicacion] = useState([
  //   { lat: 4.601279595369138, lng: -74.07077628611778, name: "casa 1" },
  //   { lat: 4.6398372, lng: -74.1940462, name: "penhause" },
  //   { lat: 4.649426099999999, lng: -74.1450971, name: "finca" },
  //   { lat: 4.64942349999, lng: -74.1433971, name: "finca" },
  //   { lat: 4.649426456, lng: -74.1450322, name: "finca" },
  //   { lat: 4.73258349, lng: -74.28192059999999, name: "finca" },
  //   { lat: 6.3386049, lng: -75.5594704, name: "finca" },
  //   { lat: 6.3386049, lng: -75.5594704, name: "finca" },
  //   { lat: 6.3386049, lng: -75.5594704, name: "finca" },
  //   { lat: 6.3386049, lng: -75.5594704, name: "finca" },
  //   { lat: 6.3386049, lng: -75.5594704, name: "finca" },
  //   { lat: 6.3635049, lng: -75.5586704, name: "finca" },
  // ])

  // const [ubicacion, setUbicacion] = useState([
  //   { lat: 4.601279595369138, lng: -74.07077628611778 },
  //   { lat: 4.6398372, lng: -74.1940462 },
  //   { lat: 4.649426099999999, lng: -74.1450971 },
  //   { lat: 4.64942349999, lng: -74.1433971 },
  //   { lat: 4.649426456, lng: -74.1450322 },
  //   { lat: 4.73258349, lng: -74.28192059999999 },
  //   { lat: 6.3386049, lng: -75.5594704 },
  //   { lat: 6.3386049, lng: -75.5594704 },
  //   { lat: 6.3386049, lng: -75.5594704 },
  //   { lat: 6.3386049, lng: -75.5594704 },
  //   { lat: 6.3386049, lng: -75.5594704 },
  //   { lat: 6.3635049, lng: -75.5586704 },
  // ])
  const [ubicacion, setUbicacion] = useState([{ lat: 0, lng: 0, name: "" }]);

  const { data: properties = [], isLoading } = useGetAllPropertiesQuery();

  const [fullMap, setFullMap] = useState(false);
  const [fullWidth, setFullWidth] = useState(false); // State variable for full width mode

  const fullMapHandler = () => {
    setFullMap(!fullMap);
    setFullWidth(!fullWidth); // Toggle the value of fullWidth
  };

  // const fullMapHandler = () => {
  //   setFullMap(!fullMap);
  //   console.log("map");
  // };
  const [propert, setPropert] = useState([]);
  const [maps, setMaps] = useState({
    latitud: 0,
    longitud: 0,
    direccion: "",
    imagenes: "",
  });
  
  useEffect(() => {
    const sacar = async () => {
      const { latitud, longitud, direccion, imagenes } = await properties[0];
      const latitud1 = parseFloat(latitud);
      const longitud1 = parseFloat(longitud);
      
      setMaps({ latitud:latitud1, longitud:longitud1, direccion,imagenes });
      
    };
    sacar();
  }, [properties]);

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePropiedadSeleccionada = (propiedadSeleccionada) => {
    setPropert(propiedadSeleccionada);
    const latitud = parseFloat(propiedadSeleccionada.latitud);
    const longitud = parseFloat(propiedadSeleccionada.longitud);
    setMaps({
      latitud,
      longitud,
      direccion: propiedadSeleccionada.direccion,
      imagenes: propiedadSeleccionada.imagenes,
    });
    console.log(maps);
  };
  return (
    <div className="container mx-auto pt-28 pb-10">
      <Filter fullMapHandler={fullMapHandler} />
      <div className="lg:justify-center">
        <div className="grid lg:grid-cols-5 grid-cols-1">
          <div className="col-span-3 overflow-y-scroll">
            {isLoading ? (
              <div>
                <Loading />
              </div>
            ) : (
              <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-3">
                {properties.map((property) => (
                  <PropiedadCard
                    key={property.id_propiedad}
                    propiedad={property}
                    onPropiedadSeleccionada={handlePropiedadSeleccionada}
                  />
                ))}
              </div>
            )}
          </div>
          {isLoading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <div
              className={`lg:col-span-2 lg:order-last order-first mb-5 ${
                fullWidth ? "col-span-5" : ""
              }`}
            >
              <div className="text-3xl font-bold">
                <div className={`rounded-lg ${fullWidth ? "w-full" : ""}`}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;

//!MARKETPALCES WORKING

// import { useEffect, useState } from "react";
// import {
//   useGetPropertiesQuery,
//   useGetAllPropertiesQuery,
// } from "../../redux/RTKquery/propertyApi";
// import PropiedadCard from "../../components/recientespublic/PropiedadCard";

// import Maps from "../../components/Maps/Maps";
// import Filter from "./filter";

// const MarketPlaces = () => {
//   const [ubicacion, setUbicacion] = useState([{ lat: 0, lng: 0, name: "" }]);

//   const { data: properties = [], isLoading } = useGetAllPropertiesQuery();

//   const [propert, setPropert] = useState([]);
//   const [maps, setMaps] = useState({
//     latitud: 0,
//     longitud: 0,
//     direccion: "",
//     imagenes: "",
//   });

//   //! ---------------------->  MAPA
//   const [showMap, setShowMap] = useState(false);

//   const toggleMap = () => {
//     setShowMap(!showMap);
//   };

//   //! <--------------------------------------

//   useEffect(() => {
//     const sacar = async () => {
//       const { latitud, longitud, direccion, imagenes } = await properties[0];
//       const latitud1 = parseFloat(latitud);
//       const longitud1 = parseFloat(longitud);

//       setMaps({ latitud: latitud1, longitud: longitud1, direccion, imagenes });
//     };
//     sacar();
//   }, [properties]);

//   const handlePropiedadSeleccionada = (propiedadSeleccionada) => {
//     setPropert(propiedadSeleccionada);
//     const latitud = parseFloat(propiedadSeleccionada.latitud);
//     const longitud = parseFloat(propiedadSeleccionada.longitud);
//     setMaps({
//       latitud,
//       longitud,
//       direccion: propiedadSeleccionada.direccion,
//       imagenes: propiedadSeleccionada.imagenes,
//     });
//     console.log(maps);
//   };
//   return (
//     <div className="pt-28 md:px-20 px-5">
//       <Filter toggleMap={toggleMap} />
//       <div className="lg:flex flex-row ">
//         <div className={`w-${showMap ? "0" : "3/5"}`}>
//           {/* Property card listing section */}
//           {showMap ? null : (
//             <>
//               {/* Replace this with your actual property cards */}

//               <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-3">
//                 {properties.map((property) => (
//                   <PropiedadCard
//                     key={property.id_propiedad}
//                     propiedad={property}
//                     onPropiedadSeleccionada={handlePropiedadSeleccionada}
//                   />
//                 ))}
//               </div>
//               {/* ... */}
//             </>
//           )}
//         </div>
//         <div className={`w-${showMap ? "full" : "2/5"}`}>
//           <Maps
//             latitud={maps.latitud}
//             longitud={maps.longitud}
//             direccion={maps.direccion}
//             imagenes={maps.imagenes}
//             ubicacion={properties}
//             propiedad={propert}
//           />
//           {/* {showMap && (
//             <div className="border border-gray-300 p-4">
//               {" "}
//               <Maps
//                 latitud={maps.latitud}
//                 longitud={maps.longitud}
//                 direccion={maps.direccion}
//                 imagenes={maps.imagenes}
//                 ubicacion={properties}
//                 propiedad={propert}
//               />
//             </div>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarketPlaces;
