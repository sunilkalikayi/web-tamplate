import React from "react";
import comma from "../assets/icons/camas.svg";
import Profile from "../assets/images/profile image.png";
import Star from "../assets/icons/Star.svg";
import "./SliderCard.css";
export default function () {
  return (
    <div className="slilder-card">
      <img src={comma} alt="comma image" className="s-comma" />
      <img src={Profile} alt="card-profile image" />
      <div className="card-title">Omar Gouse</div>
      <div className="s-card-mood">Happy Client</div>
      <div className='s-card-description'>
        “Everyone working in the office is very knowledgeable about all types of
        dental work and options for your individual needs.”
      </div>
      <div className="slide-starts">
        <img src={Star} alt="stars are downloaded" />
        <img src={Star} alt="stars are downloaded" />
        <img src={Star} alt="stars are downloaded" />
        <img src={Star} alt="stars are downloaded" />
        <img src={Star} alt="stars are downloaded" />
      </div>
    </div>
  );
}
