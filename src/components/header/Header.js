import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--go-home-from-menu"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="https://share.180811.xyz/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--resume-from-menu"
                >
                  Resume
                </a>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/academicplan"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--Academicplan-from-menu"
                >
                  Academic Related
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <a href="/#/education">Education</a>
                  <a href="/#/classes">Classes</a>
                  <a href="/#/labs">Labs</a>
                </div>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--experience-from-menu"
                >
                  Experience
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <a href="/#/academicplan">Study</a>
                  <a href="/#/essay">Essay</a>
                  <a href="/#/projects">Projects</a>
                  <a href="/#/Volunteer">Volunteer</a>
                </div>
              </li>
              <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--opensource-from-menu"
                >
                  Open Source
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink
                  to="/others"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--others-from-menu"
                >
                  Others
                  <i className="fa fa-caret-down"></i>
                </NavLink>
                <div className="dropdown-content">
                  <a href="/#/interests">Interests</a>
                  <a href="/#/reflection">Reflection</a>
                  <a href="/#/learningphilosophy">Learning Philosophy</a>
                </div>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  className="umami--click--contact-from-menu"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
