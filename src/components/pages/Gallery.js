import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery() {
  const [showData, setshowData] = useState([]);
  const [filterSelectGenre, setFilterSelectGenre] = useState("");
  const [filterByGenres, setfilterByGenres] = useState([]);
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
      aResults = showData;
    } else {
      aResults = showData.filter((data) =>
        data.genres.includes(filterSelectGenre)
      );
    }
    return aResults;
  }

  function changeFilterGenre(event) {
    setFilterSelectGenre(event.target.value);
  }

  // const renderGenTitle = () => {
  //   return showData.map((title) => {
  //     return (
  //       <div key={title.id} style={{ color: "$orange" }}>
  //         {" "}
  //         (title.genres.name){" "}
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="main-gallery">
      <div className="filter-container">
        <select value={filterSelectGenre} onChange={changeFilterGenre}>
          <option value="">Genres</option>
          {filterByGenres.map((data) => {
            return <option>{data}</option>;
          })}
        </select>
        {/* <div className="genres-title">{renderGenTitle()} </div> */}
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
