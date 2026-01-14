// import { usePlaces } from '../../hooks';
// import Spinner from '@/components/ui/Spinner';
// import PlaceCard from '@/components/ui/PlaceCard';
// import { useContext } from 'react';
// import { PlaceContext } from '../providers/PlaceProvider';

// // const IndexPage = () => {
// //   const allPlaces = usePlaces();
// //   const { places, loading } = allPlaces;
  
//   function IndexPage() {
//   const { listings, loading } = useContext(PlaceContext);
//   // const allPlaces = usePlaces();
//   // const { places} = allPlaces;

//     // If still loading, show spinner
//   if (loading) return <Spinner />;

//   // Ensure listings is always an array
//   const places = Array.isArray(listings) ? listings : [];

//   if (loading) return <div>Loading listings...</div>;


  
//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="grid grid-cols-1 justify-items-center py-32 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10">
//       {places.length > 0 ? (
//         places.map((place) => <PlaceCard place={place} key={place._id} />)
//       ) : (
//         <div className="absolute left-1/2 right-1/2 top-40 flex  w-full -translate-x-1/2 transform flex-col p-10  md:w-1/2">
//           <h1 className="text-3xl font-semibold">Result not found!</h1>
//           <p className="text-lg font-semibold">
//             Sorry, we couldn&#39;t find the place you&#39;re looking for.
//           </p>
//           <button className="mt-4 w-32 rounded-full bg-primary p-2 text-white">
//             <a href="/" className="flex items-center justify-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 className="h-5 w-5"
//               >
//                 <line x1="19" y1="12" x2="5" y2="12"></line>
//                 <polyline points="12 19 5 12 12 5"></polyline>
//               </svg>
//               Go back
//             </a>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndexPage;


// import { useContext, useState, useEffect } from 'react';
// import { PlaceContext  } from '../providers/PlaceProvider';
// import Spinner from '@/components/ui/Spinner';
// import PlaceCard from '@/components/ui/PlaceCard';

// function IndexPage() {
//   const { listings, loading } = useContext(PlaceContext);

//   useEffect(() => {
//   // fetch(`${process.env.REACT_APP_API_URL}/api/places`)
//   fetch(`${import.meta.env.VITE_API_URL}/api/places`)
//     .then(res => res.json())
//     .then(data => setPlaces(data));
// }, []);

//   // Show spinner while loading
//   if (loading) return <Spinner />;

//   const places = Array.isArray(listings) ? listings : [];

//   return (
//     <div className="grid grid-cols-1 justify-items-center py-32 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10">
//       {places.length > 0 ? (
//         places.map((place) => <PlaceCard place={place} key={place._id} />)
//       ) : (
//         <div className="absolute left-1/2 right-1/2 top-40 flex w-full -translate-x-1/2 transform flex-col p-10 md:w-1/2">
//           <h1 className="text-3xl font-semibold">Result not found!</h1>
//           <p className="text-lg font-semibold">
//             Sorry, we couldn&#39;t find the place you&#39;re looking for.
//           </p>
//           <button className="mt-4 w-32 rounded-full bg-primary p-2 text-white">
//             <a href="/" className="flex items-center justify-center gap-1">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//               >
//                 <line x1="19" y1="12" x2="5" y2="12"></line>
//                 <polyline points="12 19 5 12 12 5"></polyline>
//               </svg>
//               Go back
//             </a>
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default IndexPage;



import { useContext } from "react";
import { PlaceContext } from "../providers/PlaceProvider";
import Spinner from "@/components/ui/Spinner";
import PlaceCard from "@/components/ui/PlaceCard";

function IndexPage() {
  const { listings, loading } = useContext(PlaceContext);

  if (loading) return <Spinner />;

  const places = Array.isArray(listings) ? listings : [];

  const defaultImage = "https://res.cloudinary.com/drgcw7tzn/image/upload/v1768310364/Airbnb/Places/wbdoog09idhaiynsxccq.jpg";

  return (
    <div className="grid grid-cols-1 justify-items-center py-32 px-4 md:grid-cols-2 md:gap-0 lg:grid-cols-3 lg:gap-2 xl:grid-cols-4 xl:gap-10">
      {places.length > 0 ? (
        places.map((place) => (
          // <PlaceCard place={place} key={place._id} />
          <PlaceCard place={{ ...place, image: defaultImage }} key={place._id} />
        ))
      ) : (
        <div className="absolute left-1/2 top-40 w-full -translate-x-1/2 p-10 md:w-1/2">
          <h1 className="text-3xl font-semibold">Result not found!</h1>
          <p className="text-lg font-semibold">
            Sorry, we couldn&apos;t find the place you&apos;re looking for.
          </p>
        </div>
      )}
    </div>
  );
}

export default IndexPage;
