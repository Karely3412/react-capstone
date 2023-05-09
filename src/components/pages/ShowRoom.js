/**
 * PLAN -> TEST EVERY STEP OF PLAN -> REPEAT
 * 1.- on show click send the showid in the url
 *  DONE
 * 2.- getting the show id from the url that was sent from gallery page to showpage.
 * DONE
 * 3.-Fetch(url) + the number of id "?"  from the url
 * DONE
 * 4.- Set show data to fetched info
 * DONE
 * 5.- added show data to jsx
 *
 *
 */

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShowPage() {
  const [showData, setShowData] = useState({});
  let { showid } = useParams();

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows/" + showid).then((res) => {
      setShowData(res.data);
    });
  }, [showid]);

  return (
    <div className="main-showpage">
      <div className="content-container">
        <div className="context-container">
          <div className="context-wrap">
            <h6 className="title">{showData?.name}</h6>
          </div>

          <div className="context-wrap">
            <h6>Rating</h6>
            <p>{showData?.rating?.average}</p>
          </div>

          <div className="context-wrap">
            <h6>Runtime:</h6>
            <p>{showData?.runtime}</p>
          </div>

          <div className="context-wrap">
            <h6>Premiered:</h6>
            <p>{showData?.premiered}</p>
          </div>

          <div className="context-wrap">
            <h6>Schedule:</h6>
            <p>{showData?.schedule?.days}</p>
          </div>

          <div className="context-wrap">
            <h6>Time:</h6>
            <p>{showData?.premiered?.time}</p>
          </div>

          <div className="context-wrap">
            <h6>Status:</h6>
            <p>{showData?.status}</p>
          </div>
        </div>
        <div className="img-container">
          <img src={showData?.image?.original} alt="movie poster" />
        </div>
      </div>
      <div className="btm-content-wrap">
        <div className="context-wrap">
          <h6 className="title">Extra Info</h6>
        </div>

        <div className="context-wrapper">
          <h6>Summery:</h6>
          <p>{showData?.summary}</p>
        </div>

        <h6>Type:</h6>
        <p>{showData?.type}</p>
        <div className="context-wrap">
          <h6>Previous Episode:</h6>
          <p>{showData?.links?.previousepidsode}</p>
        </div>
        <div className="context-wrap">
          <h6>Current Episode:</h6>
          <p>{showData?.links?.self}</p>
        </div>
        <div className="context-wrap">
          <h6>Language:</h6>
          <p>{showData?.language}</p>
        </div>
        <div className="context-wrap">
          <h6>Network:</h6>
        </div>
        <div className="context-wrap">
          <p>{showData?.network?.name}</p>
          <p>{showData?.network?.country?.timezone}</p>

          <p>{showData?.network?.name}</p>
          <p>{showData?.network?.officialSite}</p>
        </div>
      </div>
    </div>
  );
}
export default ShowPage;
