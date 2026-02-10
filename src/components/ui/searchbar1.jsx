// import React, { useState } from 'react';

// import axiosInstance from '@/utils/axios';
// import { usePlaces } from '../../../hooks';

// // const SearchBar = () => {
// const SearchBar = ({ compact }) => {

//   const Places = usePlaces();
//   const { setPlaces, setLoading } = Places;

//   const [searchText, setSearchText] = useState('');
//   const [searchTimeout, setSearchTimeout] = useState(null);

//   const handleSearch = async (e) => {
//     clearTimeout(searchTimeout);
//     setSearchText(e.target.value);

//     if (searchText.trimStart() !== '') {
//       setLoading(true);
//       setSearchTimeout(
//         setTimeout(async () => {
//           const { data } = await axiosInstance.get(
//             `/places/search/${searchText.trimStart()}`,
//           );
//           setPlaces(data);
//           setLoading(false);
//         }, 500),
//       );
//     }
//   };

//   return (
//     <>
//     <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
//       {/* Search Bar */}
//       <div
//         className={`transition-all duration-300 flex justify-center ${
//           compact ? "py-2" : "py-6"
//         }`}
//       >
//         <div
//           className={`flex items-center bg-white rounded-full shadow-lg border transition-all duration-300
//           ${compact ? "w-[420px] py-2" : "w-[720px] py-4"}`}
//         >
//           <input
//             className="flex-1 px-6 outline-none text-sm"
//             placeholder="Where you want to go?"
//           />
//           <button className="bg-rose-500 text-white px-6 py-2 rounded-full mr-2">
//             🔍
//           </button>
//         </div>
//       </div>
//     </header>
//     </>
//   );
// };

// export default SearchBar;

// =====================================================================================================

// import React, { useState } from "react";
// import axiosInstance from "@/utils/axios";
// import { usePlaces } from "../../../hooks";



// const SearchBar = ({ compact, activeTab = "homes" }) => {
//   const { setPlaces, setLoading } = usePlaces();

//   const [searchText, setSearchText] = useState("");
//   const [searchTimeout, setSearchTimeout] = useState(null);

//   const handleSearch = async (value) => {
//     clearTimeout(searchTimeout);
//     setSearchText(value);

//     if (value.trim() !== "") {
//       setLoading(true);
//       setSearchTimeout(
//         setTimeout(async () => {
//           const { data } = await axiosInstance.get(
//             `/places/search/${value.trim()}`
//           );
//           setPlaces(data);
//           setLoading(false);
//         }, 500)
//       );
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
//       <div
//         className={`flex justify-center transition-all duration-300 ${
//           compact ? "py-2" : "py-6"
//         }`}
//       >
//         {/* COMPACT SEARCH */}
//         {compact ? (
//           <div className="flex items-center gap-3 bg-white border shadow-md rounded-full px-6 py-3 text-sm font-medium">
//             <span className="capitalize">{activeTab}</span>
//             <span className="text-black-200 font-bold">|  Anywhere  |  Any week  |  Add guests</span>
//             <span className="bg-rose-500 text-white p-2 rounded-full">🔍</span>
//           </div>
//         ) : (
//           /* EXPANDED SEARCH */
//           <div className="flex items-center bg-white rounded-full shadow-lg border overflow-hidden">
//             {/* WHERE */}
//             <div className="px-6 py-3 border-r">
//               <p className="text-xs font-semibold">Where</p>
//               <input
//                 value={searchText}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 className="text-sm outline-none text-gray-600"
//                 placeholder="Search destinations"
//               />
//             </div>

//             {/* DATE */}
//             <div className="px-6 py-3 border-r">
//               <p className="text-xs font-semibold">Check in</p>
//               <p className="text-sm text-gray-400">Add dates</p>
//             </div>

//             {/* GUESTS */}
//             <div className="px-6 py-3">
//               <p className="text-xs font-semibold">Who</p>
//               <p className="text-sm text-gray-400">Add guests</p>
//             </div>

//             {/* SEARCH BUTTON */}
//             <button className="bg-rose-500 text-white px-6 py-3 rounded-full m-2">
//               🔍
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default SearchBar;




