import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./style.css";
import { learningphilosophy } from "../../portfolio.js";

const ContactData = learningphilosophy.contactSection;

class Contact extends Component {
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
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  Learning Philosophy
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  My learning philosophy is centered on lifelong learning and
                  personal growth. I believe in being open to new subjects,
                  proactive in seeking out learning opportunities, and valuing
                  collaboration in the learning process. I am interested in both
                  biochemistry engineering and computer science and plan to
                  pursue opportunities in both fields.
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
                  Lifelong learning is a key component of personal growth and
                  success. It allows us to continually adapt and evolve, and
                  enables us to pursue our passions and interests with a sense
                  of curiosity and openness. As such, I strive to be proactive
                  in seeking out learning opportunities and to remain open to
                  new subjects and ideas. I believe that learning is a
                  collaborative process, and that engaging with others can
                  deepen our understanding and broaden our perspectives.
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  In pursuing my interests in bioprocessing engineering and
                  computer science, I recognize that both fields are constantly
                  evolving and require a strong foundation in math and science.
                  I am committed to staying current with developments in these
                  fields through continued education and professional
                  development, and to learning from experts and colleagues.{" "}
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I also believe that experiential learning is an important
                  aspect of personal growth and development. As such, I value
                  opportunities to apply my knowledge and skills in real-world
                  contexts, such as internships, co-op programs, or research
                  projects. These experiences not only allow me to apply what I
                  have learned in a practical setting, but also provide valuable
                  opportunities to learn from professionals in the field and to
                  gain new insights and perspectives.{" "}
                </p>
              </div>
            </div>
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Overall, my learning philosophy is centered on the belief that
                  learning is a continuous and dynamic process, and that
                  personal growth and development are essential to achieving our
                  goals and living fulfilling lives. I am committed to being
                  proactive in seeking out learning opportunities, valuing
                  collaboration in the learning process, and staying open to new
                  subjects and ideas as I pursue my passions in bioprocessing
                  engineering and computer science.
                </p>
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

export default Contact;
