/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";

import { Input, initTE } from "tw-elements";
import {
  FilterData,
  filterCities,
  filterProperties,
  filterTipesProperties,
} from "../../redux/landingpage/FilterDataObj.slice";
import { pagePropiedades } from "../../redux/propiedades/propiedades.slice";
import OpcionTipoPropiedad from "./OpcionTipoPropiedad";
import OpcionHabitaciones from "./OpcionHabitaciones";
import { useGetPropertiesearchQuery } from "../../redux/RTKquery/propertyApi";
import CiudadSearch from "./CiudadSearch";

const HeroFilter = () => {
  const { filterlanding } = useSelector((state) => state.FilterDataObjSlice);
  const { data: filterProperty = [], isLoading } =
    useGetPropertiesearchQuery(filterlanding);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // if (
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

  const onChangeHandler = (e) => {
    // setFilterData({
    //   ...filterData,
    //   [e.target.name]: e.target.value,
    // });
    const { name, value } = e.target;
    // dispatch(FilterData({ ...filterlanding, [name]: value }));
    dispatch(
      FilterData({
        ...filterlanding,
        [name]: value,
      })
    );
  };
  useEffect(() => {
    dispatch(filterCities());
    dispatch(filterTipesProperties());
  }, []);

  return (
    <div className="  rounded-lg   w-full mt-5 md:mt-4 ">
      {console.log("heroooooo", filterlanding)}
      <form onSubmit={onSubmitHandler}>
        <div className="  pb-5  rounded-xl dark:text-white text-black p-5">
          <h1 className="text-center uppercase pb-10 md:text-2xl text-lg font-extrabold">
            Encontrar mi nuevo hogar
          </h1>

          <div className="grid grid-cols-1  ">
            <div className="pb-10">
              <CiudadSearch />
              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="ciudad"
                  onChange={onChangeHandler}
                  // value={filterData.ciudad}
                  className="peer input_class"
                />
                <label className="label_class flex items-center gap-1">
                  <SlLocationPin className="text-xl pb-1" />
                  Ciudad
                </label>
              </div> */}
              <div>
                <OpcionHabitaciones />
              </div>
              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="habitaciones"
                  onChange={onChangeHandler}
                  value={filterData.habitaciones}
                  className="peer input_class"
                />
                <label className="label_class flex items-center gap-1">
                  <MdOutlineBedroomParent className="text-xl pb-1" />
                  Habitaciones
                </label>
              </div> */}
              <div>
                {/* <OpcionTipogit branchPropiedad /> */}
              </div>
              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="tipo"
                  onChange={onChangeHandler}
                  value={filterData.tipo}
                  className="peer input_class"
                />
                <label className="label_class flex items-center gap-1">
                  <BiBuildingHouse className="text-xl pb-1" />
                  Tipo de propiedad
                </label>
              </div> */}
            </div>
            <button className="dark:bg-primaryblue/80 duration-200 font-extrabold rounded-full hover:saturate-200 bg-primaryblue/70 p-2  w-full text-white md:text-1lg text-lg ">
              BUSCAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeroFilter;
