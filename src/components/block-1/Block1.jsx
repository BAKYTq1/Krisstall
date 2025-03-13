import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner from "../../assets/banner.png"
import banner2 from "../../assets/banner2.png"
import banner3 from "../../assets/banner3.png"
import cakes from "../../assets/cakes.png"


import "./block1.scss"

function Block1() {
  return (
    <div className='carousel'>
         <Carousel className='teg'>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={banner2} alt="" />
        <Carousel.Caption className='carousel-content'>
          <h1>Каждую пятницу<br /> 1+1</h1>
          <p>В соответствии с принципом неопределенности, возмущение <br /> 
          плотности синхронизует солитон. Расслоение синхронно.</p>
          <img src={cakes} alt=""  className='cakes'/>
          <img src={cakes} alt=""  className='cakes2'/>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={banner3} alt="" />
        <Carousel.Caption className='carousel-content'>
        <h1>Каждую пятницу<br /> 1+1</h1>
          <p>В соответствии с принципом неопределенности, возмущение <br /> 
          плотности синхронизует солитон. Расслоение синхронно.</p>
          <img src={cakes} alt=""  className='cakes'/>
          <img src={cakes} alt=""  className='cakes2'/>
        </Carousel.Caption>
      </Carousel.Item >
    </Carousel>
    </div>
  )
}

export default Block1
