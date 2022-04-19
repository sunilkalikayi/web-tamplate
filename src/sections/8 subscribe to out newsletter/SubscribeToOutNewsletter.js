import React from "react";
import "./SubscribeToOutNewsletter.css";
import MailIcon from '../../assets/icons/mail.svg'
export default function SubscribeToOutNewsletter() {
  return (
    <div className="subscribe-container">
      <div>
        <div className="subscribe-title">Subscribe to Our Newsletter For Weekly Article Update.</div>
        <div className="subscribe-description">We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
        <div className="form-container">
          <div className="input-box keep-me-center">
            <img src={MailIcon} alt="" />
            <input placeholder="Enter your e-mail address" className="input"/>
          </div>
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
