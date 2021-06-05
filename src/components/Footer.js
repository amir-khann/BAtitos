import React from "react";
import { Container } from ".";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__content--logo">
            <span>BATITOS</span>
          </div>
          <div className="footer__content--nav">
            <span>Home</span>
            <span>Features</span>
            <span>Contact Us</span>
          </div>
          <div className="footer__content--icons">
            <a href="">
              <TiSocialTwitter size="1.32em" color="#fff" />
            </a>
            <a href="">
              <FaFacebook size="1.32em" color="#fff" />{" "}
            </a>
            <a href="">
              <AiOutlineInstagram size="1.32em" color="#fff" />
            </a>
            <a href="">
              <AiFillYoutube size="1.32em" color="#fff" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
