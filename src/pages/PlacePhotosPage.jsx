import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "@/utils/axios";

const PlacePhotosPage = () => {

  const { id } = useParams();
  const [place,setPlace] = useState(null);

  useEffect(()=>{

    const getPlace = async () => {

      const { data } = await axiosInstance.get(`/api/places/${id}`);
      setPlace(data.place);

    };

    getPlace();

  },[id]);


  if(!place) return null;


  return (

    <div className="p-8">

      <h1 className="text-3xl font-semibold mb-8">
        {place.title}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {place.photos.map((photo,index)=>(
          
          <img
            key={index}
            src={photo}
            className="rounded-xl w-full object-cover"
          />

        ))}

      </div>

    </div>

  );

};

export default PlacePhotosPage;