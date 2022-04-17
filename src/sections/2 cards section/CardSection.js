import React from 'react'
import './CardSection.css'
import image1 from '../../assets/icons/location.svg'
import image2 from '../../assets/icons/shoe.svg'
import image3 from '../../assets/icons/bag.svg'


export default function CardSection() {
  return (
    <div className='card-section'>
      <div className='card-container'>
      <div className='card'>
        <img src={image1} alt="" />
        <div className='card-title'>Secret Locations</div>
        <div className='card-description'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
        <div className='read-more'>Read More</div>
      </div>
      <div className='card'>
        <img src={image2} alt="" />
        <div className='card-title'>Safe Adventure</div>
        <div className='card-description'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
        <div className='read-more'>Read More</div>
      </div>
      <div className='card'>
        <img src={image3} alt="" />
        <div className='card-title'>Professional Hikers</div>
        <div className='card-description'>Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
        <p   className='read-more'> Read More</p>
      </div>
      </div>
      <p className='card-section-footer'>Don’t hesitate to contact us to get better Information. <span className='card-footer-highlights'> EXPLORE ALL TREKKING.</span></p>
      
    </div>
  )
}
