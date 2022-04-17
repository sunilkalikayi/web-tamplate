import React from 'react'
import './BePrepared.css'
import Image from '../../assets/images/be prepared image.png'
export default function BePrepared() {
  return (
    <div className='section'>
      <div className='section-content-container'>
        <div className='section-header'>Be prepared for the mountains and beyond.</div>
        <div className='section-content-description'>Are you looking for amazing hiking travel? Don’t worry! We got it for you!</div>
        <div className='btn-section'>
          <button className='btn'>Contact Us</button>
          <button className='btn'>Watch Video</button>
        </div>
      </div>
      <img src={Image} alt="class image" className='be-prepated-image'/>
    </div>
  )
}
