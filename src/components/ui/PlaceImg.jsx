import React from 'react';

// const PlaceImg = ({ place, index = 0, className = null }) => {
//   if (!place.photos?.length) {
//     return '';
//   }
//   if (!className) {
//     className = 'object-cover';
//   }
//   return <img src={place.photos[index]} alt="" className={className} />;
// };

const PlaceImg = ({ place, className = '' }) => {
  const photo = place?.photos?.[0];

  return (
    <img
      src={photo || "https://via.placeholder.com/300"}
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/300";
      }}
      className={className}
      alt=""
    />
  );
};

export default PlaceImg;
