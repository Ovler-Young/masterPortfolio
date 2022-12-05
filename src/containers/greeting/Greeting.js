import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="📁 Read My Resume(PDF)"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                  className="portfolio-repo-btn umami--click--resume-button-from-home"
                />
              </div>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="📃 View My Portfolio(online)"
                  newTab={true}
                  href="https://read.cv/engineer"
                  theme={theme}
                  className="portfolio-repo-btn umami--click--portfolio-button-from-home"
                />
              </div>
              <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              >
              <div className="portfolio-repo-btn-div">
                <Button
                  text="👇 Scroll Down to Learn More"
                  theme={theme}
                  className="portfolio-repo-btn umami--click--portfolio-button-from-home"
                />
              </div>
              </Link>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
