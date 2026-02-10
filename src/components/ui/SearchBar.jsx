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
  // const [whenLabel, setWhenLabel] = useState("Add dates");
  const [whenMode, setWhenMode] = useState(null);
  const [flexibleDays, setFlexibleDays] = useState(null);
  const [flexibleMonth, setFlexibleMonth] = useState(null);
  const [flexibleType, setFlexibleType] = useState(null);
  const [showGuests, setShowGuests] = useState(false);

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  



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
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const whereRef = useRef(null);
  const calendarRef = useRef(null);
  const prevStartRef = useRef(null);
  const guestsRef = useRef(null);


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
     
//    useEffect(() => {
//     function handleClickOutside(e) {
//       if (
//         calendarRef.current &&
//         !calendarRef.current.contains(e.target)
//       ) {
//         setShowCalendar(false);
//         setActiveSection(null);
//       }
//   }
//   document.addEventListener("mousedown", handleClickOutside);

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, [showCalendar]);




useEffect(() => {
  const handleClickOutside = (e) => {
    // Calendar
    if (
      calendarRef.current &&
      !calendarRef.current.contains(e.target)
    ) {
      setShowCalendar(false);
    }

    // Guests
    if (
      guestsRef.current &&
      !guestsRef.current.contains(e.target)
    ) {
      setShowGuests(false);
    }

    // Reset active section if both closed
    if (
      calendarRef.current &&
      guestsRef.current &&
      !calendarRef.current.contains(e.target) &&
      !guestsRef.current.contains(e.target)
    ) {
      setActiveSection(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);



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

const getWhenText = () => {
  if (whenMode === "dates" && range[0].startDate && range[0].endDate) {
    return `${format(range[0].startDate, "dd MMM")} – ${format(
      range[0].endDate,
      "dd MMM"
    )}`;
  }

  if (whenMode === "months" && selectedMonth) {
    return format(selectedMonth, "MMMM yyyy");
  }

  if (whenMode === "flexible" && selectedMonth && flexDays) {
    return `${format(selectedMonth, "MMMM")} · ±${flexDays} days`;
  }

  return "Add dates";
};



/* ✅ FIX 1: Clear other selections when switching WHEN tabs */
useEffect(() => {
  if (activeWhenTab === "dates") {
    setSelectedMonth(null);
    setFlexibleDays(null);
  }

  if (activeWhenTab === "months") {
    setRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
    setFlexibleDays(null);
  }

  if (activeWhenTab === "flexible") {
    setRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ]);
    setSelectedMonth(null);
  }
}, [activeWhenTab]);


  // useEffect(() => {
  //   const handler = (e) => {
  //     if (
  //       whereRef.current &&
  //       !whereRef.current.contains(e.target) &&
  //       calendarRef.current &&
  //       !calendarRef.current.contains(e.target)
  //     ) {
  //       setShowWhere(false);
  //       setShowCalendar(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => document.removeEventListener("mousedown", handler);
  // }, []);

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


   // ✅ 3. DATE SELECTION LOGIC (ADD IT HERE 👇)
  const handleDateSelect = (item) => {
    const sel = item.selection;
    const prevStart = prevStartRef.current;

    setRange([
      {
        startDate: sel.startDate,
        endDate: sel.endDate,
        key: "selection",
      },
    ]);

    // SINGLE DAY → close
    if (
      !prevStart &&
      sel.startDate &&
      sel.endDate &&
      sel.startDate.getTime() === sel.endDate.getTime()
    ) {
      setShowCalendar(false);
      setActiveSection(null);
    }

    // RANGE COMPLETE → close
    if (
      prevStart &&
      sel.startDate &&
      sel.endDate &&
      sel.startDate.getTime() !== sel.endDate.getTime()
    ) {
      setShowCalendar(false);
      setActiveSection(null);
    }

    prevStartRef.current = sel.startDate;
  };

  const handleMonthSelect = (month) => {
  setSelectedMonth(month);
  setWhenLabel(month); // 👈 THIS IS THE KEY
  setShowCalendar(false);
  setActiveSection(null);
};


const whenLabel = (() => {
  // 1️⃣ Dates have highest priority
  if (range[0].startDate && range[0].endDate) {
    return `${format(range[0].startDate, "dd MMM")} – ${format(
      range[0].endDate,
      "dd MMM"
    )}`;
  }

  // 2️⃣ Month selection
  if (selectedMonth) {
    return selectedMonth.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
  }

   // ✅ Flexible (Airbnb exact)
  if (flexibleType && flexibleMonth) {
    const monthName = flexibleMonth.toLocaleString("default", {
      month: "long",
    });

    if (flexibleType === "weekend") return `Any weekend in ${monthName}`;
    if (flexibleType === "week") return `Any week in ${monthName}`;
    if (flexibleType === "month") return `Any month in ${monthName}`;
  }

  // 4️⃣ Default
  return "Add dates";
})();

const clearWhen = (e) => {
  e?.preventDefault();
  e?.stopPropagation(); // 🔥 REQUIRED

  setRange([{ startDate: null, endDate: null, key: "selection" }]);
  setSelectedMonth(null);
  setFlexibleType(null);
  setFlexibleMonth(null);
  setFlexDays(null);

  setActiveWhenTab("dates"); // Airbnb resets to Dates
  setShowCalendar(false);
  setActiveSection(null);
};


const totalGuests = guests.adults + guests.children;

const guestLabel =
  totalGuests > 0
    ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
    : "Add guests";

const updateGuest = (type, value) => {
  setGuests((prev) => {
    const next = { ...prev, [type]: Math.max(0, prev[type] + value) };

    // Airbnb rule: if any guest selected → adults must be at least 1
    if (
      (next.children > 0 || next.infants > 0 || next.pets > 0) &&
      next.adults === 0
    ) {
      next.adults = 1;
    }

    return next;
  });
};

const clearGuests = (e) => {
  e.stopPropagation();
  setGuests({ adults: 0, children: 0, infants: 0, pets: 0 });
  setShowGuests(false);
};





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
            {/* <div className="px-6 py-3 border-r flex-1">
              <p className="text-xs font-semibold">When</p>
              <div className="flex gap-2 text-sm text-gray-600">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="outline-none"
                />
                <span>→</span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="outline-none"
                />
              </div>
            </div> */}

            {/* WHEN */}
       {/* <div
          ref={calendarRef}
          className="relative px-6 py-3 border-r flex-1 cursor-pointer"
          onClick={() => setShowCalendar(true)}
        >
          <p className="text-xs font-semibold">When</p> */}
          {/* <p className="text-sm text-gray-600">Add Dates</p> */}
          {/* <p className={`text-sm ${
            showCalendar ? "text-black font-medium" : "text-gray-400"
          }`}
        >
          Add dates
        </p> */}

          {/* {showCalendar && (
            <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-3xl z-50 p-6">
              <DateRange
                ranges={range}
                onChange={(item) => setRange([item.selection])}
                minDate={new Date()}
                rangeColors={["#F43F5E"]}
                months={2}
                direction="horizontal"
                showDateDisplay={false}
              />
            </div>
          )} */}


            {/* WHEN */}
          {/* <div
            onClick={() => {
              setActiveSection("when");
              setShowCalendar(true);
            }}
            className={`px-6 py-3 flex-1 cursor-pointer transition-all duration-300 rounded-full
              ${
                activeSection === "when"
                  ? "bg-white shadow-md"
                  : "hover:bg-gray-100"
              }
            `}
          >
            <p className="text-xs font-semibold">When</p>

            {dates[0].startDate && dates[0].endDate ? (
            <div className="flex items-center gap-2">
              <p className="text-sm">
                {format(dates[0].startDate, "dd MMM")} –{" "}
                {format(dates[0].endDate, "dd MMM")}
              </p>

              <span
                onClick={clearDates}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </span>
            </div>
          ) : (

                    <p className="text-sm text-gray-500">Add dates</p>
          )} */}

          {/* Calendar */}
            {/* {openWhen && (
              <div className="absolute top-16 left-0 z-50 animate-fade-in">
                <DateRange
                  ranges={dates}
                  onChange={handleDateSelect}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#FF385C"]}
                />
              </div>
            )} */}
          {/* </div> */}
          {/* </div> */}

          {/* {showCalendar && (
              <div
                ref={calendarRef}
                className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2
                bg-white rounded-3xl shadow-2xl border z-50 p-6
                animate-[fadeIn_0.25s_ease-out]"
              > */}
                {/* Tabs like Airbnb */}
                {/* <div className="flex justify-center mb-6">
                  <div className="flex bg-gray-100 rounded-full p-1">
                    <button className="px-6 py-2 rounded-full bg-white shadow text-sm font-medium">
                      Dates
                    </button>
                    <button className="px-6 py-2 text-sm text-gray-500">Months</button>
                    <button className="px-6 py-2 text-sm text-gray-500">Flexible</button>
                  </div>
                </div>

                <DateRange
                  ranges={range}
                  onChange={(item) => {
                    const sel = item.selection;
                    setRange([sel]); */}

                    {/* // Airbnb logic: close ONLY after both dates */}
                    {/* if (sel.startDate && sel.endDate) {
                      setShowCalendar(false);
                      setActiveSection(null);
                    }
                  }}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  direction="horizontal"
                  showDateDisplay={false}
                  minDate={new Date()}
                />
              </div>
            )} */}



    {/* ======================================================================================== */}

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

                    <div className="flex items-center gap-2">
                      <p className={`text-sm ${whenLabel === "Add dates" ? "text-gray-500" : ""}`}>
                        {whenLabel}
                      </p>

                      {whenLabel !== "Add dates" && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            setRange([{ startDate: null, endDate: null, key: "selection" }]);
                            setSelectedMonth(null);
                            setFlexibleDays(null);
                            setShowCalendar(false);
                            setActiveSection(null);
                          }}
                          className="text-gray-400 hover:text-black text-lg cursor-pointer"
                        >
                          ✕
                        </span>
                      )}
                    </div>






                {/* TEXT + CLEAR */}
                {/* {range[0].startDate && range[0].endDate ? (
                  <div className="flex items-center gap-2">
                    <p className="text-sm">
                      {format(range[0].startDate, "dd MMM")} –{" "}
                      {format(range[0].endDate, "dd MMM")}
                    </p>  */}

                    {/* ❌ CLEAR */}
                    {/* <span
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
                ) 
                :
                (
                  <p className="text-sm text-gray-500">Add dates</p>
                )
              } */}

              {/* <p className="text-xs font-semibold">When</p>

                  <div className="flex items-center gap-2">
                    <p className={`text-sm ${whenLabel === "Add dates" ? "text-gray-500" : ""}`}>
                      {whenLabel}
                    </p>

                    {whenLabel !== "Add dates" && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setRange([
                            { startDate: null, endDate: null, key: "selection" },
                          ]);
                          setSelectedMonth(null);
                          setFlexibleDays(null);
                          setShowCalendar(false);
                          setActiveSection(null);
                        }}
                        className="text-gray-400 hover:text-black text-lg cursor-pointer"
                      >
                        ✕
                      </span>
                    )}
                  </div> */}


                {/* CALENDAR */}
                {showCalendar && activeSection === "when" && (
                  <div
                    ref={calendarRef}
                    onClick={(e) => 
                      // e.preventDefault();
                      e.stopPropagation()}
                    className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2
                    bg-white rounded-3xl shadow-2xl border z-50 p-6
                    animate-[fadeIn_0.25s_ease-out]"
                  >
                    {/* Airbnb tabs */}
                    {/* <div className="flex justify-center mb-6">
                      <div className="flex bg-gray-100 rounded-full p-1">
                        <button className="px-6 py-2 rounded-full bg-white shadow text-sm font-medium">
                          Dates
                        </button>
                        <button className="px-6 py-2 text-sm text-gray-500">
                          Months
                        </button>
                        <button className="px-6 py-2 text-sm text-gray-500">
                          Flexible
                        </button>
                      </div>
                    </div> */}

                       {/* Tabs */}
                        {/* <div className="flex justify-center mb-6">
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
                        </div> */}

                        <div className="flex justify-center mb-6">
                          <div className="flex bg-gray-100 rounded-full p-1">
                            {["dates", "months", "flexible"].map((tab) => (
                              // <button
                              //   key={tab}
                              //   onClick={() => {
                              //     setActiveWhenTab(tab);                                  

                              //     // ✅ Airbnb rule: clear other selections
                              //     if (tab === "Dates") {
                              //       setSelectedMonth(null);
                              //       setFlexibleDays(null);
                              //       setRange([{ startDate: null, endDate: null, key: "selection" }]);
                              //     }

                              //     if (tab === "Months") {
                              //       setRange([{ startDate: null, endDate: null, key: "selection" }]);
                              //       setFlexibleDays(null);
                              //       setWhenLabel("Add months");
                              //     }

                              //     if (tab === "Flexible") {
                              //       setRange([{ startDate: null, endDate: null, key: "selection" }]);
                              //       setSelectedMonth(null);
                              //       setWhenLabel("Flexible");
                              //     }
                              //   }}
                              //   className={`px-6 py-2 rounded-full text-sm font-medium transition
                              //     ${
                              //       activeWhenTab === tab
                              //         ? "bg-white shadow"
                              //         : "text-gray-500"
                              //     }`}
                              // >
                              //   {tab.charAt(0).toUpperCase() + tab.slice(1)}
                              // </button>

                               <button
                                key={tab}
                                onClick={() => {
                                  setActiveWhenTab(tab);

                                  // 🔥 AIRBNB RULE: switching tab clears previous selection
                                  setRange([{ startDate: null, endDate: null, key: "selection" }]);
                                  setSelectedMonth(null);
                                  setFlexibleDays(null);
                                  setWhenLabel("Add dates");
                                }}
                                className={`px-6 py-2 rounded-full text-sm font-medium
                                  ${activeWhenTab === tab ? "bg-white shadow" : "text-gray-500"}
                                `}
                              >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                              </button>
                            ))}
                          </div>
                        </div>


                        {/* DATES TAB */}
                       {activeWhenTab === "dates" && (
                        <>
                          {/* <DateRange
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
                          /> */}


                          <DateRange
                              ranges={range}
                              onChange={handleDateSelect}        
                              moveRangeOnFirstSelection={false}
                              months={2}
                              direction="horizontal"
                              showDateDisplay={false}
                              minDate={new Date()}
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
                        {/* {activeWhenTab === "months" && (
                          <div className="text-center py-20 text-gray-500">
                            🚧 Months picker coming next (Airbnb shows grid of months)
                          </div>
                        )} */}

                        {/* {activeWhenTab === "months" && (
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
                        )} */}


                        {activeWhenTab === "months" && (
                            <div className="grid grid-cols-3 gap-6 p-6">
                              {Array.from({ length: 12 }).map((_, i) => {
                                const month = new Date(new Date().getFullYear(), i);

                                return (
                                  <button
                                    key={i}
                                    onClick={() => {
                                      setSelectedMonth(month);

                                      // ✅ UPDATE "WHEN" FIELD (Airbnb behaviour)
                                      setWhenLabel(
                                        `${month.toLocaleString("default", { month: "long" })} ${month.getFullYear()}`
                                      );

                                      // ✅ CLOSE CALENDAR
                                      setShowCalendar(false);
                                      setActiveSection(null);
                                    }}
                                    className={`p-6 rounded-xl border text-center transition
                                      ${
                                        selectedMonth?.getMonth() === i
                                          ? "border-black bg-gray-50"
                                          : "border-gray-200 hover:border-black"
                                      }
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
                        {/* {activeWhenTab === "flexible" && (
                          <div className="text-center py-20 text-gray-500">
                            🚧 Flexible stay options (weekends / weeks / months)
                          </div>
                        )} */}
                        {/* {activeWhenTab === "flexible" && (
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
                      )} */}

                      {/* {activeWhenTab === "flexible" && (
                        <> */}
                          {/* Weekend / Week / Month */}
                          {/* <div className="flex justify-center gap-4 mb-6">
                            {[
                              { label: "Weekend", value: "weekend" },
                              { label: "Week", value: "week" },
                              { label: "Month", value: "month" },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                onClick={() => {
                                  setFlexibleType(opt.value);
                                  setRange([{ startDate: null, endDate: null, key: "selection" }]);
                                  setSelectedMonth(null);
                                }}
                                className={`px-6 py-3 rounded-full border
                                  ${
                                    flexibleType === opt.value
                                      ? "border-black bg-gray-50"
                                      : "border-gray-300 hover:border-black"
                                  }
                                `}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div> */}



                          {activeWhenTab === "flexible" && (
                                <>
                                  {/* Clear button (Airbnb-style) */}
                                  <div className="flex justify-end mb-4">
                                    <button
                                      onClick={(e) => clearWhen(e)}
                                      className="text-sm text-gray-500 hover:underline"
                                    >
                                      Clear
                                    </button>
                                  </div>

                                  {/* Weekend / Week / Month */}
                                  <div className="flex justify-center gap-4 mb-6">
                                    {[
                                      { label: "Weekend", value: "weekend" },
                                      { label: "Week", value: "week" },
                                      { label: "Month", value: "month" },
                                    ].map((opt) => (
                                      <button
                                        key={opt.value}
                                        onClick={() => {
                                          setFlexibleType(opt.value);

                                          // ✅ clear other modes
                                          setRange([{ startDate: null, endDate: null, key: "selection" }]);
                                          setSelectedMonth(null);

                                          // ❌ DO NOT close calendar here
                                          // Airbnb closes after month selection, not here
                                        }}
                                        className={`px-6 py-3 rounded-full border transition
                                          ${
                                            flexibleType === opt.value
                                              ? "border-black bg-gray-50"
                                              : "border-gray-300 hover:border-black"
                                          }
                                        `}
                                      >
                                        {opt.label}
                                      </button>
                                    ))}
                                  </div>
                                {/* </>
                              )} */}


                          {/* MONTH PICKER (this is what you were missing) */}
                          <div className="grid grid-cols-3 gap-4">
                            {Array.from({ length: 12 }).map((_, i) => {
                              const m = new Date(new Date().getFullYear(), i);

                              return (
                                <button
                                  key={i}
                                  onClick={() => {
                                    setFlexibleMonth(m);

                                    // Airbnb closes after month selection
                                    setTimeout(() => {
                                      setShowCalendar(false);
                                      setActiveSection(null);
                                    }, 0);
                                  }}
                                  className={`p-4 rounded-xl border
                                    ${
                                      flexibleMonth?.getMonth() === i
                                        ? "border-black bg-gray-50"
                                        : "border-gray-300 hover:border-black"
                                    }
                                  `}
                                >
                                  {m.toLocaleString("default", { month: "long" })}
                                </button>
                              );
                            })}
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



          {/* {showCalendar && (
              <div
                ref={calendarRef}
                className="absolute top-full mt-4 z-50 bg-white shadow-xl rounded-2xl"
              >
                <DateRange
                  ranges={[range]}
                  onChange={(item) => setRange(item.selection)}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  direction="horizontal"
                />
              </div>
            )} */}
        {/* </div> */}


            {/* WHO / SERVICE */}
            {/* <div className="px-6 py-3 flex-1">
              <p className="text-xs font-semibold">
                {activeTab === "services" ? "Type of service" : "Who"}
              </p>
              <p className="text-sm text-gray-400">{current.right}</p>
            </div> */}

            <div
                  onClick={() => {
                    setActiveSection("who");
                    setShowGuests(true);
                  }}
                  className={`px-6 py-3 flex-1 cursor-pointer rounded-full transition
                    ${
                      activeSection === "who"
                        ? "bg-white shadow-md"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  <p className="text-xs font-semibold">Who</p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">{guestLabel}</p>

                    {totalGuests > 0 && (
                      <span
                        onClick={clearGuests}
                        className="text-gray-400 hover:text-black text-lg cursor-pointer"
                      >
                        ✕
                      </span>
                    )}
                  </div>
                </div>



                {showGuests && activeSection === "who" && (
                  <div
                   ref={guestsRef}
                   onClick={(e) => e.stopPropagation()} // 🔥 IMPORTANT
                    className="absolute top-[calc(100%+16px)] right-0 bg-white
                    rounded-3xl shadow-2xl border z-50 p-6 w-[380px]"
                  >
                    {[
                      { label: "Adults", desc: "Ages 13+", key: "adults" },
                      { label: "Children", desc: "Ages 2–12", key: "children" },
                      { label: "Infants", desc: "Under 2", key: "infants" },
                      { label: "Pets", desc: "Bringing a service animal?", key: "pets" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex justify-between items-center py-4 border-b last:border-none"
                      >
                        <div>
                          <p className="font-medium">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => updateGuest(item.key, -1)}
                            disabled={guests[item.key] === 0}
                            className="w-8 h-8 rounded-full border text-lg disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="w-4 text-center">
                            {guests[item.key]}
                          </span>

                          <button
                            onClick={() => updateGuest(item.key, 1)}
                            className="w-8 h-8 rounded-full border text-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-between items-center mt-4">
                      <button
                        onClick={clearGuests}
                        className="text-sm underline text-gray-500"
                      >
                        Clear
                      </button>

                      <button
                        onClick={() => {
                          setShowGuests(false);
                          setActiveSection(null);
                        }}
                        className="text-sm font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}



            {/* SEARCH */}
            <button className="bg-rose-500 text-white px-6 py-3 rounded-full m-2">
              Search 🔍
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default SearchBar;


// ======================================================================================================

// import { useState, useEffect, useRef } from "react";
// import { DateRange } from "react-date-range";
// import { format, addDays } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// const SearchBar = ({ activeTab = "homes" }) => {
//   /* ---------------- STATE ---------------- */
//   const [searchText, setSearchText] = useState("");
//   const [showWhere, setShowWhere] = useState(false);
//   const [showCalendar, setShowCalendar] = useState(false);

//   const [range, setRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 1),
//       key: "selection",
//     },
//   ]);

//   const whereRef = useRef(null);
//   const calendarRef = useRef(null);

//   /* ---------------- OUTSIDE CLICK ---------------- */
//   useEffect(() => {
//     const handler = (e) => {
//       if (
//         whereRef.current &&
//         !whereRef.current.contains(e.target) &&
//         calendarRef.current &&
//         !calendarRef.current.contains(e.target)
//       ) {
//         setShowWhere(false);
//         setShowCalendar(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   /* ---------------- DATA ---------------- */
//   const cities = [
//     "Delhi",
//     "Mumbai",
//     "Bangalore",
//     "Chennai",
//     "Goa",
//     "Hyderabad",
//     "Pune",
//     "Jaipur",
//   ];

//   /* ---------------- FORMAT DATE ---------------- */
//   const formattedDate =
//     range[0].startDate && range[0].endDate
//       ? `${format(range[0].startDate, "dd/MM/yyyy")} → ${format(
//           range[0].endDate,
//           "dd/MM/yyyy"
//         )}`
//       : "Add dates";

//   return (
//     <header className="w-full py-6 flex justify-center">
//       <div className="relative flex items-center bg-white rounded-full shadow-lg border w-[760px]">

//         {/* WHERE */}
//         <div ref={whereRef} className="relative px-6 py-3 border-r w-[260px]">
//           <p className="text-xs font-semibold">Where</p>
//           <input
//             value={searchText}
//             onFocus={() => setShowWhere(true)}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Search destinations"
//             className="text-sm outline-none w-full"
//           />

//           {showWhere && (
//             <div className="absolute top-[calc(100%+12px)] left-0 w-[360px] bg-white shadow-xl rounded-2xl border p-4 z-50">
//               <button
//                 onClick={() => {
//                   navigator.geolocation.getCurrentPosition(() => {
//                     setSearchText("Nearby");
//                     setShowWhere(false);
//                   });
//                 }}
//                 className="flex gap-3 w-full px-4 py-3 rounded-xl hover:bg-gray-100"
//               >
//                 📍 Nearby
//               </button>

//               <hr className="my-3" />

//               <p className="text-xs text-gray-500 font-semibold mb-2">
//                 POPULAR DESTINATIONS
//               </p>

//               {cities.map((city) => (
//                 <button
//                   key={city}
//                   onClick={() => {
//                     setSearchText(city);
//                     setShowWhere(false);
//                   }}
//                   className="flex gap-3 w-full px-4 py-3 rounded-xl hover:bg-gray-100"
//                 >
//                   📍 {city}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* WHEN */}
//         <div
//           ref={calendarRef}
//           className="relative px-6 py-3 border-r flex-1 cursor-pointer"
//           onClick={() => setShowCalendar(true)}
//         >
//           <p className="text-xs font-semibold">When</p>
//           <p className="text-sm text-gray-600">{formattedDate}</p>

//           {showCalendar && (
//             <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 bg-white shadow-2xl rounded-3xl z-50 p-6">
//               <DateRange
//                 ranges={range}
//                 onChange={(item) => setRange([item.selection])}
//                 minDate={new Date()}
//                 rangeColors={["#F43F5E"]}
//                 months={2}
//                 direction="horizontal"
//                 showDateDisplay={false}
//               />
//             </div>
//           )}
//         </div>

//         {/* WHO */}
//         <div className="px-6 py-3 flex-1">
//           <p className="text-xs font-semibold">Who</p>
//           <p className="text-sm text-gray-400">Add guests</p>
//         </div>

//         {/* SEARCH */}
//         <button className="bg-rose-500 text-white px-6 py-3 rounded-full m-2">
//           🔍
//         </button>
//       </div>
//     </header>
//   );
// };

// export default SearchBar;











// ==========================================================================================================

// import React, { useState } from "react";
// import axiosInstance from "@/utils/axios";
// import { usePlaces } from "../../../hooks";

// const SearchBar = () => {
//   const Places = usePlaces();
//   const { setPlaces, setLoading } = Places;

//   const [searchText, setSearchText] = useState("");
//   const [searchTimeout, setSearchTimeout] = useState(null);

//   const handleSearch = async (text) => {
//     clearTimeout(searchTimeout);

//     if (text.trimStart() !== "") {
//       setLoading(true);
//       setSearchTimeout(
//         setTimeout(async () => {
//           const { data } = await axiosInstance.get(
//             `/places/search/${text.trimStart()}`
//           );
//           setPlaces(data);
//           setLoading(false);
//         }, 500)
//       );
//     }
//   };

//   return (
//     <div className="flex justify-center py-10">
//       <div className="flex w-full max-w-2xl items-center rounded-full border border-gray-300 bg-white shadow-md overflow-hidden">
//         {/* Where */}
//         <div className="flex-2 px-5 py-3 border-r cursor-pointer">
//           <p className="text-xs font-semibold text-gray-500">Where</p>
//           <input
//             type="text"
//             placeholder="Search destinations"
//             className="w-full border-none focus:outline-none text-sm md:text-base"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//               handleSearch(e.target.value);
//             }}
//           />
//         </div>

//         {/* When */}
//         <div className="flex-1 px-5 py-3 border-r cursor-pointer">
//           <p className="text-xs font-semibold text-gray-500">When</p>
//           <p className="text-sm text-gray-700">Add dates</p>
//         </div>

//         {/* Who */}
//         <div className="flex-1 px-5 py-3 cursor-pointer">
//           <p className="text-xs font-semibold text-gray-500">Who</p>
//           <p className="text-sm text-gray-700">Add guests</p>
//         </div>

//         {/* Search Button */}
//         <button
//           className="bg-primary p-3 rounded-full mr-2 text-white hover:bg-pink-700 flex items-center justify-center"
//           onClick={() => handleSearch(searchText)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
