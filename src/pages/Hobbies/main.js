import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BlogsImg from "../contact/BlogsImg";
import Button from "../../components/button/Button";

import { Fade } from "react-reveal";
import "./style.css";
import { images } from "../../portfolio.js";

class Reflectiom extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <h1 className="heading-text" style={{ color: theme.text }}>
            Hobbies
          </h1>
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${images["ace"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  Vocaloid
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I love vocoloid and virtual signers, my favorite is Luo Tianyi. 
                </p><p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Need to mention there, I included some other softwares such as ACE Vitural Signer , UTAU and Synthesizer V. All of them are great tools to create music.
                  </p><p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I love listening songs by those vitural signers. I've also tryin to create some songs by myself.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <p>———————————————————————————————</p>
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  Blogs
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I wrote my own blogs for hobbies, and I have some artical for a student orgnication called Student Network Center to share some tips.
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href="https://hexo.180811.xyz/"
                    theme={theme}
                    className="umami--click--blogsite-btn-in-contact-page"
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${images["teaching"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <p>———————————————————————————————</p>
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  Make tutorials
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I love to Make tutorials, that make me feel needed.
                </p><p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  I had recorded more than 50 videos to teach my club members how to use some software, such as algin in Word, use of Mathtype and AxMath.
                  </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Click to watch some tutorials"
                    newTab={true}
                    href="https://zacfiles.180811.xyz/zh-CN/"
                    theme={theme}
                    className="umami--click--blogsite-btn-in-contact-page"
                  />
                </div>
              </div>
            </div>
          </Fade>        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Reflectiom;
