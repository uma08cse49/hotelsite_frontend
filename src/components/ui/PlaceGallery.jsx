import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useRef,useEffect } from "react";


const PlaceGallery = ({ place }) => {

  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const sectionRefs = useRef({});

  const [activeCategory, setActiveCategory] = useState("");

  const [selectedPhoto, setSelectedPhoto] = useState(null);


  const validPhotos = place.photos?.filter(
  (p) => p?.url && p.url.includes("res.cloudinary.com")
);

  const scrollToSection = (category) => {

  sectionRefs.current[category]?.scrollIntoView({
    behavior: "smooth"
  });
}

  

//   const handleScroll = () => {

//     const sections = Object.keys(sectionRefs.current);

//     sections.forEach((category) => {

//       const section = sectionRefs.current[category];

//       if (!section) return;

//       const rect = section.getBoundingClientRect();

//       if (rect.top <= 200 && rect.bottom >= 200) {
//         setActiveCategory(category);
//       }

//     });
//     window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);

// }

    useEffect(() => {
      const handleScroll = () => {
        const sections = Object.keys(sectionRefs.current);

        sections.forEach((category) => {
          const section = sectionRefs.current[category];
          if (!section) return;

          const rect = section.getBoundingClientRect();

          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveCategory(category);
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

      // };
      

  if (showAllPhotos) {

    const groupedPhotos = place.photos.reduce((acc, photo) => {

    const category = photo.category || "Other";

    if (!acc[category]) acc[category] = [];

    acc[category].push(photo);

    return acc;

  }, {});

    return (
  <div className="fixed inset-0 z-50 bg-white overflow-auto">

  <button
    className="fixed right-6 top-6 bg-white px-4 py-2 rounded-xl shadow"
    onClick={() => setShowAllPhotos(false)}
  >
    Close photos
  </button>

  <div className="max-w-7xl mx-auto pt-24 flex gap-12">

    {/* LEFT SIDEBAR */}
    <div className="w-56 sticky top-24 h-fit">

      {Object.keys(groupedPhotos).map((category) => (

        <div
          key={category}
          onClick={() => scrollToSection(category)}
          // className="cursor-pointer py-2 text-gray-700 hover:underline"
          // className="cursor-pointer py-2 text-gray-700 hover:underline hover:text-black"
          className={`cursor-pointer py-2 transition
            ${activeCategory === category
              ? "font-semibold text-black"
              : "text-gray-500 hover:text-black"}
          `}
        >
          {category}
        </div>

      ))}

    </div>


    {/* RIGHT PHOTO SECTIONS */}
    <div className="flex-1">

      {Object.entries(groupedPhotos).map(([category, photos]) => (

        <div
          key={category}
          ref={(el) => (sectionRefs.current[category] = el)}
          className="mb-16"
        >

          <h2 className="text-2xl font-semibold mb-6">
            {category} · {photos.length} photos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

            {/* {photos.map((photo, index) => (

              <img
                key={index}
                src={photo.url}
                className="rounded-xl w-full object-cover"
                onClick={() => setSelectedPhoto(photo.url)}
              />

            ))} */}

            {photos
              .filter((p) => p?.url && p.url.includes("res.cloudinary.com"))
              .map((photo, index) => (
                <img
                  key={index}
                  src={photo.url}
                  className="rounded-xl w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  onClick={() => setSelectedPhoto(photo.url)}
                />
            ))}

          </div>

          {selectedPhoto && (
            
              <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center">

                <button
                  className="absolute top-6 right-6 text-white text-2xl"
                  onClick={() => setSelectedPhoto(null)}
                >
                  ✕
                </button>

                <img
                  src={selectedPhoto}
                  className="max-h-[90vh] max-w-[90vw] object-contain"
                />

              </div>

            )}

        </div>

      ))}

    </div>

  </div>

</div>

    );
  }

  

  return (
    <div className="relative cursor-pointer">
      {/* Medium devices */}
      <div className="hidden h-[400px] max-h-[450px] grid-cols-4 gap-2 overflow-hidden rounded-[12px] md:grid">
        {/* column 1 */}
        <div className="col-span-2 overflow-hidden">
          {place.photos?.[0] && (
            <div className="h-full w-full overflow-hidden bg-red-200">
              <img
                onClick={() => setShowAllPhotos(true)}
                className="h-full w-full cursor-pointer object-cover"
                // src={place.photos[0].url}
                src={validPhotos?.[0]?.url}
                onError={(e) => {
                    e.target.onerror = null; // ✅ prevent infinite loop
                    e.target.src = "https://placehold.co/600x400";
                    // e.target.src = "/no-image.jpg";
                }}
                alt=""
              />
            </div>
          )}
        </div>
        {/* column 2 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 2 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[1] && (
              // row 1
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  // src={place.photos[1].url}
                  src={validPhotos?.[1]?.url}
                  onError={(e) => {
                    // e.target.src = "https://via.placeholder.com/600x400";
                    e.target.src = "https://placehold.co/600x400";
                  }}
                  alt=""
                />
              </div>
              
            )}

            {place.photos?.[2] && (
              // row 2
              <div className="bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  // src={place.photos[2].url}
                  src={validPhotos?.[2]?.url}
                  onError={(e) => {
                    // e.target.src = "https://via.placeholder.com/600x400";
                    e.target.src = "https://placehold.co/600x400";
                  }}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        {/* column 3 */}
        <div className="col-span-1 overflow-hidden">
          {/* row grid inside column 3 */}
          <div className="grid h-full grid-rows-2 gap-2">
            {place.photos?.[3] && (
              // row 1
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  // src={place.photos[3].url}
                  src={validPhotos?.[3]?.url}
                  onError={(e) => {
                    // e.target.src = "https://via.placeholder.com/600x400";
                    e.target.src = "https://placehold.co/600x400";
                  }}
                  alt=""
                />
              </div>
            )}

            {place.photos?.[4] && (
              // row 2
              <div className="h-full bg-gray-200">
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className="h-full w-full cursor-pointer object-cover"
                  // src={place.photos[4].url}
                  src={validPhotos?.[4]?.url}
                  onError={(e) => {
                    // e.target.src = "https://via.placeholder.com/600x400";
                    e.target.src = "https://placehold.co/600x400";
                  }}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile devices */}
      <div className="flex overflow-hidden rounded-[12px] md:hidden">
        {place.photos?.[0] && (
          <div className="h-full">
            <img
              onClick={() => setShowAllPhotos(true)}
              className="h-full cursor-pointer object-cover"
              // src={place.photos[0].url}
              src={validPhotos?.[0]?.url}
              onError={(e) => {
                // e.target.src = "https://via.placeholder.com/600x400";
                e.target.src = "https://placehold.co/600x400";
              }}
              alt=""
            />
          </div>
        )}
      </div>

      <button
        className="absolute bottom-2 right-2 flex gap-1 rounded-xl bg-white py-2 px-4 shadow-md shadow-gray-500 "
        onClick={() => setShowAllPhotos(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
        Show all photos
      </button>
    </div>
  );
};

export default PlaceGallery;
