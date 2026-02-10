// without API

// import { useState } from "react";

// const DATA = {
//   Popular: [
//     { title: "Kyoto", type: "Villa rentals" },
//     { title: "Charleston", type: "Monthly Rentals" },
//     { title: "Amsterdam", type: "Villa rentals" },
//     { title: "Detroit", type: "Apartment rentals" },
//     { title: "Albuquerque", type: "Flat rentals" },
//     { title: "San Antonio", type: "House rentals" },
//     { title: "Honolulu", type: "Flat rentals" },
//     { title: "Barcelona", type: "House rentals" },
//     { title: "Pittsburgh", type: "Apartment rentals" },
//     { title: "Dubai", type: "Apartment rentals" },
//     { title: "Wilmington", type: "Flat rentals" },
//     { title: "Key West", type: "Monthly Rentals" },
//     { title: "Athens", type: "Monthly Rentals" },
//     { title: "Oahu", type: "Villa rentals" },
//     { title: "West Palm Beach", type: "Cottage rentals" },
//     { title: "Tokyo", type: "Villa rentals" },
//     { title: "London", type: "House rentals" }
//   ],
// };

// const tabs = [
//   "Popular",
//   "Arts & culture",
//   "Beach",
//   "Mountains",
//   "Outdoors",
//   "Things to do",
// ];

// export default function InspirationSection() {
//   const [activeTab, setActiveTab] = useState("Popular");
//   const [showAll, setShowAll] = useState(false);

//   const visibleItems = showAll
//     ? DATA[activeTab]
//     : DATA[activeTab].slice(0, 15);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <h2 className="text-2xl font-semibold mb-6">
//         Inspiration for future getaways
//       </h2>

//       {/* Tabs */}
//       <div className="flex gap-6 text-sm font-medium border-b mb-8 overflow-x-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setShowAll(false);
//             }}
//             className={`pb-3 whitespace-nowrap ${
//               activeTab === tab
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
//         {visibleItems.map((item, i) => (
//           <div key={i}>
//             <p className="font-medium">{item.title}</p>
//             <p className="text-sm text-gray-500">{item.type}</p>
//           </div>
//         ))}

//         {!showAll && (
//           <button
//             onClick={() => setShowAll(true)}
//             className="text-sm font-medium flex items-center gap-1"
//           >
//             Show more <span>⌄</span>
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }

// ===================================================================================================

// import { useState } from "react";
import { useState, useEffect } from "react";


const TABS = [
  "Popular",
  "Arts & culture",
  "Beach",
  "Mountains",
  "Outdoors",
  "Things to do",
];

const DATA = {
  Popular: [
    { city: "Kyoto", type: "Villa rentals" },
    { city: "Charleston", type: "Monthly Rentals" },
    { city: "Amsterdam", type: "Villa rentals" },
    { city: "Detroit", type: "Apartment rentals" },
    { city: "Albuquerque", type: "Flat rentals" },
    { city: "San Antonio", type: "House rentals" },
    { city: "Honolulu", type: "Flat rentals" },
    { city: "Barcelona", type: "House rentals" },
    { city: "Pittsburgh", type: "Apartment rentals" },
    { city: "Dubai", type: "Apartment rentals" },
    { city: "Wilmington", type: "Flat rentals" },
    { city: "Key West", type: "Monthly Rentals" },
    { city: "Athens", type: "Monthly Rentals" },
    { city: "Oahu", type: "Villa rentals" },
    { city: "West Palm Beach", type: "Cottage rentals" },
    { city: "Dubai", type: "Apartment rentals" },
    { city: "Wilmington", type: "Flat rentals" },
    { city: "Key West", type: "Monthly Rentals" },
    { city: "Athens", type: "Monthly Rentals" },
    { city: "Oahu", type: "Villa rentals" },
    { city: "West Palm Beach", type: "Cottage rentals" },
  ],
  "Arts & culture":[],
  Beach: [],
  Mountains: [],
  Outdoors: [],
  "Things to do" :[],
};

