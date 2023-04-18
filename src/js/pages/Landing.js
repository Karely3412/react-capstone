function Landing() {
  return (
    <div>
      <main>
        <header>
          <div className="main-title-contain">
            <div className="title-container">
              <h6>INCLUDED IN ALL PLANS</h6>
            </div>
            <div className="title-wrapper">
              <h2>All The Entertainment You Love</h2>
            </div>
            <div className="title-container">
              <h6>
                Watch full seasons of <span>exclusively</span> streaming series,
                current-season episodes, hit movies, Hulu Originals, kids shows,
                & more.
              </h6>
            </div>
          </div>
        </header>
        <div className="compact-display-container">
          <div className="icon-wrapper">
            {/* search for icons & add hover */}
          </div>
          <div className="partial-filter-wrapper">
            <div className="filter-dropdown">
              {/* CREATE A DROPDOWN WITH HOVER OVER CHANGING COLOR */}
            </div>
            <div className="content-card">
              <div className="title-container">
                <h6>genera </h6>
                {/* THIS SHOULD BE LAYING ON TOP OF POSTER/IMG */}
              </div>
              {/* we need to get a picutre of each genera and display it with the title & poster w/ a link routing it to the gallery page. */}
            </div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
            <div className="content-card"></div>
          </div>
          <div className="icon-wrapper">
            {/* search for icons & add hover */}
          </div>
          <p>Premium network add-ons available for an additional cost</p>
        </div>
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
          </div>
          <div className="buttons-section"></div>
          <div className="table-content"></div>
          <div className="sub-context-wrapper">
            <p>
              †For current-season shows in the streaming library only **Switches
              from Live TV to Hulu take effect as of the next billing cycle
            </p>
          </div>

          <div className="icon-wrapper">
            {/* UP ARROW ICON to take me back to the top & give it pulsing animation*/}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
