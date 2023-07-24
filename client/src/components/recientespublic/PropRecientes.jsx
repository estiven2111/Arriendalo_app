/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import PropiedadCard from "./PropiedadCard";

import { pagePropiedades } from "../../redux/propiedades/propiedades.slice";

import {
  useGetPropertiesQuery,
  useGetRecentPropertiesQuery,
} from "../../redux/RTKquery/propertyApi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

const PropRecientes = () => {
  // const propiedades = useSelector(
  //   (state) => state.propiedadesSlice.propiedadess
  // );

  const { data: properties = [], isLoading } = useGetRecentPropertiesQuery();
  console.log(properties);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    // dispatch(pagePropiedades());
    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-7">
      <h1 className=" text-center py-5 pb-10 items-center text-3xl font-bold">
        Propiedades mas recientes
      </h1>
      <div className=" flex flex-row gap-5 justify-center">
        <Swiper
          shouldSwiperUpdate={true} // Add shouldSwiperUpdate prop
          // pixelRatio={1}
          // effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // slidesPerView={"4"}
          slidesPerView={1} // Show only one card on small devices
          breakpoints={{
            // Add breakpoints for responsive behavior
            640: {
              slidesPerView: 1, // Show 2 cards on devices with width >= 640px
            },
            768: {
              slidesPerView: 2, // Show 3 cards on devices with width >= 768px
            },
            1024: {
              slidesPerView: 3, // Show 4 cards on devices with width >= 1024px
            },
          }}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 2.5,
          // }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Pagination, Navigation]} // delet effectcoverflow  -> EffectCoverflow,
          className="swiper_container  py-10 " //bring px to 0 to chang it to a normal slide
        >
          {properties?.map((propiedad) => (
            <div key={propiedad.codigo} className="">
              <SwiperSlide>
                <PropiedadCard propiedad={propiedad} />
              </SwiperSlide>
            </div>
          ))}
          <div className="slider-controler pt-5">
            <div className="swiper-button-prev slider-arrow z-10">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination mt-5"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PropRecientes;
