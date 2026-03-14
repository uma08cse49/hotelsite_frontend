// import React, { useState ,useEffect } from 'react';
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
// import Image from './Image';
// import axiosInstance from '../../utils/axios';
// import { useParams } from "react-router-dom";
// import imageCompression from "browser-image-compression";

// const PhotosUploader = ({ id,addedPhotos, setAddedPhotos }) => {
//   const [photoLink, setphotoLink] = useState('');

//   const addPhotoByLink = async (e) => {
//     e.preventDefault();
//     const { data: filename } = await axiosInstance.post('/upload-by-link', {
//       link: photoLink,
//     });
//     // setAddedPhotos((prev) => {
//     //   return [...prev, filename];
//     // });
//     setAddedPhotos((prev) => [
//     ...prev,
//     { url: filename, category: "" }
//   ]);
//     setphotoLink('');
//   };
  
//   // const { id } = useParams(); // get id from URL
//   // const uploadPhoto = async (e) => {
//   //   const token = localStorage.getItem("adminToken");
//   //   const files = e.target.files;
//   //   const data = new FormData(); // creating new form data
//   //   for (let i = 0; i < files.length; i++) {
//   //     data.append('photos', files[i]); // adding all the photos to data one by one
//   //   }
//   //   // const { data: filenames } = await axiosInstance.post('/upload', data, {
//   //   // const { data: filenames } = await axiosInstance.post(`/api/admin/upload`, data, {
//   //   const response  = await axiosInstance.post(`/api/admin/upload/${id}`, data, {
//   //     headers: { 
//   //       Authorization: `Bearer ${token}`,
//   //       'Content-type': 'multipart/form-data' 
//   //     },
//   //   });
//   //   // setAddedPhotos((prev) => {
//   //   //   return [...prev, ...filenames];
//   //   // });
//   //   //  setAddedPhotos((prev) => [...prev, ...response.photos]);
//   //    setAddedPhotos(response.data.photos);
//   // };

//   useEffect(()=>{
//   console.log("Current Photos:", addedPhotos);
// },[addedPhotos]);



//   const uploadPhoto = async (e) => {
//   const files = e.target.files;

//   const data = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];

//     const options = {
//       maxSizeMB: 1, // compress to max 1MB
//       maxWidthOrHeight: 1920,
//       useWebWorker: true,
//     };

//     try {

//       const compressedFile = await imageCompression(file, options);

//       console.log("Original size:", file.size / 1024 / 1024, "MB");
//       console.log("Compressed size:", compressedFile.size / 1024 / 1024, "MB");

//       data.append("photos", compressedFile);

//     } catch (error) {
//       console.log("Compression error:", error);
//     }
//     // data.append("photos", files[i]);
//   }

//   const token = localStorage.getItem("adminToken");

//   const uploadUrl = id ? `/api/admin/upload/${id}` : `/api/admin/upload`;

//   const response = await axiosInstance.post(
//     uploadUrl,
//     data,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );

//   console.log("UPLOAD RESPONSE:", response.data);

//   // setAddedPhotos(response.data.photos);   // ✅ important

//   // setAddedPhotos((prev) => [...prev, ...response.data]);
//   //  setAddedPhotos((prev) => [...prev, ...response.data.photos]);
//   setAddedPhotos((prev) => [
//   ...prev,
//   ...response.data.map((file) => ({
//     url: file,
//     category: ""
//   }))
// ]);
// };

// //   const uploadPhoto = async (e) => {
// //   const files = e.target.files;
// //   const formData = new FormData();

// //   for (let i = 0; i < files.length; i++) {
// //     formData.append('photos', files[i]);
// //   }

// //   try {
// //     const { data } = await axiosInstance.post(
// //       `/api/admin/upload/${placeId}`,
// //       formData,
// //       {
// //         headers: { 'Content-Type': 'multipart/form-data' },
// //       }
// //     );

// //     // Backend already returns full updated photos array
// //     setAddedPhotos(data.photos);

