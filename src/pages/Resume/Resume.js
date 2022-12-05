import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Button from "../../components/button/Button";
import "./Resume.css";
import { Fade } from "react-reveal";
// pdf is located at https://share.180811.xyz/api/raw/?path=/Resume.pdf
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="resume-main">
        <Header theme={this.props.theme} />
        <div className="resume-body-div">
          <Fade bottom duration={2000} distance="40px">
            <div className="resume-heading-div">
              <div className="resume-heading-text-div">
                <h1
                  className="resume-heading-text"
                  style={{ color: theme.text }}
                >
                  My Resume
                </h1>
                <p
                  className="resume-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  This is preview of my resume. You can download it from the
                  bottom below:
                </p>
                <div className="resume-button-div">
                <Button
                  text="Download"
                  className="resume-button"
                  href="https://share.180811.xyz/api/raw/?path=/Resume.pdf"
                  newTab={true}
                  theme={theme}
                />
                </div>
              </div>
            </div>
          </Fade>
          <div className="resume-pdf-div">
            <Document
              file="https://share.180811.xyz/api/raw/?path=/Resume.pdf"
            >
              <Page pageNumber={1} />
              <Page pageNumber={2} />
            </Document>
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
