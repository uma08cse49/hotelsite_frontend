import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import PerksWidget from '@/components/ui/PerksWidget';

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return '';
    }

    setLoading(true);

    const getPlace = async () => {
      // const { data } = await axiosInstance.get(`/places/${id}`);
      const { data } = await axiosInstance.get(`/api/places/${id}`)

        console.log("FULL API RESPONSE:", data);       // 👈 ADD
        console.log("PLACE OBJECT:", data.place);      // 👈 ADD
        // console.log("PHOTOS ARRAY:", data.place.photos); // 👈 ADD
      // setPlace(data.place);
      setPlace(data);
      setLoading(false);
    };
    
    getPlace();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!place) {
    return <div>This listing has been removed.</div>;
  }

  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
      <h1 className="text-3xl">{place.title}</h1>

      <AddressLink placeAddress={place.address} />
      <PlaceGallery place={place} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4 ">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          Max number of guests: {place.maxGuests}
          <PerksWidget perks={place?.perks} />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
};

export default PlacePage;



// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axiosInstance from "../utils/axios";
// import PlaceGallery from '@/components/ui/PlaceGallery';

// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);

//   useEffect(() => {
//     axiosInstance.get(`/places/${id}`).then((response) => {
//       setPlace(response.data);
//     });
//   }, [id]);

//   if (!place) return <div>Loading...</div>;

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold">{place.title}</h1>
//       <p className="text-gray-500">{place.address}</p>

//       <PlaceGallery place={place} />

//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Description</h2>
//         <p>{place.description}</p>
//       </div>

//       <div className="mt-6 text-2xl font-bold">
//         ₹ {place.price} / night
//       </div>
//     </div>
//   );
// };

// export default PlacePage;
