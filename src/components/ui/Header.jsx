// import React, { useEffect, useRef } from 'react';
// import { useContext, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import { useAuth } from '../../../hooks';
// import SearchBar from './SearchBar';
// import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

// export const Header = () => {
//   const auth = useAuth();
//   const location = useLocation();

//   const [showSearchBar, setShowSearchBar] = useState(true);
//   const [hasShadow, setHasShadow] = useState(false);
//   const { user } = auth;

//   const [isCompact, setIsCompact] = useState(false);
//   const [activeTab, setActiveTab] = useState("homes");

//   const [showLang, setShowLang] = useState(false);
//   const [langTab, setLangTab] = useState("language"); // "language" | "currency"

//   const langRef = useRef(null);


//   useEffect(() => {
//   const handleClickOutside = (e) => {
//     if (langRef.current && !langRef.current.contains(e.target)) {
//       setShowLang(false);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
//   return () => document.removeEventListener("mousedown", handleClickOutside);
// }, []);




//   // const handleScroll = () => {
//   //   const shouldHaveShadow = window.scrollY > 0;
//   //   setHasShadow(shouldHaveShadow);
//   // };

//   const handleScroll = () => {
//   const scrollY = window.scrollY;
//   setHasShadow(scrollY > 0);
//   setIsCompact(scrollY > 80); // 👈 trigger animation
// };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     // hide searchbar based on url
//     if (location.pathname === '/') {
//       setShowSearchBar(true);
//     } else {
//       setShowSearchBar(false);
//     }
//     // clean up the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [location]);


// return (
//   <header className="sticky top-0 bg-white z-50 border-b transition-all duration-300">

//     <div className="mx-auto max-w-screen-xl px-6">
      

//       {/* TOP ROW */}
//       {/* <div className="relative flex h-20 items-center justify-between"> */}
//        {/* <div className="grid grid-cols-3 items-center h-20"> */}
//       {/* <div className="hidden md:grid grid-cols-3 items-center h-20 px-6"> */}
//       <div className="hidden md:grid grid-cols-3 items-center h-20">

//         {/* LEFT - LOGO */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             className="h-8 w-8 md:h-10 md:w-10"
//             src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
//             alt=""
//           />
//           <span className="hidden text-2xl font-bold text-red-500 md:block">
//             StayFactory
//           </span>
//         </Link>


//         <div
//             className={` hidden md:flex gap-10 transition-all duration-300 ease-out
//             ${isCompact ? 'opacity-0 -translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
//           `}
//           >
//             {/* HOMES */}
//             <button
//               onClick={() => setActiveTab("homes")}
//               className={`flex flex-col items-center font-medium transition-colors
//                 ${activeTab === "homes" ? "text-black" : "text-gray-500 hover:text-black"}
//               `}
//             >
//               🏠
//               <span>Homes</span>
//               {activeTab === "homes" && (
//                 <span className="mt-2 h-[2px] w-full bg-black"></span>
//               )}
//             </button>

//             {/* EXPERIENCES */}
//             <button
//               onClick={() => setActiveTab("experiences")}
//               className={`flex flex-col items-center font-medium transition-colors
//                 ${activeTab === "experiences" ? "text-black" : "text-gray-500 hover:text-black"}
//               `}
//             >
//               🎈
//               <span>Experiences</span>
//               {activeTab === "experiences" && (
//                 <span className="mt-2 h-[2px] w-full bg-black"></span>
//               )}
//             </button>

//             {/* SERVICES */}
//             <button
//               onClick={() => setActiveTab("services")}
//               className={`flex flex-col items-center font-medium transition-colors
//                 ${activeTab === "services" ? "text-black" : "text-gray-500 hover:text-black"}
//               `}
//             >
//               🛎
//               <span>Services</span>
//               {activeTab === "services" && (
//                 <span className="mt-2 h-[2px] w-full bg-black"></span>
//               )}
//             </button>


//           </div>
          
//           <div className="flex justify-end items-center gap-3 relative">
//             {/* Become a host */}
//             <button className="text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100">
//               Become a host
//             </button>

//             {/* Language / Currency */}
//             <button
//               onClick={() => setShowLang(true)}
//               className="p-2 rounded-full hover:bg-gray-100"
//             >
//               🌐
//             </button>

