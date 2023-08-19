import React from "react";
import "./Footer.css";
import { FooterContainer, FooterLink, SocialLogo, SocialiconLink, WebsiteRights } from "./FooterElements";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <div className="footer-wrap">
        <div className="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="Footer-link-title">About Us</h1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Inverstors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </div>

            <div className="footer-link-items">
              <h1 className="Footer-link-title">About Us</h1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Inverstors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </div>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="Footer-link-title">About Us</h1>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Inverstors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </div>

            <div className="footer-link-items">
              <h1 className="Footer-link-title">Social Media</h1>
              <FooterLink to="/signin">Instagram</FooterLink>
              <FooterLink to="/signin">Facebook</FooterLink>
              <FooterLink to="/signin">Twitter</FooterLink>
              <FooterLink to="/signin">Youtube</FooterLink>
              <FooterLink to="/signin">Email</FooterLink>
            </div>
          </div>
        </div>
        <section className="social-media">
            <div className="social-wrap">
                <SocialLogo to='/' onClick={toggleHome}>
                Zero<span style={{color : "#01bf71"}}>C</span>ash
                </SocialLogo>
                <WebsiteRights>Achwak Cherif © {new Date().getFullYear()}
                All rights reserved.
                </WebsiteRights>

                <div className="Social-icons">
                    <SocialiconLink href="/" target="_blank"
                    aria-label="Facebook">
                        <FaFacebook />
                    </SocialiconLink>

                    <SocialiconLink href="/" target="_blank"
                    aria-label="Instagram">
                        <FaInstagram />
                    </SocialiconLink>

                    <SocialiconLink href="//www.linkedin.com" target="_blank"
                    aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialiconLink>
                </div>
            </div>
        </section>
      </div>
    </FooterContainer>
  );
};

export default Footer;