export default function InspirationSection() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [showAll, setShowAll] = useState(false);
  const currentData = DATA[activeTab] || [];

    useEffect(() => {
    setShowAll(false);
    }, [activeTab]);


  const visibleItems = showAll
  ? DATA[activeTab]
  : DATA[activeTab].slice(0, 11); // Airbnb shows limited first




  return (
//     <section className="bg-gray-50 py-14">
//       {/* <div className="max-w-7xl mx-auto px-6"> */}
//       <div class="flex w-full max-w-screen-xl flex-col items- px-6">
//         {/* Heading */}
//         <h2 className="text-2xl font-semibold mb-6 text-left">
//           Inspiration for future getaways
//         </h2>

//         {/* Tabs */}
//         <div className="flex gap-8 border-b border-gray-200 mb-10 overflow-x-auto">
//           {TABS.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`relative pb-4 text-sm whitespace-nowrap transition-colors
//                 ${
//                   activeTab === tab
//                     ? "text-black font-medium"
//                     : "text-gray-500 hover:text-black"
//                 }
//               `}
//             >
//               {tab}

//               {/* Underline */}
//               {activeTab === tab && (
//                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black" />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Cities Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
//           {DATA[activeTab]
//             ?.slice(0, showAll ? DATA[activeTab].length : 11)
//             .map((item, i) => (
//             <a
//               key={i}
//               href={`/search?city=${item.city}`}
//               className="group"
//             >
//               <p className="text-sm font-medium group-hover:underline">
//                 {item.city}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {item.type}
//               </p>
//             </a>
//           ))}

//           {/* Show more */}
//           {/* <button className="text-sm font-medium text-left hover:underline">
//             Show more ⌄
//           </button> */}
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="text-sm font-medium text-left hover:underline"
//           >
//             {showAll ? "Show less ⌃" : "Show more ⌄"}
//           </button>

//         </div>
//       </div>
//     </section>
  

    <section className="bg-gray-50 py-14">
    <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col items-start">
      
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        Inspiration for future getaways
      </h2>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-10 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-4 text-sm whitespace-nowrap transition-colors
              ${
                activeTab === tab
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black"
              }
            `}
          >
            {tab}

            {activeTab === tab && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black" />
            )}
          </button>
        ))}
      </div>

    {/* Cities Grid */}
    {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 w-full">
      {DATA[activeTab]?.map((item, i) => (
        <a
          key={i}
          href={`/search?city=${item.city}`}
          className="group"
        >
          <p className="text-sm font-medium group-hover:underline">
            {item.city}
          </p>
          <p className="text-sm text-gray-500">
            {item.type}
          </p>
        </a>
      ))} */}

      {/* <button className="text-sm font-medium text-left hover:underline">
        Show more ⌄
      </button> */}
          {/* {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="text-sm font-medium flex items-center gap-1"
          >
            Show more <span>⌄</span>
          </button>
        )} */}


        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
          {visibleItems.map((item, i) => (
            <a
              key={i}
              href={`/search?city=${item.city}`}
              className="group"
            >
              <p className="text-sm font-medium group-hover:underline">
                {item.city}
              </p>
              <p className="text-sm text-gray-500">
                {item.type}
              </p>
            </a>
          ))} */}

          {/* SHOW MORE / LESS */}
          {/* {DATA[activeTab].length > 11 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-medium text-left hover:underline"
            >
              {showAll ? "Show less ▲" : "Show more ⌄"}
            </button>
          )}
        </div> */}


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
  {visibleItems.length === 0 ? (
    <p className="col-span-full text-sm text-gray-500">
      No destinations available
    </p>
  ) : (
    visibleItems.map((item, i) => (
      <a
        key={i}
        href={`/search?city=${item.city}`}
        className="group"
      >
        <p className="text-sm font-medium group-hover:underline">
          {item.city}
        </p>
        <p className="text-sm text-gray-500">
          {item.type}
        </p>
      </a>
    ))
  )}

  {/* SHOW MORE / LESS */}
  {currentData.length > 11 && (
    <button
      onClick={() => setShowAll(!showAll)}
      className="text-sm font-medium text-left hover:underline"
    >
      {showAll ? "Show less ▲" : "Show more ⌄"}
    </button>
  )}
</div>


    {/* </div> */}

  </div>
</section>


  );
}



// ============================================================================================================

// While using API

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "@/utils/axios";

// const tabs = [
//   "Popular",
//   "Arts & culture",
//   "Beach",
//   "Mountains",
//   "Outdoors",
//   "Things to do",
// ];

// export default function InspirationSection() {
//   const [data, setData] = useState({});
//   const [activeTab, setActiveTab] = useState("Popular");
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosInstance.get("/inspirations");
//         setData(res.data);
//       } catch (err) {
//         console.error("Failed to load inspirations", err);
//       }
//     };
//     fetchData();
//   }, []);

//   const items = data[activeTab] || [];
//   const visibleItems = showAll ? items : items.slice(0, 15);

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <h2 className="text-2xl font-semibold mb-6">
//         Inspiration for future getaways
//       </h2>

//       {/* Tabs */}
//       <div className="flex gap-6 text-sm font-medium border-b mb-8 overflow-x-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setShowAll(false);
//             }}
//             className={`pb-3 whitespace-nowrap transition-colors ${
//               activeTab === tab
//                 ? "border-b-2 border-black text-black"
//                 : "text-gray-500 hover:text-black"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-6">
//         {visibleItems.map((item, i) => (
//           <div
//             key={i}
//             onClick={() => navigate(`/search/${item.slug}`)}
//             className="cursor-pointer group transition-transform duration-200 hover:-translate-y-1"
//           >
//             <p className="font-medium group-hover:underline">
//               {item.city}
//             </p>
//             <p className="text-sm text-gray-500">
//               {item.type}
//             </p>
//           </div>
//         ))}

//         {!showAll && items.length > 15 && (
//           <button
//             onClick={() => setShowAll(true)}
//             className="text-sm font-medium flex items-center gap-1 hover:underline"
//           >
//             Show more <span>⌄</span>
//           </button>
//         )}
//       </div>
//     </section>
//   );
// }
