import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '@/utils/axios';

import AccountNav from '@/components/ui/AccountNav';
import Perks from '@/components/ui/Perks';
import PhotosUploader from '@/components/ui/PhotosUploader';
import Spinner from '@/components/ui/Spinner';

import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";






const PlacesFormPage = () => {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const queryClient = useQueryClient();
  const [photoCategory, setPhotoCategory] = useState({});
  

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    address: '',
    description: '',
    perks: [],
    extraInfo: '',
    checkIn: '',
    checkOut: '',
    maxGuests: 10,
    price: 500,
  });

  const {
    title,
    address,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  } = formData;

  const isValidPlaceData = () => {
    if (title.trim() === '') {
      toast.error("Title can't be empty!");
      return false;
    } else if (address.trim() === '') {
      toast.error("Address can't be empty!");
      return false;
    } else if (addedPhotos.length < 5) {
      toast.error('Upload at least 5 photos!');
      return false;
    } else if (description.trim() === '') {
      toast.error("Description can't be empty!");
      return false;
    } else if (maxGuests < 1) {
      toast.error('At least one guests is required!');
      return false;
    } else if (maxGuests > 10) {
      toast.error("Max. guests can't be greater than 10");
      return false;
    }

    return true;
  };

  const handleFormData = (e) => {
    const { name, value, type } = e.target;
    // If the input is not a checkbox, update 'formData' directly
    if (type !== 'checkbox') {
      setFormData({ ...formData, [name]: value });
      return;
    }

    // If type is checkbox (perks)
    if (type === 'checkbox') {
      const currentPerks = [...perks];
      let updatedPerks = [];

      // Check if the perk is already in perks array
      if (currentPerks.includes(name)) {
        updatedPerks = currentPerks.filter((perk) => perk !== name);
      } else {
        updatedPerks = [...currentPerks, name];
      }
      setFormData({ ...formData, perks: updatedPerks });
    }
  };

// ==========================================================================

  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }
  //   setLoading(true);
  //   axiosInstance.get(`/places/${id}`).then((response) => {
  //     const { place } = response.data;
  //     // update the state of formData
  //     for (let key in formData) {
  //       if (place.hasOwnProperty(key)) {
  //         setFormData((prev) => ({
  //           ...prev,
  //           [key]: place[key],
  //         }));
  //       }
  //     }

  //     // update photos state separately
  //     setAddedPhotos([...place.photos]);

  //     setLoading(false);
  //   });
  // }, [id]);

// ==========================================================================

// useEffect(() => {
//   if (!id) return;

//   setLoading(true);

//   const token = localStorage.getItem("adminToken");

  

