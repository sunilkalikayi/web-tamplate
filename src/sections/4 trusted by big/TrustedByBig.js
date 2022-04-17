import React from "react";
import Image1 from '../../assets/icons/Travel Advisor.svg'
import Image2 from '../../assets/icons/United Travel.svg'
import Image3 from '../../assets/icons/Travel Channel.svg'
import Image4 from '../../assets/icons/tripraja.svg'
import Image5 from '../../assets/icons/Booking.svg'
import './TrustedByBig.css'
export default function TrustedByBig() {
  return (
   <div> <div className="tb-container">
   <div className="tb-text1">Safe Journey</div>
   <div className="tb-title">Trusted by Big Companies </div>
   <div className="tb-image-cointainer ">
     <div className="space-betweem image-box">
       <img src={Image1} alt="trusted companies icon" />
       <img src={Image2} alt="trusted companies icon" />
       <img src={Image3} alt="trusted companies icon" />
     </div>
     <div className="space-evenly ">
       <img src={Image4} alt="trusted companies icon" />
       <img src={Image5} alt="trusted companies icon" />
     </div>
   </div>
 </div></div>
  );
}
