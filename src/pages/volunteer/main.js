import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import { Fade } from "react-reveal";
import "./stylevol.css";

class Reflectiom extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="vol-main">
        <Header theme={theme} />
        <div className="basic-vol">
          <h1 className="heading-text" style={{ color: theme.text }}>
            Volunteer
          </h1>
          <Fade bottom duration={1000} distance="40px">
            <div className="vol-heading-div">
              <div className="vol-heading-img-div">
                <img src={require(`../../assests/images/zac2.png`)} alt="" />
              </div>
              <div className="vol-heading-text-div">
                <h1 className="vol-heading-text" style={{ color: theme.text }}>
                  Zhadui Academic Club
                </h1>
                <p
                  className="vol-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Reviewed, typeset and proofread materials for advanced
                  mathematics, linear algebra, and inorganic chemistry as a
                  volunteer to help coursemates with exams. Built and maintained
                  the 'BUCTBASE', a free platform for college students to share
                  course materials, which now gains more than 200 users per
                  week. Answer questions for fresh students in the orientation
                  group
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="hobby-heading-div">
              <div className="hobby-heading-text-div">
                <p>———————————————————————————————</p>
                <h1
                  className="hobby-heading-text"
                  style={{ color: theme.text }}
                >
                  Student Network Center
                </h1>
                <p
                  className="hobby-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Volunteered as a computer repair technician in the X-ware
                  event every Friday night.
                </p>
                <p
                  className="hobby-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Built an analysis system for the organization, undertook the
                  task of analyzing data for the ARG game 'Cyber Civilisation
                  Week' and essay competition 'March of Fireworks lantern'.
                </p>
                <p
                  className="hobby-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Hosted the essay competition 'March of Fireworks lantern'
                  website Write questions and host a website in the ARG activity
                  'Cyber Civilisation Week'
                </p>
                <p
                  className="hobby-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Now maintains all hosts in room 319
                </p>
                <div className="hobbysite-btn-div"></div>
              </div>
              <div className="hobby-heading-img-div">
                <img
                  src={require(`../../assests/images/SNC_logo.png`)}
                  alt=""
                  // two times the size of the original image
                  width="400"
                />
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Reflectiom;
