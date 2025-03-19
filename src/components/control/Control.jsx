import React from 'react'
import img1 from "../../assets/svg/control1.svg"
import img2 from "../../assets/svg/control2.svg"
import img3 from "../../assets/svg/control3.svg"




import "./control.scss"

function Control() {
  return (
    <div className='control'>
      <h1>Контроле качества</h1>
      <div className="control-content">
        <div className="control-card">
            <img src={img1} alt="" />
            <h2>Лучшие ингредиенты</h2>
        </div>
        <div className="control-card">
            <img src={img2} alt="" />
            <h2>Опытные кондитеры</h2>
        </div>
        <div className="control-card">
            <img src={img3} alt="" />
            <h2>Хорошая рецептура</h2>
        </div>
      </div>
    </div>
  )
}

export default Control
