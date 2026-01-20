import React, { useState } from 'react';

import axiosInstance from '@/utils/axios';
import { usePlaces } from '../../../hooks';

// const SearchBar = () => {
const SearchBar = ({ compact }) => {

  const Places = usePlaces();
  const { setPlaces, setLoading } = Places;

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = async (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    if (searchText.trimStart() !== '') {
      setLoading(true);
      setSearchTimeout(
        setTimeout(async () => {
          const { data } = await axiosInstance.get(
            `/places/search/${searchText.trimStart()}`,
          );
          setPlaces(data);
          setLoading(false);
        }, 500),
      );
    }
  };

  return (
    <>
      {/* <div className="flex w-4/6 overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg md:w-1/2"> */}
      <div
        className={`flex w-full items-center rounded-full border bg-white shadow-lg transition-all duration-300
        ${compact ? 'max-w-xl py-2' : 'max-w-4xl py-4'}
      `}
      >
        <div className="grow">
          <input
            type="search"
            placeholder="Where you want to go?"
            className="h-full w-full border-none py-2 px-4 text-sm  focus:outline-none md:text-lg"
            onChange={(e) => handleSearch(e)}
            value={searchText}
          />
        </div>
        <div className="bg-blue flex cursor-pointer  items-center bg-primary text-white">
          <button
            className="flex rounded-r-full bg-primary py-2 px-4 md:p-2"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="mt-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <span className="ml-1 hidden md:block">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;


// ====================================================================================================================



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
