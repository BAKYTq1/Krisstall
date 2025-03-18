import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/images/banner1.png"
import banner2 from "../../assets/images/banner2.png"
import banner3 from "../../assets/images/banner3.png"




import "./block1.scss"

function Block1() {
  return (
    <div className='carousel'>
         <Carousel >
         <Carousel.Item>
        <img src={banner3} alt="" />
      </Carousel.Item>
         <Carousel.Item>
        <img src={banner2} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={banner1} alt=""  width={1400}/>
      </Carousel.Item >

    </Carousel>
    </div>
  )
}

export default Block1
