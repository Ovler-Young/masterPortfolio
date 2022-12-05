import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Card from "../../components/Card/Card";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  classes,
} from "../../portfolio.js";
import "./Classes.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        {/* classes  */}
        {classes.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="classes-heading-div">
                <div className="classes-heading-text-div">
                  <h1
                    className="classes-heading-text"
                    style={{ color: theme.text }}
                  >
                    {classes.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {classes["subtitle"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {classes.data.map((card) => {
            return <Card card={card} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
