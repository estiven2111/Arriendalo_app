import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { FilterData } from "../../redux/landingpage/FilterDataObj.slice.js";

const CiudadSearch = () => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const { filterLanding, citiesFiltered } = useSelector(
    (state) => state.FilterDataObjSlice
  );

  const filteredCiudades =
    query === ""
      ? citiesFiltered
      : citiesFiltered.filter((el) =>
          el.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const dispatch = useDispatch();

  const onClickHandler = (e) => {
    setSelected(e.name);
    setQuery(e.name);
    dispatch(
      FilterData({
        ...filterLanding,
        ciudad: e.name,
      })
    );
  };
  const onChageHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
    if (value === "") {
      setSelected("");
    }

    dispatch(
      FilterData({
        ...filterLanding,
        ciudad: value,
      })
    );
  };

  return (
    <div className="relative mb-3">
      <Combobox value={selected} onChange={setSelected}>
        <div className="mt-1">
          <div className="relative">
            <Combobox.Input
              placeholder="Ciudad"
              className="w-full py-3 border-gray-300 pl-10 pr-5 bg-transparent rounded-full border-[1px] ring-gray-800"
              displayValue={(el) => el.name}
              onChange={(e) => onChageHandler(e)}
            />
            <SlLocationPin
              className="absolute left-3 dark:text-slate-100 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5"
              aria-hidden="true"
            />
          </div>
          {query !== "" && (
            <Transition
              as={Fragment}
              leave="transition ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-slate-700 py-1 text-base shadow-lg  z-10 focus:outline-none sm:text-sm">
                {filteredCiudades.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    No hay propiedades en esa ciudad.
                  </div>
                ) : (
                  filteredCiudades.slice(0, 2).map((el) => (
                    <Combobox.Option
                      key={el.id}
                      onClick={() => onClickHandler(el)}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-sky-200/20 text-sky-500"
                            : "text-gray-900 dark:text-white"
                        }`
                      }
                      value={el}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {el.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-sky-700" : "text-teal-600"
                              }`}
                            >
                              <BsCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          )}
        </div>
      </Combobox>
    </div>
  );
};

export default CiudadSearch;

//! SIRVE

// import { useDispatch, useSelector } from "react-redux";
// import { FilterData } from "../../redux/landingpage/FilterDataObj.slice";
// import { useGetPropertiesearchQuery } from "../../redux/RTKquery/propertyApi";
// import { SlLocationPin } from "react-icons/sl";
// import { ciudades } from "../../data";
// import { useState } from "react";

// const CiudadSearch = () => {
//   const { filterLanding, citiesFiltered } = useSelector(
//     (state) => state.FilterDataObjSlice
//   );
//   const { data: filterProperty = [], isLoading } =
//     useGetPropertiesearchQuery(filterLanding);

//   const [filteredData, setFilterData] = useState([]);
//   const [selectedCity, setSelectedCity] = useState("");

//   console.log("search landing", filterLanding);

//   const dispatch = useDispatch();

//   const handlerfilter = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     const searchWord = value;
//     const newFilter = citiesFiltered.filter((el) =>
//       el.value.toLowerCase().includes(searchWord.toLowerCase())
//     );
//     dispatch(
//       FilterData({
//         ...filterLanding,
//         [name]: value,
//       })
//     );
//     searchWord === "" ? setFilterData([]) : setFilterData(newFilter);
//     setSelectedCity(value);
//   };

//   const handleOptionClick = (value) => {
//     dispatch(FilterData({ ...filterLanding, ciudad: value }));
//     setFilterData([]);
//     setSelectedCity(value);
//   };

//   return (
//     <div>
//       {" "}
//       <div className="relative">
//         <input
//           type="search"
//           placeholder={filterLanding.ciudad === "" ? "Ciudad" : selectedCity}
//           name="search"
//           className="w-full flex items-center justify-start gap-3 py-3 mb-3 pl-10 pr-5 bg-transparent rounded-full border-[1px] border-gray-300 ring-gray-800"
//           onChange={handlerfilter}
//           //   onChange={handleFilterChange}
//         />
//         <SlLocationPin
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5"
//           aria-hidden="true"
//         />
//       </div>
//       {filteredData.length !== 0 && (
//         <div className="relative mt-2 hide-scrollbar w-full h-20 rounded-lg dark:bg-slate-700 bg-white shadow-xl overflow-hidden overflow-y-auto">
//           {filteredData.slice(0, 2).map((el, i) => (
//             <div
//               className="w-full h-9 text-sm hover:text-sky-900 hover:bg-sky-100 cursor-pointer pl-10 flex items-center "
//               value={el.value}
//               onClick={() => handleOptionClick(el.value)} // Add onClick event handler
//               key={i}
//             >
//               {el.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CiudadSearch;
