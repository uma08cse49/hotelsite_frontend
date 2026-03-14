import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';

import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import PerksWidget from '@/components/ui/PerksWidget';

import { FaStar } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    if (!id) return '';

    setLoading(true);

    const getPlace = async () => {
      // const { data } = await axiosInstance.get(`/places/${id}`);
      const { data } = await axiosInstance.get(`/api/places/${id}`)

        console.log("FULL API RESPONSE:", data);       // 👈 ADD
        console.log("PLACE OBJECT:", data.place);      // 👈 ADD
        // console.log("PHOTOS ARRAY:", data.place.photos); // 👈 ADD
      // setPlace(data.place);
      setPlace(data.place);
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

  // return (
  //   <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
  //     <h1 className="text-3xl">{place.title}</h1>

  //     <AddressLink placeAddress={place.address} />
  //     <PlaceGallery place={place} />

  //     <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
  //       <div className="">
  //         <div className="my-4 ">
  //           <h2 className="text-2xl font-semibold">Description</h2>
  //           {place.description}
  //         </div>
  //         Max number of guests: {place.maxGuests}
  //         <PerksWidget perks={place?.perks} />
  //       </div>
  //       <div>
  //         <BookingWidget place={place} />
  //       </div>
  //     </div>
  //     <div className="-mx-8 border-t bg-white px-8 py-8">
  //       <div>
  //         <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
  //       </div>
  //       <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
  //         {place.extraInfo}
  //       </div>
  //     </div>
  //   </div>
  // );



  return (
  <div className="max-w-7xl mx-auto px-6 pt-24">

    {/* TITLE */}
    <h1 className="text-3xl font-semibold mb-3">{place.title}</h1>


    <AddressLink placeAddress={place.address} />
    {/* IMAGE GALLERY */}
    <PlaceGallery place={place} />
    


    
    <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
      <div className="">
          <div className="my-4 ">
        <h2 className="text-2xl font-semibold">Description</h2>
        {place.description}
          </div>
          Max number of guests: {place.maxGuests}
          {/* <PerksWidget perks={place?.perks} /> */}
        </div>
        <div>
          {/* <BookingWidget place={place} /> */}
      </div>
    </div>


    {/* RATING + LOCATION */}
    <div className="flex items-center gap-4 mt-2 text-sm mb-6">
      <div className="flex items-center gap-1 font-medium">
        <FaStar className="text-black"/>
        4.93
      </div>

      <span className="underline cursor-pointer">46 reviews</span>

      <div className="flex items-center gap-1 text-gray-700">
        <FaMapMarkerAlt/>
        <span className="underline">{place.address}</span>
      </div>

    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mt-10">

      {/* LEFT SIDE */}
      <div>

        {/* HOST */}
        <div className="flex justify-between items-center border-b pb-6">

          <div>
            <h2 className="text-xl font-semibold">
              Hosted by {place.owner?.name || "Host"}
            </h2>

            <p className="text-gray-500 text-sm">
              {place.maxGuests} guests · Superhost · 2 years hosting
            </p>
          </div>

          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-semibold">
            {place.owner?.name?.charAt(0) || "H"}
          </div>

        </div>



        {/* HIGHLIGHTS */}
        <div className="py-6 border-b space-y-6">

          <div className="flex gap-4">
            <FaDoorOpen size={24}/>
            <div>
              <h3 className="font-semibold">Self check-in</h3>
              <p className="text-gray-500 text-sm">
                Check yourself in with the building staff.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MdOutlineHome size={24}/>
            <div>
              <h3 className="font-semibold">Extra spacious</h3>
              <p className="text-gray-500 text-sm">
                Guests love this home’s spaciousness.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <FaMapMarkerAlt size={24}/>
            <div>
              <h3 className="font-semibold">Great location</h3>
              <p className="text-gray-500 text-sm">
                Guests who stayed here loved the location.
              </p>
            </div>
          </div>

        </div>



        {/* DESCRIPTION */}
        <div className="py-6 border-b">
          <h2 className="text-2xl font-semibold">About this place</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            {place.description}
          </p>
        </div>



        {/* AMENITIES */}
        <div className="py-6 border-b">
          {/* <h2 className="text-2xl font-semibold mb-4">What this place offers</h2> */}
          <PerksWidget perks={place?.perks}/>
        </div>



        {/* EXTRA INFO */}
        <div className="py-6">
          <h2 className="text-2xl font-semibold mb-2">Extra Information</h2>
          <p className="text-gray-700">{place.extraInfo}</p>
        </div>

      </div>



      {/* RIGHT SIDE BOOKING CARD */}
      <div className="sticky top-28 h-fit">
        <BookingWidget place={place}/>
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
