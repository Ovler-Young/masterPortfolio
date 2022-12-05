import React from "react";
import "./Card.css";
import { Fade } from "react-reveal";

export default function LabCard({ card, theme }) {
  return (
    <div
      className="card-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="60px">
        <div key={card.id}>
          <div>
            <div className="card-name-div">
              <p className="card-name" style={{ color: theme.text }}>
                {card.title}
              </p>
            </div>
            <div className="card-name-div">
              <p className="card-subtitle" style={{ color: theme.text }}>
                {card.subtitle}
              </p>
            </div>
            <p className="card-description" style={{ color: theme.text }}>
              {card.description}
            </p>
            <div className="card-details">
              <p
                className="card-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                {/* Finished on {card.createdAt.split("T")[0]} */}
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
