import React from 'react'
import SlilderCard from '../../components/SlilderCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ClientSayAboutUs.css'

export default function ClientSayAboutUs() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 1
  };
  return (
    <div className='keep-me-center client-carousel'>
     
      <Slider {...settings}>
       <SlilderCard/>
       {/* <SlilderCard/> */}
       {/* <SlilderCard/> */}
       {/* <SlilderCard/> */}
       {/* <SlilderCard/> */}
    </Slider>
     
    </div>
  )
}
