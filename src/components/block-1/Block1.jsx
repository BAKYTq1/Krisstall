import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/images/banner1.png"
import banner2 from "../../assets/images/banner2.png"
import banner3 from "../../assets/images/banner3.png"
import tort from "../../assets/images/tort.png"
import lineX from "../../assets/svg/lineX.svg"
import heart2 from "../../assets/svg/heart2.svg"
import china from "../../assets/svg/china.svg"
import line from "../../assets/svg/line.svg"
import volna from "../../assets/svg/volna.svg"
import aksia from "../../assets/svg/aksia.svg"
import aksia2 from "../../assets/svg/3000.svg"
import heart3 from "../../assets/svg/heart3.svg"





import "./block1.scss"

function Block1() {
  return (
    <div className='carousel'>
      <Carousel>
      <Carousel.Item>
      <img src={banner1} alt="" className='banner-img'/>
        <Carousel.Caption className='carousel-content'>
          <div className="zagalovok">
          <h1>Каждую <br />
           пятницу 1+1</h1>
          <p>В соответствии с принципом неопределенности, возмущение <br />
           плотности синхронизует солитон. Расслоение синхронно.</p>
           <img src={tort} alt="" className='tort2 absolute-img' />
            <img src={lineX} alt="" className='lineX absolute-img'/>
            <img src={heart2} alt="" className='heart2 absolute-img'/>
            <img src={tort} alt="" className='tort1 absolute-img'/>
            <img src={china} alt="" className='china absolute-img'/>
            <img src={volna} alt="" className='volna absolute-img'/>
            <img src={aksia} alt="" className='aksia absolute-img'/>  
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner1} alt=""className='banner-img' />
      <Carousel.Caption className='carousel-content'>
          <div className="zagalovok2">
            <p>Оптовикам</p>
          <h1>Закажи на 65 тыс. в месяц <br />
          получи бесплатно пирожных</h1>
          <p>Или любой другой продукции на 3000руб</p>
            <img src={banner2} alt="" className='banner2 absolute-img'/>
          <img src={aksia2} alt="" className='aksia2 absolute-img' />
            <img src={heart3} alt="" className='heart3 absolute-img' />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={banner1} alt="" className='banner-img'/>
      <Carousel.Caption className='carousel-content'>
          <div className="zagalovok3">
          <h1>Для оптовых покупателей <br />
           специальные ценовые <br />
            предложения</h1>
          <p>Узнай больше в личном кабинете</p>
            <img src={banner3} alt="" className='banner3 absolute-img' />
            <img src={heart3} alt="" className='heart3 absolute-img'/>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Block1