// //     toast.success("Photos uploaded successfully!");

// //   } catch (err) {
// //     console.log("Upload error:", err);
// //     toast.error("Upload failed");
// //   }
// // };

//   // const removePhoto = (filename) => {
//   //   setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
//   // };

//   //   const removePhoto = (photoToRemove) => {
//   //   setAddedPhotos(
//   //     addedPhotos.filter(
//   //       (photo) =>
//   //         (typeof photo === "string" ? photo : photo.url) !==
//   //         (typeof photoToRemove === "string"
//   //           ? photoToRemove
//   //           : photoToRemove.url)
//   //     )
//   //   );
//   // };

//   const removePhoto = (photoToRemove) => {
//   setAddedPhotos((prev) =>
//     prev.filter(
//       (photo) =>
//         (typeof photo === "string" ? photo : photo.url) !==
//         (typeof photoToRemove === "string"
//           ? photoToRemove
//           : photoToRemove.url)
//     )
//   );
// };

//   const selectAsMainPhoto = (e, filename) => {
//     e.preventDefault();

//     setAddedPhotos([
//       filename,
//       ...addedPhotos.filter((photo) => photo !== filename),
//     ]);
//   //   setAddedPhotos([
//   //   selectedPhoto,
//   //   ...addedPhotos.filter(
//   //     (photo) =>
//   //       (typeof photo === "string" ? photo : photo.url) !==
//   //       (typeof selectedPhoto === "string"
//   //         ? selectedPhoto
//   //         : selectedPhoto.url)
//   //   ),
//   // ]);
//   };

//   return (
//     <>
//       <div className="flex gap-2">
//         <input
//           value={photoLink}
//           onChange={(e) => setphotoLink(e.target.value)}
//           type="text"
//           placeholder="Add using a link ...jpg"
//         />
//         <button
//           className="rounded-2xl bg-gray-200 px-4"
//           onClick={addPhotoByLink}
//         >
//           Add&nbsp;photo
//         </button>
//       </div>
//       <div className="mt-2 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-6 ">
//         {addedPhotos?.length > 0 &&
//           // addedPhotos.map((link) => (
//           //   <div className="relative flex h-32" key={link}>
//           //     <Image
//           //       className="w-full rounded-2xl object-cover"
//           //       src={link}
//           //       alt=""
//           //     />
//           addedPhotos.map((photo, index) => (
//             <div className="relative flex h-32" key={photo.url || index}>
//               <Image
//                 className="w-full rounded-2xl object-cover"
//                 src={typeof photo === "string" ? photo : photo.url}
//                 alt=""
//                 />

//                  {/* Category dropdown */}
//               <select
//                 value={photo.category}
//                 onChange={(e) => {
//                   const updated = [...addedPhotos];
//                   updated[index].category = e.target.value;
//                   setAddedPhotos(updated);
//                 }}
//                 className="border rounded p-1 w-full mt-2"
//               >
//                 <option value="">Select category</option>
//                 <option value="Living room">Living room</option>
//                 <option value="Bedroom">Bedroom</option>
//                 <option value="Kitchen">Kitchen</option>
//                 <option value="Bathroom">Bathroom</option>
//               </select>
              
//               {/* <button
//                 onClick={() => removePhoto(photo)}
//                 className="absolute bottom-1 right-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
//               > */}

//                {/* Remove button */}
//               <button
//                 onClick={() => {
//                   const updated = [...addedPhotos];
//                   updated.splice(index, 1);
//                   setAddedPhotos(updated);
//                 }}
//                 className="bg-red-500 text-white w-full mt-2 py-1 rounded"
//               >
//                 Remove
//               </button>

              
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="h-6 w-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                   />
//                 </svg>
//               {/* </button> */}
//               {/* <button
//                 onClick={(e) => selectAsMainPhoto(e, photo)}
//                 className="absolute bottom-1 left-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
//               >
//                 {link === addedPhotos[0] && (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="h-6 w-6"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 )}

