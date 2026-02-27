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

export default function AdminDashboard() {
  const [places, setPlaces] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
  const navigate = useNavigate();

  // Fetch all places
  useEffect(() => {
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    // const res = await axios.get("http://localhost:8800/api/places");
    const res = await axiosInstance.get("/api/admin/places");
    console.log("API RESPONSE:", res.data);
    setPlaces(res.data);
  };

  const handleFileChange = (placeId, files) => {
    setSelectedFiles({
      ...selectedFiles,
      [placeId]: files,
    });
  };


  // const activePlaces = places.filter(p => !p.isDeleted);
  const deletedPlaces = places.filter(p => p.isDeleted);

  const handleUpload = async (placeId) => {
    const formData = new FormData();

    for (let file of selectedFiles[placeId]) {
      formData.append("photos", file);
    }

    // await axios.post(
    //   `http://localhost:8800/api/admin/upload/${placeId}`,
    //   formData,
    //   {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   }
    // );
    await axios.post(
    `http://localhost:8800/api/admin/upload/${placeId}`,
    formData
    );


    alert("Uploaded successfully");
    fetchPlaces(); // refresh
  };


  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;

  try {
    await axiosInstance.delete(`/api/admin/place/${id}`);
    fetchPlaces(); // re-fetch updated list
  } catch (err) {
    console.error(err);
  }
};

const handleRestore = async (id) => {
  try {
    await axiosInstance.put(`/api/admin/place/restore/${id}`);
    fetchPlaces(); // refresh list
  } catch (err) {
    console.log("Restore error:", err);
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
  {places.map((place) => (
    <div key={place._id} className="border rounded-xl p-4 shadow">

      <img
        src={
          typeof place.photos?.[0] === "string"
            ? place.photos?.[0]
            : place.photos?.[0]?.url
        }
        alt={place.title}
        className="h-40 w-full object-cover rounded-lg mb-3"
      />

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