//             {/* LANGUAGE MODAL */}
//             {showLang && (
//               <div
//                 ref={langRef}
//                 className="absolute right-0 top-[calc(100%+12px)]
//                 bg-white rounded-2xl shadow-2xl border z-50 w-[420px]"
//               >

//               <div className="flex border-b px-6 pt-4">
//                         <button
//                           onClick={() => setLangTab("language")}
//                           className={`pb-3 mr-6 font-medium transition
//                             ${langTab === "language"
//                               ? "border-b-2 border-black text-black"
//                               : "text-gray-500 hover:text-black"}
//                           `}
//                         >
//                           Language and region
//                         </button>

//                         <button
//                           onClick={() => setLangTab("currency")}
//                           className={`pb-3 font-medium transition
//                             ${langTab === "currency"
//                               ? "border-b-2 border-black text-black"
//                               : "text-gray-500 hover:text-black"}
//                           `}
//                         >
//                           Currency
//                         </button>
//                 </div>
//                   <div>
//                     {langTab === "language" && (
//                       <div className="grid grid-cols-2 gap-4 p-6 max-h-[320px] overflow-y-auto">
//                         {[
//                           "English (India)",
//                           "English (US)",
//                           "हिन्दी",
//                           "தமிழ்",
//                           "తెలుగు",
//                           "বাংলা",
//                         ].map((lang) => (
//                           <button
//                             key={lang}
//                             onClick={() => setShowLang(false)}
//                             className="p-3 text-left rounded-xl hover:bg-gray-100"
//                           >
//                             <p className="font-medium">{lang}</p>
//                             <p className="text-xs text-gray-500">India</p>
//                           </button>
//                         ))}
//                       </div>
//                     )}

//                     {langTab === "currency" && (
//                       <div className="grid grid-cols-2 gap-4 p-6 max-h-[320px] overflow-y-auto">
//                         {[
//                           { code: "INR", label: "Indian Rupee" },
//                           { code: "USD", label: "US Dollar" },
//                           { code: "EUR", label: "Euro" },
//                           { code: "GBP", label: "British Pound" },
//                           { code: "AUD", label: "Australian Dollar" },
//                           { code: "CAD", label: "Canadian Dollar" },
//                         ].map((c) => (
//                           <button
//                             key={c.code}
//                             onClick={() => {
//                               console.log("Currency selected:", c.code);
//                               setShowLang(false);
//                             }}
//                             className="p-3 text-left rounded-xl hover:bg-gray-100"
//                           >
//                             <p className="font-medium">{c.label}</p>
//                             <p className="text-xs text-gray-500">{c.code}</p>
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>




//                 {/* PROFILE MENU — MUST BE HERE */}
//                 <Link
//                   to={user ? "/account" : "/login"}
//                   className="flex items-center gap-2 border rounded-full px-3 py-2 cursor-pointer hover:shadow"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="h-6 w-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                     />
//                   </svg>

//                   <div className="h-[35px] w-[35px] overflow-hidden rounded-full bg-gray-400">
//                     {user && (
//                       <Avatar>
//                         <AvatarImage src={user.picture} className="h-full w-full" />
//                       </Avatar>
//                     )}
//                   </div>
//                 </Link>
//           </div>
//         </div>
    

//         {showSearchBar && (
//           <div
//             className={`flex justify-center transition-all duration-300 ease-out
//             ${isCompact ? 'pb-2 scale-95' : 'pb-6 scale-100'}
//           `}
//           >
//             {/* <SearchBar compact={isCompact} /> */}
//             <SearchBar compact={isCompact} activeTab={activeTab} />

//         </div>
//         )}
//     </div>
//     </header>
//   );
//   };

// ===========================================================================================================


import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import SearchBar from "./SearchBar";
import { useAuth } from "../../../hooks";

