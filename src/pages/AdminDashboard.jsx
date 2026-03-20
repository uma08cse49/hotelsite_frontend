// import { useState } from "react";
// import axios from "axios";

// export default function AdminDashboard() {
//   const [placeId, setPlaceId] = useState("");
//   const [files, setFiles] = useState([]);

//   const handleUpload = async () => {
//     const formData = new FormData();

//     for (let file of files) {
//       formData.append("photos", file);
//     }

//     try {
//       const res = await axios.post(
//         `http://localhost:8800/api/admin/upload/${placeId}`,
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       alert("Upload successful!");
//       console.log(res.data);
//     } catch (err) {
//       alert("Upload failed");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Admin Photo Upload</h1>

//       <input
//         type="text"
//         placeholder="Enter Place ID"
//         className="border p-2 mb-4 w-full"
//         value={placeId}
//         onChange={(e) => setPlaceId(e.target.value)}
//       />

//       <input
//         type="file"
//         multiple
//         onChange={(e) => setFiles(e.target.files)}
//         className="mb-4"
//       />

//       <button
//         onClick={handleUpload}
//         className="bg-black text-white px-6 py-2 rounded"
//       >
//         Upload Photos
//       </button>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import noImage from "../assets/no-image.png";
import { uploadPlacePhotos } from "../services/placeService";
import { FaTrash } from "react-icons/fa";
import imageCompression from "browser-image-compression";

