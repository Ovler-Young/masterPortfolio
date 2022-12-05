import React from "react";
import "./LabCard.css";
import { Fade } from "react-reveal";

export default function LabCard({ lab, theme }) {
  return (
    <div
      className="lab-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="60px">
        <div key={lab.id}>
          <div>
            <div className="lab-name-div">
              <p className="lab-name" style={{ color: theme.text }}>
                {lab.title}
              </p>
            </div>
            <div className="lab-name-div">
              <p className="lab-subtitle" style={{ color: theme.text }}>
                {lab.subtitle}
              </p>
            </div>
            <p className="lab-description" style={{ color: theme.text }}>
              {lab.description}
            </p>
            <div className="lab-details">
              <p
                className="lab-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                {/* Finished on {lab.createdAt.split("T")[0]} */}
              </p>
            </div>
            {/* Add a image, in {lab.image_path} */}
            <img
              className="lab_img"
              src={require(`../../assests/images/${lab.image_path}`)}
              alt={lab.title}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
