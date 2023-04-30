function ShowPage() {
  return (
    <div className="main-showpage">
      <div className="content-container">
        <div className="context-container">
          <div className="context-wrap">
            <h6 className="title">Name</h6>
          </div>

          <div className="context-wrap">
            <h6>Rating stars:</h6>
            <p>6.5</p>
          </div>

          <div className="context-wrap">
            <h6>Runtime:</h6>
            <p>60 min</p>
          </div>

          <div className="context-wrap">
            <h6>Premiered:</h6>
            <p>2013-06-24</p>
          </div>

          <div className="context-wrap">
            <h6>Schedule:</h6>
            <p>Thursday</p>
          </div>

          <div className="context-wrap">
            <h6>Time:</h6>
            <p>22:00</p>
          </div>

          <div className="context-wrap">
            <h6>Status:</h6>
            <p>Ended</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
            alt="movie-poster"
          ></img>
        </div>
      </div>
      <div className="btm-content-wrap">
        <div className="context-wrap">
          <h6 className="title">Extra Info</h6>
        </div>

        <div className="context-wrapper">
          <h6>Summery:</h6>
          <p>
            Name is the story of a small town that is suddenly and inexplicably
            sealed off from the rest of the world by an enormous transparent
            dome. The town's inhabitants must deal with surviving the
            post-apocalyptic conditions while searching for answers about the
            dome, where it came from and if and when it will go away.
          </p>
        </div>

        <h6>Type:</h6>
        <p>Scripted</p>
        <div className="context-wrap">
          <h6>Previous Episode:</h6>
          <p>https://api.tvmaze.com/episodes/185054</p>
        </div>
        <div className="context-wrap">
          <h6>Current Episode:</h6>
          <p>https://api.tvmaze.com/shows/1</p>
        </div>
        <div className="context-wrap">
          <h6>Language:</h6>
          <p>English</p>
        </div>
        <div className="context-wrap">
          <h6>Network:</h6>
        </div>
        <div className="context-wrap">
          <p>United States</p>
          <p>America/New_York</p>
          <hr />
          <p>CBS</p>
          <p>Offical Site: https://www.cbs.com/</p>
        </div>
      </div>
    </div>
  );
}
export default ShowPage;
