import React from "react";
import "../3 safe affordable/SafeAffordable.css";
import'./EnjoyOurLife.css'
import Image from "../../assets/images/enjoy your life.png";
function EnjoyOurLife() {
  return (
    <div className="safe-container">
      <div className="eo-section">
        
        <div className="sa-section-content-container">
          <div className="sa-section-header">
            <div>Enjoy Your Life</div> <div> With Us Now!</div> 
          </div>
          <div className="sa-section-content-description">
            Volunteer trail stewardship projects in America’s parks and forests
            designed specifically for college student groups and young
            professionals.
          </div>
          <button className="btn ">Contact Us</button>
        </div>
        <img src={Image} alt="class image" className="sa-image" />
      </div>
    </div>
  );
}

export default EnjoyOurLife;
