import React, {useEffect}from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { Link } from "react-scroll";
import FeelingProud from "./FeelingProud";
import ReactAudioPlayer from 'react-audio-player';

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
                  // redrect to /resume
                  href="https://portfolio.180811.xyz/#/resume"
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
              duration={600}
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
           <FeelingProud theme={theme} />
           <div className="voice">
           <ReactAudioPlayer
              src="https://share.180811.xyz/api/raw/?path=/for_blog/record.m4a"
              autoPlay={true}
              controls={true}
              preload="auto"

            />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

