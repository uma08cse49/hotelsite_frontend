// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// import axiosInstance from '@/utils/axios';

// import AccountNav from '@/components/ui/AccountNav';
// import InfoCard from '@/components/ui/InfoCard';
// import Spinner from '@/components/ui/Spinner';
// import { useQuery } from "@tanstack/react-query"; 




// // const fetchPlaces = async () => {
// // try {
// //   const { data } = await axiosInstance.get("/api/places/user-places");

// //   console.log("UPDATED DATA:", data.places);

// //   setPlaces(data.places);
// // } catch (error) {
// //   console.log(error);
// // }
// // };

// const fetchPlaces = async () => {
//   const { data } = await axiosInstance.get("/api/places/user-places");

//   return data.places || [];
// };

// const PlacesPage = () => {
//   // const [places, setPlaces] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const location = useLocation();

//     const { data: places = [], isLoading } = useQuery({
//     queryKey: ["places"],
//     queryFn: fetchPlaces
//   });

// //   useEffect(() => {
// //   // const getPlaces = async () => {
// //   //   try {
// //   //     setLoading(true);

// //   //     const { data } = await axiosInstance.get("/api/places/user-places");

// //   //     console.log("API RESPONSE:", data);

// //   //     setPlaces(data.places);
// //   //     setLoading(false);
// //   //   } catch (error) {
// //   //     console.log(error);
// //   //   }
// //   // };

// //   // getPlaces();

// //  fetchPlaces();

// // }, [location.pathname]);


//   if (loading) {
//     return <Spinner />;
//   }

//   return (
//     <div>
//       <AccountNav />
//       <div className="text-center ">
//         <Link
//           className="inline-flex gap-1 rounded-full bg-primary py-2 px-6 text-white"
//           to={'/account/places/new'}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="h-6 w-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           Add new place
//         </Link>
//       </div>
//       <div className="mx-4 mt-4">
//         {/* {places.length > 0 &&
//           places.map((place) => <InfoCard place={place} key={place._id} />)} */}

//           {places.map(place => (
//             <InfoCard key={place._id} place={place} />
//           ))}
          
//       </div>
//     </div>
//   );
// };

// export default PlacesPage;


// ======================================================================================

import React from 'react';
import { Link } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import AccountNav from '@/components/ui/AccountNav';
import InfoCard from '@/components/ui/InfoCard';
import Spinner from '@/components/ui/Spinner';
import { useQuery } from "@tanstack/react-query";

const fetchPlaces = async () => {
  const { data } = await axiosInstance.get("/api/places/user-places");
  return data.places || [];
};

const PlacesPage = () => {

  const { data: places = [], isLoading } = useQuery({
    queryKey: ["places"],
    queryFn: fetchPlaces
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <AccountNav />

      <div className="text-center">
        <Link
          className="inline-flex gap-1 rounded-full bg-primary py-2 px-6 text-white"
          to={'/account/places/new'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>

      <div className="mx-4 mt-4">
        {/* {places.map(place => (
          <InfoCard key={place._id} place={place} />
        ))} */}
        {places.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">No places added yet</p>
          ) : (
            places.map(place => (
              <InfoCard key={place._id} place={place} />
            ))
          )}
      </div>

    </div>
  );
};

export default PlacesPage;