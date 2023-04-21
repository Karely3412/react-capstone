import { NavLink } from "react-router-dom";

import { FiSlack } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiHexagon } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function SideNav() {
  return (
    <div>
      <div className="side-nav-main">
        <div className="content-container">
          <div className="context-wrap">
            <NavLink style={{ textDecoration: "none" }} exact to="/">
              <p>Film Plus</p>
            </NavLink>
            <NavLink exact to="/">
              <FiSlack className="logo" />
            </NavLink>
          </div>

          <ul>
            <li>
              <NavLink exact to="/">
                <FiHome className="home" />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/gallery">
                <FiHexagon className="gallery" />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                <FiUser className="about" />
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                <FiMail className="contact" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="horiz-rule"></div>

        {/* <div className="content-container">
          <div className="context-wrap">
            <p>Home</p>
            <div className="icon-wrap">
              <FiHome className="home" />
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="context-wrap">
            <p>Gallery</p>
          </div>
          <div className="icon-wrap">
            <FiHexagon className="gallery" />
          </div>
        </div>

        <div className="content-container">
          <div className="context-wrap">
            <p>About</p>
          </div>
          <div className="icon-wrap">
            <FiUser className="about" />
          </div>
        </div>

        <div className="content-container">
          <div className="context-wrap">
            <p>Contact</p>
            <div className="content-wrap">
              <FiMail className="contact" />
              <div className="bubble"></div>
              //this will have the bubble with 24 w/red background
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SideNav;
