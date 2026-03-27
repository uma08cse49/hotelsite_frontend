// import axiosInstance from "../axiosInstance";

import axiosInstance from "../utils/axios";


// export const uploadPlacePhotos = async (placeId, files, token) => {
//   const formData = new FormData();

//   files.forEach((file) => {
//     formData.append("photos", file);
//   });

//   const response = await axiosInstance.post(
//     `/api/admin/upload/${placeId}`,
//     formData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   console.log("Files received:", files);
//   console.log("Type:", typeof files);

//   return response.data;
// };


// export const uploadPlacePhotos = async (placeId, files, token) => {
//   const formData = new FormData();

//   // If single file
//   if (files instanceof File) {
//     formData.append("photos", files);
//   }

//   // If array or FileList
//   else if (files && typeof files === "object") {
//     Array.from(files).forEach((file) => {
//       formData.append("photos", file);
//     });
//   }

//   const response = await axiosInstance.post(
//     `/api/admin/upload/${placeId}`,
//     formData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

  
//   console.log("Files being sent:", response.data);

//   return response.data;
// };


export const uploadPlacePhotos = async (placeId, files, token) => {
  const formData = new FormData();

  // Single file
  if (files instanceof File) {
    formData.append("photos", files);
  }

  // Multiple files
  else if (files && typeof files === "object") {
    Array.from(files).forEach((file) => {
      formData.append("photos", file);
    });
  }

  const response = await axiosInstance.post(
    `/api/admin/upload/${placeId}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("Upload API response:", response.data);

  // ✅ NORMALIZE RESPONSE (VERY IMPORTANT)
  const photos = Array.isArray(response.data)
    ? response.data
    : response.data?.photos || [];

  // ✅ ENSURE CORRECT FORMAT
  const formattedPhotos = photos.map((photo) => ({
    url: photo.url || photo.secure_url,
    public_id: photo.public_id,
    category: photo.category || "Other",
  }));

  return formattedPhotos; // ✅ ALWAYS RETURN CLEAN DATA
};