// =======================================================================================================

// working 2

// import React, { useState, useEffect } from "react";
// import axiosInstance from "@/utils/axios";
// import { usePlaces } from "../../../hooks";
// import {useRef } from "react";



// const SearchBar = ({ compact, activeTab = "homes" }) => {
//   const { setPlaces, setLoading } = usePlaces();

//   const [searchText, setSearchText] = useState("");
//   const [searchTimeout, setSearchTimeout] = useState(null);
//   const [showCities, setShowCities] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const dropdownRef = useRef(null);


//   useEffect(() => {
//   const handleClickOutside = (e) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//       setShowSuggestions(false);
//     }
//   };

//   window.addEventListener("click", handleClickOutside);
//   return () => window.removeEventListener("click", handleClickOutside);
// }, []);

  

// //   useEffect(() => {
// //   const close = () => setShowSuggestions(false);
// //   window.addEventListener("click", close);
// //   return () => window.removeEventListener("click", close);
// // }, []);



//   const cities = [
//   "Delhi", "Mumbai", "Bangalore", "Chennai",
//   "Goa", "Hyderabad", "Pune", "Jaipur"
// ];

//   const handleSearch = async (value) => {
//     clearTimeout(searchTimeout);
//     setSearchText(value);

//     if (value.trim() !== "") {
//       setLoading(true);
//       setSearchTimeout(
//         setTimeout(async () => {
//           const { data } = await axiosInstance.get(
//             `/places/search/${value.trim()}`
//           );
//           setPlaces(data);
//           setLoading(false);
//         }, 500)
//       );
//     }
//   };




//   /* 🔥 TAB BASED CONFIG (THIS IS THE KEY) */
//   const config = {
//     homes: {
//       whereLabel: "Where",
//       wherePlaceholder: "Search destinations",
//       middleLabel: "Check in",
//       middlePlaceholder: "Add dates",
//       rightLabel: "Who",
//       rightPlaceholder: "Add guests",
//     },
//     experiences: {
//       whereLabel: "Where",
//       wherePlaceholder: "Search by landmark or city",
//       middleLabel: "When",
//       middlePlaceholder: "Add dates",
//       rightLabel: "Who",
//       rightPlaceholder: "Add guests",
//     },
//     services: {
//       whereLabel: "Where",
//       wherePlaceholder: "Search by city",
//       middleLabel: "When",
//       middlePlaceholder: "Add dates",
//       rightLabel: "Type of service",
//       rightPlaceholder: "Add service",
//     },
//   };

//   const current = config[activeTab];

//   return (
//     <header className="w-full">
//       <div
//         className={`flex justify-center transition-all duration-300 ${
//           compact ? "py-2" : "py-6"
//         }`}
//       >
//         {/* COMPACT SEARCH */}
//         {compact ? (
//           <div className="flex items-center gap-3 bg-white border shadow-md rounded-full px-6 py-3 text-sm font-medium">
//             <span className="capitalize">{activeTab}</span>
//             <span className="text-gray-500">
//               | {current.wherePlaceholder} | {current.middlePlaceholder} |{" "}
//               {current.rightPlaceholder}
//             </span>
//             <span className="bg-rose-500 text-white p-2 rounded-full">🔍</span>
//           </div>
//         ) : (
//           /* EXPANDED SEARCH */
//           // <div className="flex items-center bg-white rounded-full shadow-lg border overflow-hidden w-full max-w-3xl">
//            <div className="relative flex items-center bg-white rounded-full shadow-lg border overflow-hidden w-[720px]">

//             {/* WHERE */}
//             {/* <div className="px-6 py-3 flex-1 border-r"> */}
//             {/* WHERE */}
//           <div className="relative px-6 py-3 border-r">
//                 <p className="text-xs font-semibold">{current.whereLabel}</p>
//                 {/* <input
//                   value={searchText}
//                   onChange={(e) => handleSearch(e.target.value)}
//                   className="text-sm outline-none text-gray-600 w-full"
//                   placeholder={current.wherePlaceholder}
//                 /> */}
//                 <input
//                     value={searchText}
//                     onClick={(e) => e.stopPropagation()}
//                     onFocus={() => setShowCities(true)}  
//                     onChange={(e) => handleSearch(e.target.value)}
//                     className="text-sm outline-none text-gray-600 w-full"
//                     placeholder={
//                       activeTab === "homes"
//                         ? "Search destinations"
//                         : activeTab === "experiences"
//                         ? "Search by landmark or city"
//                         : "Add service"
//                     }
//                   />
//             </div>

