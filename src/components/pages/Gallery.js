// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";

// import { dropdwn } from "../helper/dropdwn";
// import * as React from "react";
import Fetch from "./utiles/Fetch";
// import filterSelect from "../helper/filterSelect";

function Gallery() {
  // const [showData, setshowData] = useState([]);
  // console.log(showData);
  // // const [filterSelect, setFilterSelect] = useState("");
  // // // const [showGenres, setshowGenres] = useState([]);
  // // const [showGenres, setshowGenres] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://api.tvmaze.com/show/")
  //     .then((res) => {
  //       setshowData(res.data);
  //       // console.log(setshowData);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <div className="main-gallery">
        <div className="filter-container">
          {/* <dropdwn
            filterSelect={filterSelect}
            setFilterSelect={setFilterSelect}
          /> */}
          {/* {showData.map((values, index) => {
            return (
              <div>
                <DropdownButton
                  id="dropdown-item-button"
                  title="Dropdown button"
                >
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    Filt er Shows
                  </Dropdown.Toggle>
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                </DropdownButton>
              </div>
            );
          })} */}
        </div>
        <Fetch />
        {/* <div className="content-card-wrapper">
          {showData.map((values, index) => {
            return (
              <div key={index} className="content-card">
                <div className="title-container">
                  <h3>{values.name}</h3>
                </div>
                <img src={values.image.medium} alt="movie poster" />
                <div className="content-container">
                  <div className="content-wrap">
                    <p>Rated Stars: {values.rating.average}</p>
                  </div>
                  <div className="content-wrap">
                    <p>Runtime: {values.runtime} min.</p>
                  </div>
                </div>
                <div className="horiz-rule"></div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
  // return (
  //     <Fetch />
  //       <filterSelect />
  // );
}

export default Gallery;
