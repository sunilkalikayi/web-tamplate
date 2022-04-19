import React from "react";
import "./Footer.css";
import Logo from '../../assets/icons/logo.svg'
import FaceBook from '../../assets/icons/facebook.svg'
import Twiter from '../../assets/icons/twitter.svg'
import Insta from '../../assets/icons/insta.svg'
export default function Footer() {
  return (
    <di className='footer'>
      <div className="footer-container">
        <di className='footer-content'>
          <img src={Logo} alt="" />
          <div className="footer-content-description">We envision a world where everyone feels welcome in the American hiking community.</div>
          <div className="footer-content-images">
            <img src={FaceBook} alt="face book logo" />
            <img src={Twiter} alt="" />
            <img src={Insta} alt="" />
          </div>
        </di>
        <div className="footer-items" >
          <ul>
            <li className="footer-items-title footer-item">Location</li>
            <li className=" footer-item">America</li>
            <li className=" footer-item">Asia</li>
            <li className=" footer-item">Europe</li>
            <li className=" footer-item">Africa</li>
          </ul>
          <ul>
            <li className="footer-items-title footer-item" >Contact</li>
            <li className=" footer-item">About Me</li>
            <li className=" footer-item">Teams</li>
            <li className=" footer-item">Profile</li>
            <li className=" footer-item">FAQ</li>
          </ul>
          <ul>
            <li className="footer-items-title footer-item">Legals</li>
            <li className=" footer-item">Privacy</li>
            <li className=" footer-item">Disclaimer</li>
            <li className=" footer-item">Terms</li>
            <li className=" footer-item">Company</li>
          </ul>
        </div>
      </div>
      <div className="copy-right">Copyright © 2021. All Right Reserved.</div>
    </di>
  );
}