//             {/* WHEN */}
//             <div className="px-6 py-3 flex-1 border-r">
//               <p className="text-xs font-semibold">{current.middleLabel}</p>
//               <p className="text-sm text-gray-400">
//                 {current.middlePlaceholder}
//               </p>
//             </div>

//             {/* RIGHT */}
//             <div className="px-6 py-3 flex-1">
//               <p className="text-xs font-semibold">{current.rightLabel}</p>
//               <p className="text-sm text-gray-400">
//                 {current.rightPlaceholder}
//               </p>
//             </div>

//             {/* SEARCH BUTTON */}
//             <button className="bg-rose-500 text-white px-6 py-3 rounded-full m-2">
//               🔍
//             </button>
//           </div>
//         )}
//       </div>

//       {showCities && (
//         <div
//           ref={dropdownRef}
//           onClick={(e) => e.stopPropagation()}
//           className="absolute left-0 top-full mt-4 w-[380px] rounded-2xl bg-white shadow-xl border z-50 p-4"
//         >
//           {/* <div className="absolute top-full mt-3 bg-white shadow-xl rounded-2xl p-4 w-[320px] z-50"> */}
//             <p className="text-xs font-semibold text-gray-500 mb-2">
//               POPULAR DESTINATIONS
//             </p>

//             {cities.map((city) => (
//               <button
//                 key={city}
//                 onClick={() => {
//                   setSearchText(city);
//                   setShowCities(false);
//                 }}
//               //   className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
//               // >
              
//                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 text-left"
//               >
//                 📍 {city}
//               </button>
//             ))}
//           </div>
//         )}

//     </header>
//   );
// };

// export default SearchBar;



// ====================================================================================================================

// Working with calender option

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axiosInstance from "@/utils/axios";
import { usePlaces } from "../../../hooks";
import { DateRange } from "react-date-range";
// import { addDays } from "date-fns";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";



const SearchBar = ({ compact, activeTab = "homes" }) => {
  const { setPlaces, setLoading } = usePlaces();

  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [activeSection, setActiveSection] = useState(null); // "where" | "when" | "who"
  const [activeWhenTab, setActiveWhenTab] = useState("dates"); // dates | months | flexible
  const [flexDays, setFlexDays] = useState(0); // Airbnb ± days option
  const [selectedMonth, setSelectedMonth] = useState(null);


  const dropdownRef = useRef(null);

  const [showCalendar, setShowCalendar] = useState(false);

  const [openWhen, setOpenWhen] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const whenRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const whereRef = useRef(null);
  const calendarRef = useRef(null);

  /* ---------------- OUTSIDE CLICK ---------------- */
  // ----------For City------------
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
   }, []);





  // ------------For calender----------------
     
   useEffect(() => {
    function handleClickOutside(e) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
      ) {
        setShowCalendar(false);
        setActiveSection(null);
      }
  }
  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showCalendar]);


useEffect(() => {
  const onEsc = (e) => e.key === "Escape" && setShowCalendar(false);
  window.addEventListener("keydown", onEsc);
  return () => window.removeEventListener("keydown", onEsc);
}, []);