export default function AdminDashboard() {
  const [places, setPlaces] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
  const navigate = useNavigate();

  // Fetch all places
  useEffect(() => {
    fetchPlaces();
  }, []);

  // const fetchPlaces = async () => {
  //   // const res = await axios.get("http://localhost:8800/api/places");
  //   const res = await axiosInstance.get("/api/admin/places");
  //   console.log("API RESPONSE:", res.data);
  //   setPlaces(res.data);
  // };
  const fetchPlaces = async () => {
    console.log("FETCH FUNCTION STARTED");
  const token = localStorage.getItem("adminToken");
   if (!token) {
    console.log("NO TOKEN FOUND");
    return;
  }

  try{

  const res = await axiosInstance.get("/api/places", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
   console.log("API RESPONSE:", res.data);
   console.log("FULL RESPONSE:", res);
   console.log("DATA ONLY:", res.data);
  //  setPlaces(res.data.places); 
   setPlaces(res.data?.places || res.data || []);
}catch (err) {
    console.log("FETCH ERROR:", err.response?.data || err.message);
  }
};


  const handleFileChange = (placeId, files) => {
    setSelectedFiles({
      ...selectedFiles,
      [placeId]: files,
    });
  };

 


  // const activePlaces = places.filter(p => !p.isDeleted);
  // const deletedPlaces = places.filter(p => p.isDeleted);
  const deletedPlaces = Array.isArray(places)
  ? places.filter(p => p.isDeleted)
  : [];


  // =======================================================================================
  // const handleUpload = async (placeId) => {
  //   const formData = new FormData();

  //   for (let file of selectedFiles[placeId]) {
  //     formData.append("photos", file);
  //   }
  //   await axios.post(
  //   `http://localhost:8800/api/admin/upload/${placeId}`,
  //   formData
  //   );
  //   alert("Uploaded successfully");
  //   fetchPlaces(); // refresh
  // };

//   const handleUpload = async (placeId) => {
//   const files = selectedFiles[placeId];

//   if (!files || files.length === 0) {
//     alert("Please select files first");
//     return;
//   }
//   const token = localStorage.getItem("adminToken");

//   const formData = new FormData();

//   for (const file of files) {
//     formData.append("photos", file);
//   }

//   try {
//     await axiosInstance.post(`/api/admin/upload/${placeId}`, formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     // ✅ REFRESH PLACE DATA AFTER UPLOAD
//     const { data } = await axiosInstance.get(
//       `/api/admin/place/${placeId}`
//     );

//     setAddedPhotos(data.place.photos || []);

//     alert("Upload successful");
//     console.log("Photos after upload:", data.place.photos);
//   } catch (err) {
//     console.log("file not uploaded",err);
//   }
// };

// ==============================================================================================




// const handleUpload = async (placeId) => {
//   const token = localStorage.getItem("adminToken");

//   const files = selectedFiles[placeId];

//   if (!files || files.length === 0) {
//     alert("Please select files first");
//     return;
//   }

//   await uploadPlacePhotos(placeId, files, token);

//   await fetchPlaces();
  
//   alert("Upload successful");

//   fetchPlaces();
// };


const handleUpload = async (placeId) => {
  const token = localStorage.getItem("adminToken");
  const files = selectedFiles[placeId];

  if (!files || files.length === 0) {
    alert("Please select files first");
    return;
  }

  try {

    const options = {
      maxSizeMB: 1, // compress to 1MB
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const compressed = await imageCompression(files[i], options);
      compressedFiles.push(compressed);
    }

    await uploadPlacePhotos(placeId, compressedFiles, token);

    await fetchPlaces();

    alert("Upload successful");

  } catch (error) {
    console.error("Compression error:", error);
  }
};



  const handleDelete = async (id) => {
  const token = localStorage.getItem("adminToken");

  const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;

  try {
    await axiosInstance.delete(`/api/admin/place/${id}`,{
        headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })

    fetchPlaces(); // re-fetch updated list
  } catch (err) {
    console.error(err);
  }
};

const handleRestore = async (id) => {

   const token = localStorage.getItem("adminToken");
   console.log("REstore token....",token)

  try {
    await axiosInstance.put(`/api/admin/place/restore/${id}`,{},
      {
        headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
    }
    );
    fetchPlaces(); // refresh list
  } catch (err) {
    console.log("Restore error:", err);
  }
};

const getThumbnail = (photo) => {
  const url =
    typeof photo === "string"
      ? photo
      : photo?.url;

  if (!url) return noImage;

  if (!url.includes("/upload/")) return url;


  return url.replace(
    "/upload/",
    "/upload/w_400,h_300,c_fill,q_auto,f_auto/"
  );
};

// const removePhoto = async (placeId) => {
//    if (!window.confirm("Remove this photo?")) return;

//   try {
//     const response = await fetch(`/api/places/remove-photo/${placeId}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       setPlaces((prev) =>
//         prev.map((p) =>
//           p._id === placeId ? { ...p, photos: [] } : p
//         )
//       );
//     }
//   } catch (error) {
//     console.error("Error removing photo:", error);
//   }
// };



const removePhoto = async (place) => {
  try {

    if (!window.confirm("Delete this photo?")) return;

    const res = await fetch(`http://localhost:8800/api/admin/remove-photo/${place._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        photo: place.photos[0],
      }),
    });

    if (res.ok) {
      setPlaces((prev) =>
        prev.map((p) =>
          p._id === place._id ? { ...p, photos: [] } : p
        )
      );
    }

  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* <div className="grid grid-cols-4 gap-6">
        {places.map((place) => (
          <div key={place._id} className="border rounded-xl p-4 shadow">
            
            <img
              src={place.photos?.[0]}
              alt={place.title}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />

            <h2 className="font-semibold">{place.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{place.address}</p>

            <input
              type="file"
              multiple
              onChange={(e) =>
                handleFileChange(place._id, e.target.files)
              }
              className="mb-2"
            />

            <button
              onClick={() => handleUpload(place._id)}
              className="bg-black text-white px-4 py-2 rounded w-full"
            >
              Upload Photos
            </button>

            
            <div className="flex gap-3 mt-3">
              
              <button 
              onClick={() => navigate(`/account/places/${place._id}`)} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg" 
              //  className="bg-black text-white px-4 py-2 rounded w-full"
              >
                Edit
              </button>
              
              <button
              onClick={() => handleDelete(place._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"  
              // className="bg-black text-white px-4 py-2 rounded w-full"
              >
                Delete</button>
            </div>

          </div>
        ))}
      </div> */}


    <div className="grid grid-cols-4 gap-6">
        {/* {places?.map((place) => ( */}
        {Array.isArray(places) && places.map((place) => (
          <div key={place._id} className="border rounded-xl p-4 shadow">

      {/* <img
        src={
          place.photos?.length > 0
          ? typeof place.photos?.[0] === "string"
            ? place.photos?.[0]
            : place.photos?.[0]?.url
          // : "https://via.placeholder.com/400x300?text=No+Image"
          : noImage
        }
        alt={place.title}
        className="h-40 w-full object-cover rounded-lg mb-3"
      /> */}
      <div className="relative group h-40">
      <img
        src={getThumbnail(place.photos?.[0]) || null}
        alt={place.title}
        // onError={(e) => (e.target.src = noImage)}
        className="h-40 w-full object-cover rounded-lg mb-3"
      />


      {/* HOVER DELETE BUTTON */}
  {place.photos?.length > 0 && (
    <button
      onClick={() => removePhoto(place)}
      className="
        absolute top-2 right-2
        bg-red-500 text-white
        p-2 rounded-full
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        hover:bg-red-600
      "
    >
      <FaTrash size={14} />
    </button>
  )}
  </div>



  {/* <div className="grid grid-cols-4 gap-6">
  {places.map((place) => (
    <div key={place._id} className="border rounded-xl p-4 shadow">

      <img
        src={getThumbnail(place.photos?.[0])}
        alt={place.title}
        className="h-40 w-full object-cover rounded-lg mb-3"
      /> */}


      

      <h2 className="font-semibold">
        {place.title}
        {place.isDeleted && (
          <span className="ml-2 text-red-500 text-sm">(Deleted)</span>
        )}
      </h2>

      <p className="text-sm text-gray-500 mb-2">{place.address}</p>

      {/* Hide upload if deleted */}
      {!place.isDeleted && (
        <>
          <input
            type="file"
            multiple
            onChange={(e) =>
              handleFileChange(place._id, e.target.files)
            }
            className="mb-2"
          />

          <button
            onClick={() => handleUpload(place._id)}
            className="bg-black text-white px-4 py-2 rounded w-full"
          >
            Upload Photos
          </button>
        </>
      )}


       {/* REMOVE BUTTON
        {place.photos?.length > 0 && (
          <button
            onClick={() => removePhoto(place._id)}
            className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
          >
            Remove
          </button>
        )} */}

      <div className="flex gap-3 mt-3">

        {!place.isDeleted ? (
          <>
            <button
              onClick={() => navigate(`/account/places/${place._id}`)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(place._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
          </>
        ) : (
          <button
            onClick={() => handleRestore(place._id)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
          >
            Restore
          </button>
        )}

      </div>

      

    </div>
  ))}
</div>
     </div>
  );
}