export const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  const [showSearchBar, setShowSearchBar] = useState(true);
  const [isCompact, setIsCompact] = useState(false);
  const [activeTab, setActiveTab] = useState("homes");

  const [showLang, setShowLang] = useState(false);
  const [langTab, setLangTab] = useState("language");

  const langRef = useRef(null);
  const navigate = useNavigate();


  /* ---------------- SCROLL EFFECT ---------------- */
  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- SHOW SEARCH ONLY ON HOME ---------------- */
  useEffect(() => {
    setShowSearchBar(location.pathname === "/");
  }, [location.pathname]);

  /* ---------------- CLOSE LANGUAGE ON OUTSIDE CLICK ---------------- */
  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setShowLang(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-screen-xl px-6">

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-3 items-center h-20">

          {/* LEFT – LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png"
              className="h-8 w-8"
              alt=""
            />
            <span className="hidden md:block text-2xl font-bold text-red-500">
              StayFactory
            </span>
          </Link>

          {/* CENTER – TABS */}
          <div
            className={`hidden md:flex justify-center gap-10 transition-all duration-300
              ${isCompact ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"}
            `}
          >
            {["homes", "experiences", "services"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center font-medium
                  ${activeTab === tab ? "text-black" : "text-gray-500 hover:text-black"}
                `}
              >
                <span className="capitalize">{tab}</span>
                {activeTab === tab && (
                  <span className="mt-2 h-[2px] w-full bg-black" />
                )}
              </button>
            ))}
          </div>

          {/* RIGHT – HOST + LANGUAGE + PROFILE */}
          <div className="flex justify-end items-center gap-3 relative">

            {/* Become a host */}
            {/* <Link to="/login">
              <button className="text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100">
                Become a host
              </button>
            </Link> */}

            <button
                onClick={() => {
                  if (user) {
                    navigate("/host");
                  } else {
                    navigate("/login");
                  }
                }}
                className="text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100"
              >
                Become a host
            </button>


            {/* Language */}
            <button
              onClick={() => setShowLang((v) => !v)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              🌐
            </button>

            {/* LANGUAGE / CURRENCY MODAL */}
            {showLang && (
              <div
                ref={langRef}
                className="absolute right-0 top-[calc(100%+12px)]
                w-[420px] bg-white border rounded-2xl shadow-2xl z-50"
              >
                {/* Tabs */}
                <div className="flex border-b px-6 pt-4">
                  <button
                    onClick={() => setLangTab("language")}
                    className={`pb-3 mr-6 font-medium
                      ${langTab === "language"
                        ? "border-b-2 border-black"
                        : "text-gray-500"}
                    `}
                  >
                    Language & region
                  </button>
                  <button
                    onClick={() => setLangTab("currency")}
                    className={`pb-3 font-medium
                      ${langTab === "currency"
                        ? "border-b-2 border-black"
                        : "text-gray-500"}
                    `}
                  >
                    Currency
                  </button>
                </div>

                {/* Content */}
                {langTab === "language" && (
                  <div className="grid grid-cols-2 gap-4 p-6 max-h-[300px] overflow-y-auto">
                    {["English (India)", "English (US)", "हिन्दी", "தமிழ்"].map((l) => (
                      <button
                        key={l}
                        onClick={() => setShowLang(false)}
                        className="p-3 text-left rounded-xl hover:bg-gray-100"
                      >
                        <p className="font-medium">{l}</p>
                        <p className="text-xs text-gray-500">India</p>
                      </button>
                    ))}
                  </div>
                )}

                {langTab === "currency" && (
                  <div className="grid grid-cols-2 gap-4 p-6">
                    {["INR", "USD", "EUR", "GBP"].map((c) => (
                      <button
                        key={c}
                        onClick={() => setShowLang(false)}
                        className="p-3 text-left rounded-xl hover:bg-gray-100"
                      >
                        <p className="font-medium">{c}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* PROFILE */}
            <Link
              to={user ? "/account" : "/login"}
              className="flex items-center gap-2 border rounded-full px-3 py-2 hover:shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <div className="h-[35px] w-[35px] rounded-full overflow-hidden bg-gray-400">
                {user && (
                  <Avatar>
                    <AvatarImage src={user.picture} className="h-full w-full" />
                  </Avatar>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* ================= SEARCH BAR ================= */}
        {showSearchBar && (
          <div
            className={`flex justify-center transition-all duration-300
              ${isCompact ? "pb-2 scale-95" : "pb-6 scale-100"}
            `}
          >
            <SearchBar compact={isCompact} activeTab={activeTab} />
          </div>
        )}

      </div>
    </header>
  );
};
