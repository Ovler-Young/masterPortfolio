import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./styleref.css";
import { images } from "../../portfolio.js";

class Reflectiom extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${images["reflection"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  Reflection
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  My study journey has been filled with challenges and successes
                  that have shaped the learning experience. Some of the
                  challenges faced include adjusting to university-level
                  coursework and balancing academic commitments with personal
                  and professional responsibilities. Successes include the
                  ability to develop and apply knowledge.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  As I reflect on my study journey, I am struck by the many
                  challenges and successes that have shaped my learning
                  experience.
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  One of the biggest challenges I have faced was adjusting to
                  the demands of university-level coursework. Coming from a high
                  school environment where I was used to receiving more
                  structured guidance, I found it difficult at first to manage
                  my time and stay on top of my coursework. However, with the
                  help of professors, tutors, and peers, I learned how to set
                  goals, prioritize tasks, and develop effective study habits
                  that have helped me to succeed in my courses.
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Another challenge I have faced is balancing my academic
                  commitments with my personal and professional
                  responsibilities. As a full-time student, I have had to learn
                  how to manage my time effectively and to be flexible in order
                  to meet the demands of my courses and other commitments. This
                  has required me to be organized, to communicate effectively
                  with my professors and peers, and to be proactive in seeking
                  help when needed.
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  One of the biggest successes of my study journey has been my
                  ability to develop and apply my knowledge and skills in
                  real-world contexts. Through internships, co-op programs, and
                  research projects, I have had the opportunity to apply what I
                  have learned in practical settings and to gain valuable
                  insights and experience. These experiences have not only
                  helped me to develop my skills and knowledge, but have also
                  given me the confidence to pursue my passions and to think
                  critically about the world around me.
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Overall, my study journey has been filled with challenges and
                  successes that have helped me to grow both personally and
                  professionally. I am grateful for the opportunity to learn and
                  to pursue my passions, and I am excited to see what the future
                  holds as I continue on my journey of lifelong learning.
                </p>
              </div>
            </div>{" "}
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Reflectiom;
