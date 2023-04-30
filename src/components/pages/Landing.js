import { HashLink as Link } from "react-router-hash-link";

import { FiCheck } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import { FiCast, FiWifi, FiTv } from "react-icons/fi";

function Landing() {
  return (
    <div>
      <div id="backup" className="main">
        <header>
          {/* ****** SECTION DEVIVDERS ******  */}
          <div className="main-title-container">
            <div className="title-container">
              <h6>INCLUDED IN ALL PLANS</h6>
            </div>

            <div className="title-wrapper">
              <h2>All The Entertainment You Love</h2>
            </div>

            <div className="title-container">
              <h3>
                Watch full seasons of exclusively streaming series,
                current-season episodes, hit movies, Connect Plus Originals,
                kids shows, & more.
              </h3>
            </div>
          </div>
        </header>

        {/* ****** SECTION DEVIVDERS ****** */}
        <div className="compact-display-container">
          <div className="content-card-wrapper">
            <div className="content-card">
              <div className="title-container">
                <p>Action</p>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>

              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"
                alt="movie poster"
              />
            </div>
            <div className="content-card">
              <div className="title-container">
                <p>Horror</p>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>

              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/444/1111710.jpg"
                alt="movie poster"
              />
            </div>
            <div className="content-card">
              <div className="title-container">
                <p>Thrillers</p>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>

              <img
                src="	https://static.tvmaze.com/uploads/images/medium_portrait/0/647.jpg"
                alt="movie poster"
              />
            </div>
            <div className="content-card">
              <div className="title-container">
                <p>Romance</p>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>

              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/81/204119.jpg"
                alt="movie poster"
              />
            </div>
            <div className="content-card">
              <div className="title-container">
                <p>Mistery</p>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>

              <img
                src="https://static.tvmaze.com/uploads/images/medium_portrait/357/894990.jpg"
                alt="movie poster"
              />
            </div>
          </div>

          <div className="sub-context-wrapper">
            <p>Premium network add-ons available for an additional cost</p>
          </div>
        </div>

        <div className="icon-wrap">
          <div className="mid-icon">
            <FiWifi className="i" />
          </div>
          <div className="mid-icon">
            <FiTv className="i" />
          </div>
          <div className="mid-icon">
            <FiCast className="i" />
          </div>
        </div>

        {/* ****** Section main containers ****** */}
        <div className="context-container">
          <div className="title-container">
            <h6>
              CONNECT PLUS + LIVE TV, NOW WITH SHOW-HUB AND SPORTS ON DEMAND,
              ALL WITH HD
            </h6>
          </div>

          <div className="title-wrapper">
            <h2>Live TV Makes It Better</h2>
          </div>

          <div className="context-wrapper3">
            <h3>
              Make the switch from cable. Get 85+ top channels on Connect Plus +
              Live TV with your favorite live sports, news, and events - plus
              the entire Connect Plus streaming library. With Unlimited DVR,
              store Live TV recordings for up to nine months and fast-forward
              through your DVR content. Access endless entertainment with
              Show-Hub and live sports with Sports On Demand.
            </h3>
          </div>

          <div className="sub-context-wrapper">
            <p>
              Regional restrictions, blackouts and Live TV terms apply. Access
              content from each service separately. Location data required to
              watch certain content. Unlimited DVR recording is not available
              for on-demand shows.
            </p>
          </div>

          <div className="context-wrapper4">
            <h5>VIEW CHANNELS IN YOUR AREA →</h5>
            {/* MAKE IT HAVE AN UNDERLINE*/}
          </div>
        </div>

        <div className="background-img"></div>

        {/* ****** SECTION DEVIVDERS ****** */}
        <div className="plan-selection">
          {/* ADD HR LINES IN BEWTEEN EACH SECTIONS */}
          <div className="main-title-contain">
            <div className="title-wrapper">
              <h2>Select Your Plan</h2>
            </div>

            <div className="context-wrapper3">
              <h3>
                No hidden fees, equipment rentals, or installation appointments.
              </h3>
            </div>

            <div className="context-wrapper4">
              <h5>Switch plans or cancel anytime.**</h5>
            </div>

            <div className="horiz-rule"></div>
          </div>

          <div className="buttons-section">
            <div className="content-column">
              <div className="text">
                <p>MOST POPULAR</p>
              </div>
              <div className="context-column">
                <h3>30 DAY FREE TRIAL</h3>
                <h5>CONNECT PLUS (With Ads)</h5>
              </div>

              <button>$7.99 / MONTH</button>
            </div>
            <div className="content-column">
              <h3>30 DAY FREE TRIAL</h3>
              <h5>CONNECT PLUS ( NO Ads )</h5>
              <button>$14.99 / MONTH</button>
            </div>
          </div>

          <div className="table-content">
            <thead>
              <th>Monthly Price</th>
              <th>$7.99/mo.</th>
              <th>$14.99/mo.</th>
            </thead>

            <div className="horiz-rule"></div>

            <tbody>
              <tr>
                <th>Streaming Library with tons of TV episodes and movies</th>
                <td>
                  <FiCheck className="check" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>Most new episodes the day after they air†</th>
                <td>
                  <FiCheck className="check" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>Access to award-winning Connect Plus Originals</th>
                <td>
                  <FiCheck className="check" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>
                  Watch on your favorite devices, including TV, laptop, phone,
                  or tablet
                </th>
                <td>
                  <FiCheck className="check" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>Up to 6 user profilesUp to 6 user profiles</th>
                <td>
                  <FiMinus className="minus" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>Watch on 2 different screens at the same time</th>
                <td>
                  <FiCheck className="check" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>No ads in streaming libraryNo ads in streaming library</th>
                <td>
                  <FiMinus className="minus" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>

              <div className="horiz-rule"></div>

              <tr>
                <th>Download and watchDownload and watch</th>
                <td>
                  <FiMinus className="minus" />
                </td>
                <td>
                  <FiCheck className="check" />
                </td>
              </tr>
              <div className="horiz-rule"></div>
            </tbody>
          </div>
          <div className="sub-context-wrapper">
            <p>
              †For current-season shows in the streaming library only **Switches
              from Live TV to Connect Plus take effect as of the next billing
              cycle
            </p>
          </div>

          <div className="horiz-rule"></div>

          <div className="icon-wrapper">
            <Link to="/#backup">
              <FiChevronsUp className="check" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
