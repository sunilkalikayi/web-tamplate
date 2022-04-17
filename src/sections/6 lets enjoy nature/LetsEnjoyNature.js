import React from 'react'
import Image from '../../assets/images/lets enjoy nature with us.png'
import './LetsEnjoyNature.css'
export default function LetsEnjoyNature() {
  return (
    <div className="safe-container">
      <div className="le-section">
        <img src={Image} alt="class image" className="sa-image" />
        <div className="sa-section-content-container">
          <div className="sa-section-header"><div>Let’s Enjoy </div> <div>Nature With Us</div> </div>
          <div className="sa-section-content-description">
            Volunteer trail stewardship projects in America’s parks and forests
            designed specifically for college student groups and young
            professionals.
          </div>
          <button className="btn ">Contact Us</button>
        </div>
      </div>
    </div>
  )
}
