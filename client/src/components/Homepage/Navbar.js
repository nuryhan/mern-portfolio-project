import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80,
    });
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeNavbar = () => {
    if (toggle === true) {
      setToggle(false);
    }
  };

  return (
    <div className="nav-container">
      <nav>
        <div className="logoBtn">
          <Link to="/" onClick={() => scrollToElement("Home")}>
            {/* <img src={require("../../images/logo.png")} alt="Logo" /> */}
            <h3>Logo</h3>
          </Link>

          <div className="btn" onClick={handleToggle}>
            <div className={toggle ? "bar1 animatedBar" : "bar1"}></div>
            <div className={toggle ? "bar2 animatedBar" : "bar2"}></div>
            <div className={toggle ? "bar3 animatedBar" : "bar3"}></div>
          </div>
        </div>

        <div className="links-container">
          <ul
            className={toggle ? "links new-links" : "links"}
            onClick={closeNavbar}
          >
            <li onClick={() => scrollToElement("Home")}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => scrollToElement("About")}>
              <Link to="/">About</Link>
            </li>
            <li onClick={() => scrollToElement("Education")}>
              <Link to="/">Education</Link>
            </li>
            <li onClick={() => scrollToElement("Experience")}>
              <Link to="/">Experience</Link>
            </li>
            <li onClick={() => scrollToElement("Projects")}>
              <Link to="/">Projects</Link>
            </li>
            <li onClick={() => scrollToElement("Contact")}>
              <Link to="/">Contact</Link>
            </li>

            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