//                 {link !== addedPhotos[0] && (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="h-6 w-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
//                     />
//                   </svg>
//                 )}
//               </button> */}

//               <button
//   onClick={(e) => selectAsMainPhoto(e, photo)}
//   className="absolute bottom-1 left-1 cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
// >
//   {(typeof photo === "string" ? photo : photo.url) ===
//   (typeof addedPhotos[0] === "string"
//     ? addedPhotos[0]
//     : addedPhotos[0]?.url) ? (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//         clipRule="evenodd"
//       />
//     </svg>
//   ) : (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
//       />
//     </svg>
//   )}
// </button>
//             </div>
//           ))}
//         <label className="flex h-32 cursor-pointer items-center justify-center gap-1 rounded-2xl border bg-transparent p-2 text-2xl text-gray-600">
//           <input
//             type="file"
//             multiple
//             className="hidden"
//             onChange={uploadPhoto}
//           />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="h-8 w-8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//             />
//           </svg>
//           Upload
//         </label>
//       </div>
//     </>
//   );
// };

// export default PhotosUploader;




// ===============================================================================================================

import React, { useState ,useEffect } from 'react';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Image from './Image';
import axiosInstance from '../../utils/axios';
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";


const PhotosUploader = ({ id, addedPhotos, setAddedPhotos }) => {
  const [photoLink, setphotoLink] = useState("");

  const addPhotoByLink = async (e) => {
    e.preventDefault();

    const { data: filename } = await axiosInstance.post("/upload-by-link", {
      link: photoLink,
    });

    setAddedPhotos((prev) => [
      ...prev,
      { url: filename, category: "" }
    ]);

    setphotoLink("");
  };

  // const uploadPhoto = async (e) => {
  //   const files = e.target.files;

  //   const data = new FormData();

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];

  //     const options = {
  //       maxSizeMB: 1,
  //       maxWidthOrHeight: 1920,
  //       useWebWorker: true,
  //     };

  //     try {
  //       const compressedFile = await imageCompression(file, options);
  //       data.append("photos", compressedFile);
  //     } catch (error) {
  //       console.log("Compression error:", error);
  //     }
  //   }

  //   const token = localStorage.getItem("adminToken");

  //   const uploadUrl = id ? `/api/admin/upload/${id}` : `/api/admin/upload`;

  //   // const uploadUrl = id ? `/api/places/upload/${id}` : `/api/places/upload`;

  // //   const response = await axiosInstance.post(uploadUrl, data, {
  // //     headers: {
  // //       Authorization: `Bearer ${token}`,
  // //       // "Content-Type": "multipart/form-data",
  // //     },
  // //   });

  // //   console.log("Upload response:", response.data);
  // //   const newPhotos = response.data.map((file) => ({
  // //     url: file,
  // //     category: "",
  // //   }));

  // //   setAddedPhotos((prev) => [...prev, ...newPhotos]);

  //     const response = await axiosInstance.post(
  //       "/api/admin/upload",
  //       formData,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );

  //     console.log("Upload response:", response.data);

  //     const newPhotos = response.data.photos.map((photo) => ({
  //       url: photo.url,
  //       public_id: photo.public_id,
  //       category: photo.category || "Other",
  //     }));

  //     setAddedPhotos((prev) => [...prev, ...newPhotos]);
  // };


//   const uploadPhoto = async (e) => {
//   const files = e.target.files;

//   const formData = new FormData();

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];

//     const options = {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 1920,
//       useWebWorker: true,
//     };

//     try {
//       const compressedFile = await imageCompression(file, options);

//       formData.append("photos", compressedFile);

//     } catch (error) {
//       console.log("Compression error:", error);
//     }
//   }

//   const token = localStorage.getItem("adminToken");

//   console.log("Uploading for place id:", id);

//   const uploadUrl = id ? `/api/admin/upload/${id}` : `/api/admin/upload`;