//   // axiosInstance.get(`/api/admin/place/${id}`,{
//    axiosInstance.get(`/places/${id}`,{
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then((response) => {

//       const { place } = response.data;

//       console.log("FULL RESPONSE:", response.data);

//       if (!place) {
//         console.log("Place not found");
//         setLoading(false);
//         return;
//       }

//       // setFormData((prev) => ({
//       //   ...prev,
//       //   ...place
//       // }));


//       console.log("PHOTOS:", place.photos);
//       setFormData(place);   // ⭐ important

//       setAddedPhotos(place.photos || []);

//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log("Error loading place:", err);
//       setLoading(false);
//     });

// }, []);




useEffect(() => {
  if (!id) return;

  const fetchPlace = async () => {
    const res = await axiosInstance.get(`/api/places/${id}`);

    const place = res.data.place;

    setFormData({
      title: place.title || "",
      address: place.address || "",
      description: place.description || "",
      perks: place.perks || [],
      extraInfo: place.extraInfo || "",
      checkIn: place.checkIn || "",
      checkOut: place.checkOut || "",
      maxGuests: place.maxGuests || 1
    });

    setAddedPhotos(place.photos || []);
  };

  fetchPlace();
}, [id]);



  const preInput = (header, description) => {
    return (
      <>
        <h2 className="mt-4 text-2xl">{header}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </>
    );
  };

  // const savePlace = async (e) => {
  //   e.preventDefault();

  //   const formDataIsValid = isValidPlaceData();
  //   // console.log(isValidPlaceData());
  //   // const placeData = { ...formData, addedPhotos };
  //   const placeData = { ...formData, photos: addedPhotos };

  //   console.log("Saving photos:", addedPhotos);
  //   console.log("placeData.....",placeData)

  //   console.log("Added Photos:", addedPhotos);
  //   console.log("Length:", addedPhotos.length);

  //   // Make API call only if formData is valid
  //   if (formDataIsValid) {
  //     if (id) {
  //       // update existing place
  //       const { data } = await axiosInstance.put('/places/update-place', {
  //         id,
  //         ...placeData, 
  //       });
  //     } else {
  //       // new place
  //       const { data } = await axiosInstance.post(
  //         '/places/add-places',
  //         placeData,
  //       );
  //     }
  //     setRedirect(true);
  //   }
  // };



 const savePlace = async (e) => {
  e.preventDefault();

  const formDataIsValid = isValidPlaceData();
  if (!formDataIsValid) return;

  const placeData = {
    title,
    address,
    description,
    perks,
    extraInfo,
    maxGuests,
    price,
    photos: addedPhotos,
  };

  console.log("Submitting placeData:", placeData);

  try {
    let response;

    if (id) {
      // UPDATE PLACE
      response = await axiosInstance.put(`/api/places/${id}`, placeData);

      console.log("Updated Place:", response.data);

      alert("Place updated successfully");

    } else {
      // CREATE PLACE
      response = await axiosInstance.post("/api/places", placeData);

      console.log("Created Place:", response.data);

      alert("Place created successfully");
    }

    // Refresh places list using React Query
    queryClient.invalidateQueries({ queryKey: ["places"] });

    // Redirect back to places page
    navigate("/account/places");

  } catch (error) {
    console.error("Error saving place:", error);
  }
};

// const savePlace = async (e) => {
//   e.preventDefault();

//   const placeData = {
//     title,
//     address,
//     description,
//     perks,
//     extraInfo,
//     maxGuests,
//     price,
//     photos: addedPhotos
//   };

//   if (id) {
//     await axiosInstance.put(`/api/places/update-place/${id}`, placeData);
//   } else {
//     await axiosInstance.post("/api/places", placeData);
//   }
// };



  if (redirect) {
    return <Navigate to={'/account/places'} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4">
      <AccountNav />
      <form onSubmit={savePlace}>
        {preInput(
          'Title',
          'title for your place. Should be short and catchy as in advertisement',
        )}
        {/* <input
          type="text"
          name="title"
          value={title}
          onChange={handleFormData}
          placeholder="title, for example: My lovely apt"
        /> */}

        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          placeholder="title, for example: My lovely apt"
        />

        {preInput('Address', 'address to this place')}
        {/* <input
          type="text"
          name="address"
          value={address}
          onChange={handleFormData}
          placeholder="address"
        /> */}

        <input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />

        {preInput('Photos', 'more = better')}

        <PhotosUploader
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
          id={id}
        />
        <select
          value={photoCategory[id] || ""}
          onChange={(e) =>
            setPhotoCategory((prev) => ({
              ...prev,
              [id]: e.target.value,
            }))
          }
          className="border rounded p-2 mb-2"
        >
          <option value="">Select category</option>
          <option value="Living room">Living room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bathroom">Bathroom</option>
        </select>

        

        {preInput('Description', 'discription of the place')}
        <textarea
          value={description}
          name="description"
          onChange={handleFormData}
        />

        {preInput('Perks', ' select all the perks of your place')}
        <Perks selected={perks} handleFormData={handleFormData} />

        {preInput('Extra info', 'house rules, etc ')}
        <textarea
          value={extraInfo}
          name="extraInfo"
          onChange={handleFormData}
        />

        {preInput(
          'Number of guests & Price',
          // 'add check in and out times, remember to have some time window forcleaning the room between guests. '
          'Specify the maximum number of guests so that the client stays within the limit.',
        )}
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Max no. of guests</h3>
            <input
              type="text"
              name="maxGuests"
              value={maxGuests}
              onChange={handleFormData}
              placeholder="1"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleFormData}
              placeholder="1"
            />
          </div>
        </div>
        <button className="mx-auto my-4 flex rounded-full bg-primary py-3 px-20 text-xl font-semibold text-white">
          Save
        </button>
      </form>
    </div>
  );
};

export default PlacesFormPage;
