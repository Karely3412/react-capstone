import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Gallery() {
  const [showData, setshowData] = useState([]);
  const [filterSelectGenre, setfilterSelectGenre] = useState("");
  const [filterByGenres, setfilterByGenres] = useState([]);
  const [filterSelectRating, setfilterSelectRating] = useState("");

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
      console.log(aResults);
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

    return aResults;
  }

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
                <NavLink exact to={`/showpage/${data.id}`}>
                  <img src={data.image.medium} alt="movie poster" />
                </NavLink>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