//    const response = axiosInstance.post(uploadUrl , 
//     formData,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",  
//       },
//     }
//   );

//   console.log("Upload response:", response.data);

//   const photos = response.data?.photos || [];

//   const newPhotos = photos.map((photo) => ({
//     url: photo.url,
//     public_id: photo.public_id,
//     category: photo.category || "Other",
//   }));

//   setAddedPhotos((prev) => [...prev, ...newPhotos]);
// };

//   const removePhoto = (index) => {
//     const updated = [...addedPhotos];
//     updated.splice(index, 1);
//     setAddedPhotos(updated);
//   };

//   const selectAsMainPhoto = (e, photo) => {
//     e.preventDefault();

//     const photoUrl = typeof photo === "string" ? photo : photo.url;

//     const updatedPhotos = [
//       addedPhotos.find(
//         (p) => (typeof p === "string" ? p : p.url) === photoUrl
//       ),
//       ...addedPhotos.filter(
//         (p) => (typeof p === "string" ? p : p.url) !== photoUrl
//       ),
//     ];

//     setAddedPhotos(updatedPhotos);
//   };

//   return (
//     <>
//       {/* LINK UPLOAD */}
//       <div className="flex gap-2">
//         <input
//           value={photoLink}
//           onChange={(e) => setphotoLink(e.target.value)}
//           type="text"
//           placeholder="Add using a link ...jpg"
//         />
//         <button
//           className="rounded-2xl bg-gray-200 px-4"
//           onClick={addPhotoByLink}
//         >
//           Add photo
//         </button>
//       </div>

//       {/* PHOTO GRID */}
//       <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//         {addedPhotos?.length > 0 &&
//           addedPhotos.map((photo, index) => {
//             const photoUrl = typeof photo === "string" ? photo : photo.url;

//             return (
//               <div key={index} className="bg-white border rounded-xl p-2 shadow-sm">

//                 {/* IMAGE */}
//                 <div className="relative">
//                   <Image
//                     src={photoUrl}
//                     alt=""
//                     className="w-full h-32 object-cover rounded-lg"
//                   />

//                   {/* REMOVE BUTTON */}
//                   <button
//                     onClick={() => removePhoto(index)}
//                     className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-2 py-1 text-xs"
//                   >
//                     ✕
//                   </button>

//                   {/* MAIN PHOTO STAR */}
//                   <button
//                     onClick={(e) => selectAsMainPhoto(e, photo)}
//                     className="absolute bottom-2 left-2 bg-black/60 text-white rounded-full p-1"
//                   >
//                     {photoUrl ===
//                     (typeof addedPhotos[0] === "string"
//                       ? addedPhotos[0]
//                       : addedPhotos[0]?.url) ? (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         className="h-5 w-5"
//                       >
//                         <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
//                       </svg>
//                     ) : (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         className="h-5 w-5"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="1.5"
//                           d="M11.48 3.5l2.125 5.111 5.518.442-4.204 3.602 1.285 5.385L12 15.5l-4.204 2.54 1.285-5.385L4.877 9.053l5.518-.442L11.48 3.5z"
//                         />
//                       </svg>
//                     )}
//                   </button>
//                 </div>

//                 {/* CATEGORY DROPDOWN */}
//                 <select
//                   value={photo.category || ""}
//                   onChange={(e) => {
//                     const updated = [...addedPhotos];
//                     updated[index].category = e.target.value;
//                     setAddedPhotos(updated);
//                   }}
//                   className="border rounded-md w-full mt-2 p-1 text-sm"
//                 >
//                   <option value="">Select category</option>
//                   <option value="Living room">Living room</option>
//                   <option value="Bedroom">Bedroom</option>
//                   <option value="Kitchen">Kitchen</option>
//                   <option value="Bathroom">Bathroom</option>
//                 </select>
//               </div>
//             );
//           })}

