import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LabCard from "../../components/labCard/LabCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  labs,
} from "../../portfolio.js";
import "./Labs.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        {/* labs  */}
        {labs.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="labs-heading-div">
                <div className="labs-heading-text-div">
                  <h1
                    className="labs-heading-text"
                    style={{ color: theme.text }}
                  >
                    {labs.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {labs["subtitle"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {labs.data.map((lab) => {
            return <LabCard lab={lab} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
