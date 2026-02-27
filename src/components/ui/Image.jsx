// import React from 'react';

// const Image = ({ src, ...rest }) => {
//   return <img src={src} {...rest} alt={''} className="rounded-xl" />;
// };

// export default Image;


import { useState } from "react";

const defaultImage =
  "https://res.cloudinary.com/drgcw7tzn/image/upload/v1768310364/Airbnb/Places/wbdoog09idhaiynsxccq.jpg";

export default function Image({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src || defaultImage);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(defaultImage)}
    />
  );
}