//         {/* UPLOAD BUTTON */}
//         <label className="flex h-32 cursor-pointer items-center justify-center gap-1 rounded-2xl border text-2xl text-gray-600">
//           <input type="file" multiple className="hidden" onChange={uploadPhoto} />
//           Upload
//         </label>
//       </div>
//     </>
//   );
// };


  const uploadPhoto = async (e) => {
    const files = e.target.files;

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(file, options);
        data.append("photos", compressedFile);
      } catch (error) {
        console.log("Compression error:", error);
      }
    }

    const token = localStorage.getItem("adminToken");

    const uploadUrl = id ? `/api/admin/upload/${id}` : `/api/admin/upload`;


    // const uploadUrl = `/api/admin/upload/${id}` ;

    const response = await axiosInstance.post(uploadUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Upload response:", response.data);

    // const photos = response.data?.photos || [];

    const photos = Array.isArray(response.data)
    ? response.data
    : response.data?.photos || [];

    const newPhotos = photos.map((photo) => ({
      url: photo.secure_url || photo.url,
      public_id: photo.public_id,
      category: photo.category || "Other",
    }));

    setAddedPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (index) => {
    const updated = [...addedPhotos];
    updated.splice(index, 1);
    setAddedPhotos(updated);
  };

  const selectAsMainPhoto = (e, photo) => {
    e.preventDefault();

    const photoUrl = typeof photo === "string" ? photo : photo.url;

    const updatedPhotos = [
      addedPhotos.find(
        (p) => (typeof p === "string" ? p : p.url) === photoUrl
      ),
      ...addedPhotos.filter(
        (p) => (typeof p === "string" ? p : p.url) !== photoUrl
      ),
    ];

    setAddedPhotos(updatedPhotos);
  };

  return (
    <>
      {/* LINK UPLOAD */}
      <div className="flex gap-2">
        <input
          value={photoLink}
          onChange={(e) => setphotoLink(e.target.value)}
          type="text"
          placeholder="Add using a link ...jpg"
        />
        <button
          className="rounded-2xl bg-gray-200 px-4"
          onClick={addPhotoByLink}
        >
          Add photo
        </button>
      </div>

      {/* PHOTO GRID */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {addedPhotos?.length > 0 &&
          addedPhotos.map((photo, index) => {
            const photoUrl = typeof photo === "string" ? photo : photo.url;

            return (
              <div key={index} className="bg-white border rounded-xl p-2 shadow-sm">

                {/* IMAGE */}
                <div className="relative">
                  <Image
                    src={photoUrl}
                    alt=""
                    className="w-full h-32 object-cover rounded-lg"
                  />

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-2 py-1 text-xs"
                  >
                    ✕
                  </button>

                  {/* MAIN PHOTO STAR */}
                  <button
                    onClick={(e) => selectAsMainPhoto(e, photo)}
                    className="absolute bottom-2 left-2 bg-black/60 text-white rounded-full p-1"
                  >
                    {photoUrl ===
                    (typeof addedPhotos[0] === "string"
                      ? addedPhotos[0]
                      : addedPhotos[0]?.url) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M11.48 3.5l2.125 5.111 5.518.442-4.204 3.602 1.285 5.385L12 15.5l-4.204 2.54 1.285-5.385L4.877 9.053l5.518-.442L11.48 3.5z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* CATEGORY DROPDOWN */}
                <select
                  value={photo.category || ""}
                  onChange={(e) => {
                    const updated = [...addedPhotos];
                    updated[index].category = e.target.value;
                    setAddedPhotos(updated);
                  }}
                  className="border rounded-md w-full mt-2 p-1 text-sm"
                >
                  <option value="">Select category</option>
                  <option value="Living room">Living room</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Bathroom">Bathroom</option>
                </select>
              </div>
            );
          })}

        {/* UPLOAD BUTTON */}
        <label className="flex h-32 cursor-pointer items-center justify-center gap-1 rounded-2xl border text-2xl text-gray-600">
          <input type="file" multiple className="hidden" onChange={uploadPhoto} />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploader;