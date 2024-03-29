import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>
          934 WRD NEWYORK STREET WEM YUK 21345 79 SM
        </p>
        <p className='p__opensans'>+91 8909804567</p>
        <p className='p__opensans'>+91 7909172627</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='logo' />
        <p className='p__opensans'>
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt='spoon__image'
          className='spoon__image'
          style={{ marginTop: "15px" }}
        />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00 AM - 4:30 PM</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00 AM - 12:30 PM</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gericht, ALL right reserved</p>
    </div>
  </div>
);

export default Footer;
