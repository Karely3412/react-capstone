import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [showData, setshowData] = useState([]);
  const [filterSelectGenre, setfilterSelectGenre] = useState("");
  const [filterByGenres, setfilterByGenres] = useState([]);
  const [filterSelectRating, setfilterSelectRating] = useState("");
  //one more const with state of the selection of rating sorting
  //could be none, could be h-l or L-H

  useEffect(() => {
    axios
      .get("https://api.tvmaze.com/show/")
      .then((res) => {
        setshowData(res.data);
        let aGenres = [];
        res.data.forEach((key) => {
          aGenres = aGenres.concat(key.genres);
        });
        aGenres = [...new Set(aGenres)];
        setfilterByGenres(aGenres);
      })
      .catch((err) => console.log(err));
  }, []);

  function getFilterShows() {
    let aResults = [];

    if (filterSelectGenre === "") {
      aResults = [...showData];
    } else if (filterSelectGenre !== "") {
      aResults = showData.filter((data) =>
        data.genres.includes(filterSelectGenre)
      );
    }

    if (filterSelectRating === "highToLow") {
      aResults.sort((a, b) => b.rating.average - a.rating.average);
    } else if (filterSelectRating === "lowToHigh") {
      aResults.sort((a, b) => a.rating.average - b.rating.average);
    }

    //you have what you need in aResults
    //if the select option for sorting is selected, then sort, else NOTHING!!!!!!!!!!!!!!!!!!!!!
    //you are not going to create a new array, you are going to sort aResults!!!!!!!!!!!

    return aResults;
  }

  // function compareValues(key, order = 'asc') {
  //   return function innerSort(a, b) {
  //     if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
  //       // property doesn't exist on either object
  //       return 0;
  //     }

  //     const varA = (typeof a[key] === 'string')
  //       ? a[key].toUpperCase() : a[key];
  //     const varB = (typeof b[key] === 'string')
  //       ? b[key].toUpperCase() : b[key];

  //     let comparison = 0;
  //     if (varA > varB) {
  //       comparison = 1;
  //     } else if (varA < varB) {
  //       comparison = -1;
  //     }
  //     return (
  //       (order === 'desc') ? (comparison * -1) : comparison
  //     );
  //   };
  // }

  function changeFilterGenre(event) {
    setfilterSelectGenre(event.target.value);
  }
  function changeFilterRating(event) {
    setfilterSelectRating(event.target.value);
  }

  return (
    <div className="main-gallery">
      <div className="filter-container">
        <select value={filterSelectGenre} onChange={changeFilterGenre}>
          <option value="">Genres</option>
          {filterByGenres.map((data) => {
            return <option key={data.id}>{data}</option>;
          })}
        </select>

        <select value={filterSelectRating} onChange={changeFilterRating}>
          <option value="">Rating</option>
          <option value="highToLow">High - Low</option>
          <option value="lowToHigh">Low - High</option>
        </select>
      </div>

      <div className="content-card-wrapper">
        {getFilterShows().map((data) => {
          return (
            <div key={data.id} className="content-card">
              <div className="title-container">
                <h3>{data.name}</h3>
              </div>

              <div className="img-wrap">
                <img src={data.image.medium} alt="movie poster" />
              </div>

              <div className="content-container">
                <div className="content-wrap">
                  <p>Rated Stars: {data.rating.average}</p>
                </div>
                <div className="content-wrap">
                  <p>Runtime: {data.runtime} min.</p>
                </div>
                <div className="content-wrap2">
                  <p>Genres:</p>
                </div>
                <div className="content-wrap3">
                  <p> {data.genres} </p>
                </div>
              </div>
              <div className="horiz-rule"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
