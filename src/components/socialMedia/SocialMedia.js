import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media) => {
        return (
          <OverlayTrigger
            key={media.name}
            placement={"top"}
            style={{ marginBottom: "5px" }}
            overlay={
              <Tooltip id={`tooltip-top`}>
                <strong>{`Visit my ${media.name}`}</strong>
              </Tooltip>
            }
          >
            <a
              href={media.link}
              className={`icon-button`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper {...media} {...props}>
                <i className={`${media.fontAwesomeIcon}`}></i>
              </IconWrapper>
              {/* <span></span> */}
            </a>
          </OverlayTrigger>
        );
      })}
    </div>
  );
}
