// import React from 'react';
// import { Link } from 'react-router-dom';

// const PlaceCard = ({ place }) => {
//   const { _id: placeId, photos, address, title, price } = place;
//   return (
//     <Link to={`/place/${placeId}`} className="m-4 flex flex-col md:m-2 xl:m-0">
//       <div className="card ">
//         {photos?.[0] && (
//           <img
//             src={`${photos?.[0]}`}
//             className="h-4/5 w-full rounded-xl object-cover"
//           />
//         )}
//         <h2 className="truncate font-bold">{address}</h2>
//         <h3 className="truncate text-sm text-gray-500">{title}</h3>
//         <div className="mt-1">
//           <span className="font-semibold">₹{price} </span>
//           per night
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default PlaceCard;


import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Image from "./Image";


const defaultImage = "https://res.cloudinary.com/drgcw7tzn/image/upload/v1768310364/Airbnb/Places/wbdoog09idhaiynsxccq.jpg";

export default function PlaceCard({ place }) {
  return (
    // <Link to={`/place/${place._id}`} className="w-full max-w-[280px]">
    //   {/* IMAGE */}
    //   <div className="relative overflow-hidden rounded-2xl">
    //     <img
    //       src={place.photos?.[0]}
    //       alt={place.title}
    //       className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
    //     />

    //     {/* HEART ICON */}
    //     <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2">
    //       <Heart className="h-5 w-5 text-gray-700" />
    //     </button>

    //     {/* IMAGE DOTS */}
    //     <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
    //       {[1, 2, 3].map((_, i) => (
    //         <span
    //           key={i}
    //           className="h-1.5 w-1.5 rounded-full bg-white opacity-80"
    //         />
    //       ))}
    //     </div>
    //   </div>

    //   {/* TEXT */}
    //   <div className="mt-3 space-y-1">
    //     <div className="flex justify-between">
    //       <h3 className="font-semibold text-sm truncate">
    //         {place.title}
    //       </h3>
    //       <span className="text-sm">⭐ {place.rating || 4.8}</span>
    //     </div>

    //     <p className="text-sm text-gray-500 truncate">
    //       {place.address}
    //     </p>

    //     <p className="text-sm">
    //       <span className="font-semibold">₹{place.price}</span> night
    //     </p>
    //   </div>
    // </Link>

//   <Link to={`/place/${place._id}`} className="w-full">
//     <div className="w-full cursor-pointer">
      
//       {/* IMAGE FIRST */}
//       <div className="relative aspect-square overflow-hidden rounded-2xl">
//         <Image
//           src={place.photos?.[0] || defaultImage}
//           alt={place.title}
//           className="h-full w-full object-cover"
//         />


//         {/* Heart icon */}
//         <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
//           ❤️
//         </button>
//       </div>

//  {/* HEART ICON */}
//     {/* //     <button className="absolute right-3 top-3 rounded-full bg-white/80 p-2">
//     //       <Heart className="h-5 w-5 text-gray-700" />
//     //     </button>
//      */}
//       {/* TEXT BELOW */}
//       <div className="mt-2">
//         <h3 className="text-sm font-semibold">{place.title}</h3>
//         <p className="text-sm text-gray-500">{place.address}</p>

//         <p className="mt-1 text-sm">
//           <span className="font-semibold">₹{place.price}</span> night
//         </p>
//       </div>

//     </div>
//   </Link>



 <Link
      to={`/place/${place._id}`}
      className="w-[270px] flex-shrink-0 cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        
        {/* Guest favourite badge */}
        <div className="absolute left-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-medium shadow">
          Guest favourite
        </div>

        <Image
          src={place.photos?.[0] || defaultImage}
          alt={place.title}
          className="h-full w-full object-cover"
        />

        {/* Heart icon */}
        <button className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow">
          ❤️
        </button>
      </div>

      {/* TEXT */}
      <div className="mt-1 space-y-0.5">
        <h3 className="text-sm font-semibold leading-tight truncate">
          {place.title}
        </h3>

        <p className="text-sm text-gray-500 leading-tight truncate">
          {place.address}
        </p>

        <p className="text-sm">
          <span className="font-semibold">₹{place.price}</span> night
        </p>
      </div>
    </Link>

  );
}
