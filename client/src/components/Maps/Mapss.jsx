/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import logo from "../../../public/logo.png";
import { MdCalendarMonth, MdSchool } from "react-icons/md";
import { BiChurch } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";

import { ThemeContext } from "../../context/themeContext";

import {
  alfiler,
  blueicon,
  filtroicon,
  redpoint,
  location3d,
} from "../../assets";
import { BsBusFrontFill } from "react-icons/bs";
import { IoBusOutline, IoStorefrontOutline } from "react-icons/io5";

// AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY
function Maps({ latitud, longitud, direccion }) {
  const [locationError, setLocationError] = useState(false);
  const [filtro, setFiltro] = useState({
    name: "",
    radio: 500,
  });

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnFS0Lau3P23hTkDA9nzajVKlfAyppYW8&libraries=places,geocode`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    window.document.body.appendChild(googleMapsScript);
    try {
      googleMapsScript.addEventListener("load", () => {
        const mapOptions = {
          center: new window.google.maps.LatLng(latitud, longitud),
          zoom: 16,
          disableDoubleClickZoom: true,
          minZoom: 14, // min 5
          maxZoom: 0, //max 16
          styles: [
            {
              featureType: "poi",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "landscape",
              stylers: [{ visibility: "0ff" }],
            },
            // {
            //   featureType: "landscape",
            //   stylers: [
            //     { visibility: "on" },
            //     { hue: "#00FF00" },
            //     { gamma: 1.5 },
            //   ],
            // },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                { visibility: "on" },
                // { color: "#000000" }, // Set the color to black (#000000)
                { color: theme === "dark" ? "#242928" : null },
              ],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels",
              stylers: [{ visibility: "on" }], //! ALEJAR PARA QUE SE VEAN
            },

            // {
            //   featureType: "poi",
            //   elementType: "bus.station",
            //   stylers: [{ visibility: "on" }],
            // },
            {
              featureType: "poi.park",
              elementType: "labels",
              stylers: [{ visibility: "on", color: "#0c0d0d" }],
            },

            // {
            //   featureType: "natural",
            //   elementType: "geometry",
            //   stylers: [{ color: "#39ae0f" }], // Replace #00ff00 with your desired color
            // },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "road",
              elementType: "labels",
              stylers: [{ visibility: "on" }],
            },
            {
              featureType: "road.local",
              elementType: "geometry.fill",
              stylers: [{ color: theme === "dark" ? "#3d4043" : null }],
            },
            {
              featureType: "road.arterial", //3d4043 --- light #b2dff5
              elementType: "geometry",
              stylers: [{ color: theme === "dark" ? "#3d4043" : "#b2dff5" }], // Replace #ff0000 with your desired color
            },
          ],
          mapTypeControl: false,
          streetViewControl: false,
        };

        const mapInstance = new window.google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );

        const destination = new window.google.maps.LatLng(latitud, longitud);
        // const iconImage = {
        //   url: logo, //? Ruta de la imagen del logotipo
        //   scaledSize: new window.google.maps.Size(100, 100), //? Tamaño personalizado del icono
        // };
        const destinationMarker = new window.google.maps.Marker({
          position: destination,
          // animation: google.maps.Animation.DROP,
          // map: mapInstance,
          // icon: {
          //   //! propiedad marker
          //   url: location3d,
          //   scaledSize: new window.google.maps.Size(35, 35),
          // },
        });
        //!definir direccion
        const infowindow = new window.google.maps.InfoWindow();
        const contentString = `<div style="font-family: Arial, sans-serif; font-size: 16px;"><strong>Dirección: </strong>${direccion}</div><br><a href="https://www.google.com/maps?q=4.601279595369138,-74.07077628611778" target="_blank">Ver en el mapa</a>`;
        infowindow.setContent(contentString);

        destinationMarker.addListener("click", function () {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(mapInstance, destinationMarker);
          }
        });

        const placesService = new window.google.maps.places.PlacesService(
          mapInstance
        );

        //todo filtrado de ubicaciones
        if (filtro.name !== "") {
          const request = {
            location: destination,
            radius: filtro.radio, // METROS A LA REDONDA
            type: filtro.name, // ESPECIFICAR QUE QUIERO AL REDEDOR
          };

          placesService.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              // Create markers for each nearby hospital
              for (let i = 0; i < results.length; i++) {
                const place = results[i];
                const placeMarker = new window.google.maps.Marker({
                  animation: window.google.maps.Animation.DROP,
                  position: place.geometry.location,
                  map: mapInstance,
                  title: place.name,
                  icon: {
                    //! filtros markers
                    url: "https://img.icons8.com/?size=512&id=qspUU6rTLYIZ&format=png",
                    scaledSize: new window.google.maps.Size(10, 10),
                  },
                });

                // Create info window for each marker
                const infowindow = new window.google.maps.InfoWindow();
                window.google.maps.event.addListener(
                  placeMarker,
                  "click",
                  function () {
                    infowindow.setContent(
                      "<strong><span style='color: black;'>" +
                        place.name +
                        "</span></strong><br>"
                    );
                    infowindow.open(mapInstance, this);
                  }
                );
              }
              //************* */
            }
          });
        }
        // Crea sombreado dentro del radio de búsqueda
        const circleOptions = {
          strokeColor: "#0000FF",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: "#0000FF",
          fillOpacity: 0.1,
          map: mapInstance,
          center: destination,
          radius: 100, // Radio en metros
        };
        new window.google.maps.Circle(circleOptions);
      });
    } catch (error) {
      setLocationError(true);
      console.log("este es error", error);
    }
  }, [latitud, filtro, theme]);

  const [activeFilter, setActiveFilter] = useState(null);

  const handleradio = (e) => {
    setFiltro({ ...filtro, radio: e.target.value });
    console.log(filtro);
  };
  const handlefiltro = (name) => {
    setActiveFilter(name);
    setFiltro({ ...filtro, name });
  };
  //! *****************************

  return (
    <div className="lg:grid lg:grid-cols-5 gap-4 grid-cols-1">
      <div className="flex lg:order-last justify-between items-center py-5 gap-2">
        <div className="flex lg:grid lg:grid-rows-5 lg:w-full gap-4 overflow-x-auto hide-scrollbar ">
          <button
            // className="flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40"
            className={`flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40 ${
              activeFilter === "school" ? "bg-slate-300/40" : ""
            }`}
            onClick={() => handlefiltro("school")}
          >
            <MdSchool className="text-lg" />
            Educacion
          </button>
          <button
            className={`flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40 ${
              activeFilter === "hospital" ? "bg-slate-300/40" : ""
            }`}
            onClick={() => handlefiltro("hospital")}
          >
            <FaRegHospital className="text-lg" /> Salud
          </button>
          <button
            className={`flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40 ${
              activeFilter === "church" ? "bg-slate-300/40" : ""
            }`}
            onClick={() => handlefiltro("church")}
          >
            <BiChurch className="text-lg" />
            Iglesias
          </button>
          <button
            className={`flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40 ${
              activeFilter === "transit_station" ? "bg-slate-300/40" : ""
            }`}
            onClick={() => handlefiltro("transit_station")}
          >
            {/* <BsBusFrontFill className="text-lg" /> */}
            <IoBusOutline className="text-lg" />
            Transporte
          </button>
          <button
            className={`flex items-center justify-center gap-3 border-[1px] py-2 px-3 border-gray-200 rounded-full hover:bg-slate-300/40 ${
              activeFilter === "store" ? "bg-slate-300/40" : ""
            }`}
            onClick={() => handlefiltro("store")}
          >
            <IoStorefrontOutline className="text-lg" />
            Tiendas
          </button>
        </div>
        {/* <input
          value={filtro.radio}
          onChange={handleradio}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="radios"
        ></input> */}
      </div>

      <div
        className="lg:col-span-4"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {locationError ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              cursor: "help",
            }}
          >
            <p className="mb-10">
              No se pudo proporcionar una ubicación de referencia {":("}
            </p>
          </div>
        ) : (
          <div
            id="map"
            className="rounded-xl"
            style={{ width: "100%", height: "80vh" }}
          />
        )}
      </div>
    </div>
  );
}
export default Maps;
//(e)=>{setFiltro({...filtro,radio:e.target.value})}

// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
// import logo from "../../../public/logo.png";
// // AIzaSyAY3zPk-r72ELJTbepL7koVfZ6XgrE63dY
// function Maps({ latitud, longitud, direccion }) {
//   const [locationError, setLocationError] = useState(false);

//   useEffect(() => {
//     const googleMapsScript = document.createElement("script");
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnFS0Lau3P23hTkDA9nzajVKlfAyppYW8&libraries=places,geocode`;
//     googleMapsScript.async = true;
//     googleMapsScript.defer = true;
//     window.document.body.appendChild(googleMapsScript);
//     try {
//       googleMapsScript.addEventListener("load", () => {
//         const mapOptions = {
//           center: new window.google.maps.LatLng(latitud, longitud),
//           zoom: 16,
//           disableDoubleClickZoom: true,
//         };

//         const mapInstance = new window.google.maps.Map(
//           document.getElementById("map"),
//           mapOptions
//         );

//         const destination = new window.google.maps.LatLng(latitud, longitud);
//         const iconImage = {
//           url: logo, //? Ruta de la imagen del logotipo
//           scaledSize: new window.google.maps.Size(100, 100), //? Tamaño personalizado del icono
//         };
//         const destinationMarker = new window.google.maps.Marker({
//           position: destination,
//           map: mapInstance,
//           icon: iconImage, //? Utilizar el icono personalizado
//         });
//         //!definir direccion
//         const infowindow = new window.google.maps.InfoWindow();
//         const contentString = `<div><strong>Dirección: </strong>${direccion}</div><br><a href="https://www.google.com/maps?q=4.601279595369138,-74.07077628611778" target="_blank">Ver en el mapa</a>`;
//         infowindow.setContent(contentString);

//         destinationMarker.addListener("click", function () {
//           if (infowindow.getMap()) {
//             infowindow.close();
//           } else {
//             infowindow.open(mapInstance, destinationMarker);
//           }
//         });

//         const placesService = new window.google.maps.places.PlacesService(
//           mapInstance
//         );
//         const request = {
//           location: destination,
//           radius: 10000, // METROS A LA REDONDA
//           type: "shops", // ESPECIFICAR QUE QUIERO AL REDEDOR
//         };

//         placesService.nearbySearch(request, (results, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//             // Create markers for each nearby hospital
//             for (let i = 0; i < results.length; i++) {
//               const place = results[i];
//               const placeMarker = new window.google.maps.Marker({
//                 position: place.geometry.location,
//                 map: mapInstance,
//                 title: place.name,
//               });

//               // Create info window for each marker
//               const infowindow = new window.google.maps.InfoWindow();
//               window.google.maps.event.addListener(
//                 placeMarker,
//                 "click",
//                 function () {
//                   infowindow.setContent(
//                     "<strong>" + place.name + "</strong><br>" + place.vicinity
//                   );
//                   infowindow.open(mapInstance, this);
//                 }
//               );
//             }
//             // Crea sombreado dentro del radio de búsqueda
//             const circleOptions = {
//               strokeColor: "#0000FF",
//               strokeOpacity: 0.2,
//               strokeWeight: 2,
//               fillColor: "#0000FF",
//               fillOpacity: 0.1,
//               map: mapInstance,
//               center: destination,
//               radius: 1000, // Radio en metros
//             };

//             new window.google.maps.Circle(circleOptions);
//           }
//         });
//       });
//     } catch (error) {
//       setLocationError(true);
//       console.log("este es error", error);
//     }
//   }, [latitud]);

//   //! *****************************

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       {locationError ? (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             border: "1px solid #ccc",
//             borderRadius: "10px",
//             padding: "20px",
//             boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
//             cursor: "help",
//           }}
//         >
//           <p className="mb-10">
//             No se pudo proporcionar una ubicación de referencia {":("}
//           </p>
//         </div>
//       ) : (
//         <div
//           id="map"
//           className="rounded-xl"
//           style={{ width: "100%", height: "80vh" }}
//         />
//       )}
//     </div>

//   );
// }
// export default Maps;
