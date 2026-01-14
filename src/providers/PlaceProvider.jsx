// import { createContext } from 'react';

// import { useProvidePlaces } from '../../hooks';

// const initialState = {
//   places: [],
//   setPlaces: () => {},
//   loading: true,
//   setLoading: () => {},
// };

// export const PlaceContext = createContext(initialState);

// export const PlaceProvider = ({ children }) => {
//   const allPlaces = useProvidePlaces();

//   return (
//     <PlaceContext.Provider value={allPlaces}>{children}</PlaceContext.Provider>
//   );
// };



// providers/PlaceProvider.jsx
// import { createContext, useState, useEffect } from 'react';
// import axiosInstance from '../utils/axios'; // optional, if you want to use axios

// export const PlaceContext = createContext();

// export function PlaceProvider({ children }) {
//   const [listings, setListings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         // Using fetch with environment variable
//         // const res = await fetch(`${process.env.REACT_APP_API_URL}/api/listings`);
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/api/listings`);
//         const data = await res.json();
//         // setListings(data);
//         setListings(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Failed to fetch listings:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListings();
//   }, []);

//   return (
//     <PlaceContext.Provider value={{ listings, loading }}>
//       {children}
//     </PlaceContext.Provider>
//   );
// }



// providers/PlaceProvider.jsx
import { createContext, useState, useEffect } from 'react';

export const PlaceContext = createContext();

export function PlaceProvider({ children }) {
  const [listings, setListings] = useState([]); // always start as array
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     try {
  //       const res = await fetch(`${import.meta.env.REACT_APP_API_URL}/api/listings`);
  //       const data = await res.json();
  //       setListings(Array.isArray(data) ? data : []); // ensure array
  //     } catch (err) {
  //       console.error("Failed to fetch listings:", err);
  //       setListings([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

    //   fetchListings();
  // }, []);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_URL}/api/places`)
    fetch(`${import.meta.env.VITE_API_URL}/api/places`)

      .then(res => res.json())
      .then(data => {
        console.log("Places from API:", data); // 🔥 DEBUG LINE
        setListings(data);
        setLoading(false);
      })
      // .catch(() => setLoading(false));
      .catch(err => {
        console.error("Failed to fetch places:", err);
        setLoading(false);
      });
  }, []);




  return (
    <PlaceContext.Provider value={{ listings, loading }}>
      {children}
    </PlaceContext.Provider>
  );
}
