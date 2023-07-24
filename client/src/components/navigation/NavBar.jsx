import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { logowhite } from "../../assets/index";
import { Link } from "react-router-dom";

import { MdPayment, MdOutlineLiveHelp, MdLogin } from "react-icons/md";
import { TbForms } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FilterData } from "../../redux/landingpage/FilterDataObj.slice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { filterLanding } = useSelector((state) => state.FilterDataObjSlice);
  let activeStyle = {
    fontWeight: "bold",
    // color: "#0055fb",
    paddingBottom: "2px", // Add padding to create space for the border
    borderBottom: "2px solid ",
  };

  // eslint-disable-next-line no-unused-vars
  let activeClassName = "underline";

  const dispatch = useDispatch();

  const onClickHandler = () => {
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
  };
  console.log("sssssnavbarrrrrrrrr", filterLanding);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-primaryblue/80 transition-colors z-10 duration-500 dark:bg-darkblue fixed top-0 left-0 w-full ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[90px] ">
          <div className="flex gap-6 md:grid md:grid-cols-5  text-white items-center relative">
            {/* Menu toggle button for medium and small screens */}
            <div className="lg:hidden md:col-span-2 text-white flex items-center">
              <button
                className={`text-white text-xl transition-transform duration-200 ease-in-out focus:outline-none ${
                  showMenu ? "rotate-90" : "rotate-0"
                }`}
                onClick={toggleMenu}
              >
                {showMenu ? (
                  <VscChromeClose className="text-3xl" />
                ) : (
                  <IoMenuSharp className="text-4xl" />
                )}
              </button>
            </div>
            <div className="hidden gap-5 lg:flex lg:col-span-2 ">
              <NavLink
                to="/aplicar"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className="cursor-pointer  hover:scale-105 duration-200 md:text-lg text-md font-medium">
                  Aplicar
                </div>
              </NavLink>
              <NavLink
                to="/arriendaloflex"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <div className="cursor-pointer  hover:scale-105 duration-200 md:text-lg text-md font-medium">
                  Arriendalo Flex
                </div>
              </NavLink>
            </div>

            <div className="flex items-center text-white">
              <Link to="/" onClick={onClickHandler}>
                <img
                  className="duration-200 lg:w-60 lg:h-16 md:w-72 sm:w-64 "
                  src={logowhite}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="flex gap-3 md:col-span-2 md:justify-end">
              <div className="hidden lg:flex justify-end gap-5 items-center">
                <button className="border-[1.5px] text-white py-2 px-3  rounded-full  hover:scale-105 duration-200 md:text-lg text-md  border-white hover:border-slate-400  font-medium">
                  Pagar arriendo
                </button>
                {/* <button className="border-[1.5px] text-white  py-2 px-4  rounded-full  hover:scale-105 duration-200 md:text-lg text-md hover:border-slate-400 border-white font-medium">
                  Entrar
                </button> */}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Menu content for medium and small screens */}
      {showMenu && (
        // <div className="bg-slate-50 dark:bg-slate-950 py-3 px-5 mt-3 dark:shadow-neutral-700 shadow-md text-black dark:text-white">

        <div
          className={`lg:hidden bg-slate-50 dark:bg-slate-950 py-3 px-5 mt-[0.5px] dark:shadow-neutral-700 shadow-md w-full text-black dark:text-white absolute ${
            showMenu
              ? "opacity-100 max-h-full transition-all duration-300 ease-in-out"
              : "opacity-0 max-h-0"
          }`}
          style={{
            maxHeight: showMenu ? "500px" : "0",
            visibility: showMenu ? "visible" : "hidden",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 mb-2 gap-3 pt-4 items-center hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <MdLogin className="" />
              Entrar
            </div>
          </NavLink>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer "
              onClick={toggleMenu}
            >
              <MdPayment className="" /> Pagar Arriendo
            </div>
          </NavLink>
          <NavLink
            to="/aplicar"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <TbForms /> Aplicar
            </div>
          </NavLink>
          <NavLink
            to="/arriendaloflex"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <SlBadge />
              Arriendalo Flex
            </div>
          </NavLink>
          <NavLink
            to="/ayuda"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <MdOutlineLiveHelp />
              Ayuda
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
