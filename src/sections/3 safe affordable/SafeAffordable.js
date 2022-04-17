import React from "react";
import "./SafeAffordable.css";
import Image from "../../assets/images/safe and affordable.png";
function SafeAffordable() {
  return (
    <div className="safe-container">
      <div className="sa-section">
        <img src={Image} alt="class image" className="sa-image" />
        <div className="sa-section-content-container">
          <div className="sa-section-header"><div>Safe,</div> <div>Affordable, And</div> <div>Trusted</div></div>
          <div className="sa-section-content-description">
            Volunteer trail stewardship projects in America’s parks and forests
            designed specifically for college student groups and young
            professionals.
          </div>
          <button className="btn ">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default SafeAffordable;
