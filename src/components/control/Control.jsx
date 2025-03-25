import React from 'react'
import img1 from "../../assets/svg/control1.svg"
import img2 from "../../assets/svg/control2.svg"
import img3 from "../../assets/svg/control3.svg"
import heart from "../../assets/svg/heart.svg"
import uzel from "../../assets/svg/uzel.svg"
import uzel2 from "../../assets/svg/uzel2.svg"
import next from "../../assets/svg/next.svg"
import star from "../../assets/svg/star.svg"




import "./control.scss"

function Control() {
  return (
    <div className='control'>
      <h1>Контроле качества</h1>
      <div className="control-content">
        <div className="control-card">
            <img src={img1} alt="" className='card-img' />
            <h2>Лучшие ингредиенты</h2>
      <img src={heart} alt="" className='control-absolute heart'/>
        </div>
      <img src={next} alt="" className='control-absolute next1'/>
        <div className="control-card">
            <img src={img2} alt="" className='card-img' />
            <h2>Опытные кондитеры</h2>
      <img src={star} alt="" className='control-absolute star1'/>
      <img src={star} alt="" className='control-absolute star2'/>
      <img src={star} alt="" className='control-absolute star3'/>
      <img src={star} alt="" className='control-absolute star4'/>
      <img src={uzel2} alt="" className='control-absolute uzel1'/>
      <img src={uzel2} alt="" className='control-absolute uzel2'/>
      <img src={uzel2} alt="" className='control-absolute uzel3'/>
        </div>
      <img src={next} alt="" className='control-absolute next'/>
        <div className="control-card">
            <img src={img3} alt="" className='card-img'/>
            <h2>Хорошая рецептура</h2>
      <img src={uzel} alt="" className='control-absolute uzel'/>
        </div>
      </div>
    </div>
  )
}

export default Control