const clearDates = (e) => {
  e.stopPropagation();

  setDates([{ startDate: null, endDate: null, key: "selection" }]);

  searchParams.delete("start");
  searchParams.delete("end");
  setSearchParams(searchParams);
};
  /* ---------------- DATA ---------------- */
  const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Goa",
    "Hyderabad",
    "Pune",
    "Jaipur",
  ];

  /* ---------------- NEARBY GPS ---------------- */
  const handleNearby = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("GPS:", pos.coords.latitude, pos.coords.longitude);
        setSearchText("Nearby");
        setShowSuggestions(false);
      },
      () => alert("Location access denied")
    );
  };

  /* ---------------- FORMAT DATE ---------------- */
  const formattedDate =
    range[0].startDate && range[0].endDate
      ? `${format(range[0].startDate, "dd/MM/yyyy")} → ${format(
          range[0].endDate,
          "dd/MM/yyyy"
        )}`
      : "Add dates";


  /* ---------------- TAB CONFIG ---------------- */
  const config = {
    homes: {
      where: "Search destinations",
      middle: "Add dates",
      right: "Add guests",
    },
    experiences: {
      where: "Search by landmark or city",
      middle: "Add dates",
      right: "Add guests",
    },
    services: {
      where: "Search by city",
      middle: "Add dates",
      right: "Add service",
    },
  };

  const current = config[activeTab];

  return (
    <header className="w-full">
      <div className={`flex justify-center ${compact ? "py-2" : "py-6"}`}>
        {compact ? (
          /* COMPACT */
          <div className="flex items-center gap-3 bg-white border shadow-md rounded-full px-6 py-3 text-sm font-medium">
            <span className="capitalize">{activeTab}</span>
            <span className="text-gray-500">
              | Anywhere | Any week | Add guests
            </span>
            <span className="bg-rose-500 text-white p-2 rounded-full">🔍</span>
          </div>
        ) : (
          /* EXPANDED */
          <div className="relative flex items-center bg-white rounded-full shadow-lg border w-[720px] overflow-visible">
            {/* WHERE */}
            <div className="relative px-6 py-3 border-r w-[260px]">
              <p className="text-xs font-semibold">Where</p>
              <input
                value={searchText}
                onFocus={() => setShowSuggestions(true)}
                onChange={(e) => setSearchText(e.target.value)}
                className="text-sm outline-none text-gray-600 w-full"
                placeholder={current.where}
              />

              {/* DROPDOWN */}
              {showSuggestions && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-[calc(100%+12px)] w-[360px] rounded-2xl bg-white shadow-xl border z-50 p-4"
                >
                  <button
                    onClick={handleNearby}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100"
                  >
                    📍
                    <div className="text-left">
                      <p className="font-medium">Nearby</p>
                      <p className="text-xs text-gray-500">
                        Find what’s around you
                      </p>
                    </div>
                  </button>

                  <hr className="my-3" />

                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    POPULAR DESTINATIONS
                  </p>

                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSearchText(city);
                        setShowSuggestions(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 hover:bg-gray-100 text-left"
                    >
                      📍 {city}
                    </button>
                  ))}
                </div>
              )}
            </div>


          {/* WHEN */}
            <div
                onClick={() => {
                  setActiveSection("when");
                  setShowCalendar(true);
                }}
                className={`relative px-6 py-3 flex-1 cursor-pointer transition-all duration-300 rounded-full
                  ${
                    activeSection === "when"
                      ? "bg-white shadow-md"
                      : "hover:bg-gray-100"
                  }
                `}
              >
                <p className="text-xs font-semibold">When</p>

                {/* TEXT + CLEAR */}
                {range[0].startDate && range[0].endDate ? (
                  <div className="flex items-center gap-2">
                    <p className="text-sm">
                      {format(range[0].startDate, "dd MMM")} –{" "}
                      {format(range[0].endDate, "dd MMM")}
                    </p>

                    {/* ❌ CLEAR */}
                    <span
                      onClick={(e) => {
                        e.stopPropagation(); // 🚨 VERY IMPORTANT
                        setRange([
                          {
                            startDate: null,
                            endDate: null,
                            key: "selection",
                          },
                        ]);
                        setShowCalendar(false);
                        setActiveSection(null);
                      }}
                      className="text-gray-400 hover:text-black text-lg cursor-pointer"
                    >
                      ✕
                    </span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">Add dates</p>
                )}

                {/* CALENDAR */}
                {showCalendar && activeSection === "when" && (
                  <div
                    ref={calendarRef}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2
                    bg-white rounded-3xl shadow-2xl border z-50 p-6
                    animate-[fadeIn_0.25s_ease-out]"
                  >
                    {/* Airbnb tabs */}
                       {/* Tabs */}
                        <div className="flex justify-center mb-6">
                          <div className="flex bg-gray-100 rounded-full p-1">
                            {["dates", "months", "flexible"].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setActiveWhenTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition
                                  ${
                                    activeWhenTab === tab
                                      ? "bg-white shadow"
                                      : "text-gray-500"
                                  }`}
                              >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* DATES TAB */}
                       {activeWhenTab === "dates" && (
                        <>
                          <DateRange
                            ranges={range}
                            onChange={(item) => {
                              const sel = item.selection;
                              setRange([sel]);

                              if (sel.startDate && sel.endDate) {
                                setShowCalendar(false); // auto close
                                setActiveSection(null);
                              }
                            }}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            direction="horizontal"
                            showDateDisplay={false}
                            minDate={new Date()}
                            rangeColors={["#FF385C"]}
                          />

                          {/* ± days row */}
                          <div className="flex gap-3 justify-center mt-6">
                            {[
                              { label: "Exact dates", value: 0 },
                              { label: "± 1 day", value: 1 },
                              { label: "± 2 days", value: 2 },
                              { label: "± 3 days", value: 3 },
                              { label: "± 7 days", value: 7 },
                              { label: "± 14 days", value: 14 },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                onClick={() => setFlexDays(opt.value)}
                                className={`px-4 py-2 rounded-full border text-sm transition
                                  ${flexDays === opt.value
                                    ? "border-black bg-white"
                                    : "border-gray-300 hover:border-black"}
                                `}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}


                        {/* MONTHS TAB */}
                        {activeWhenTab === "months" && (
                          <div className="grid grid-cols-3 gap-6 p-6">
                            {Array.from({ length: 12 }).map((_, i) => {
                              const month = new Date(new Date().getFullYear(), i);
                              return (
                                <button
                                  key={i}
                                  onClick={() => setSelectedMonth(month)}
                                  className={`p-6 rounded-xl border text-center transition
                                    ${selectedMonth?.getMonth() === i
                                      ? "border-black bg-gray-50"
                                      : "border-gray-200 hover:border-black"}
                                  `}
                                >
                                  <p className="font-medium">
                                    {month.toLocaleString("default", { month: "long" })}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {month.getFullYear()}
                                  </p>
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* FLEXIBLE TAB */}
                        {activeWhenTab === "flexible" && (
                        <>
                          <div className="flex justify-center gap-4 mb-6">
                            {["Weekend", "Week", "Month"].map((opt) => (
                              <button
                                key={opt}
                                className="px-6 py-3 rounded-full border text-sm hover:border-black"
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          <div className="flex justify-center gap-3">
                            {[1, 2, 3, 7, 14].map((d) => (
                              <button
                                key={d}
                                onClick={() => setFlexDays(d)}
                                className={`px-4 py-2 rounded-full border
                                  ${flexDays === d ? "border-black" : "border-gray-300"}
                                `}
                              >
                                ± {d} days
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                      {/* </div>
                    )} */}




                    <DateRange
                      ranges={range}
                      onChange={(item) => {
                        const sel = item.selection;
                        setRange([sel]);

                        // ✅ Airbnb rule: close only after BOTH dates
                        if (sel.startDate && sel.endDate) {
                          setShowCalendar(false);
                          setActiveSection(null);
                        }
                      }}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      direction="horizontal"
                      showDateDisplay={false}
                      minDate={new Date()}
                      // rangeColors={["#FF385C"]}
                    />
                  </div>
                )}
            </div>


    {/* ============================================================================================ */}


            {/* WHO / SERVICE */}
            <div className="px-6 py-3 flex-1">
              <p className="text-xs font-semibold">
                {activeTab === "services" ? "Type of service" : "Who"}
              </p>
              <p className="text-sm text-gray-400">{current.right}</p>
            </div>

            {/* SEARCH */}
            <button className="bg-rose-500 text-white px-6 py-3 rounded-full m-2">
              🔍
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default SearchBar;


// ======================================================================================================


