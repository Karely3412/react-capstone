// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Fetch(props) {
//   const [showData, setshowData] = useState([]);
//   const [filterSelect, setFilterSelect] = useState([]);
//   // const [showGenres, setshowGenres] = useState([]);
//   const infoArray = [];
//   // console.log(showData);

//   useEffect(() => {
//     axios
//       .get("https://api.tvmaze.com/show/")
//       .then((res) => {
//         setshowData(res.data);

//         // console.log(setshowData);
//         // const aGenres = [... new Set(aFullarrays)];
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // console.log(infoArray);

//   const infoReturn = () => {
//     return showData.map((values, index) => {
//       return <div key={index}>{values}</div>;
//     });
//   };

//   infoArray.push(infoReturn);
//   // const [showData, setshowData] = useState([]);
//   // const [filterSelect, setFilterSelect] = useState([]);
//   // // const [showGenres, setshowGenres] = useState([]);
//   // console.log(showData);
//   // useEffect(() => {
//   //   axios
//   //     .get("https://api.tvmaze.com/show/")
//   //     .then((res) => {
//   //       setshowData(res.data);
//   //       // console.log(setshowData);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, []);

//   return (
//     <div>
//       {infoArray}
//       {/* //   {Object.keys(showData.object).map((key, index) => (
//     //     <p key={index}>{key.name}</p>
//     //   ))} */}

//       {/* <div className="content-card-wrapper">
//         {showData.map((values, index) => {
//           return (
//             <div key={index} className="content-card">
//               <div className="title-container">
//                 <h3>{values.name}</h3>
//               </div>
//               <img src={values.image.medium} alt="movie poster" />
//               <div className="content-container">
//                 <div className="content-wrap">
//                   <p>Rated Stars: {values.rating.average}</p>
//                 </div>
//                 <div className="content-wrap">
//                   <p>Runtime: {values.runtime} min.</p>
//                 </div>
//               </div>
//               <div className="horiz-rule"></div>
//             </div>
//           );
//         })}
//       </div> */}
//     </div>
//   );
// }

// export default Fetch;
