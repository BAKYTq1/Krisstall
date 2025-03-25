import React from 'react'
import './style.scss'
import imgLeft from './img/Снимок экрана 2025-03-22 231440.png'
import imgRight from './img/Снимок экрана 2025-03-22 231448.png'
function Quality() {
  return (
    <div className='boss-quality container'>
      <div className='quality-left'>
    <img src={imgLeft} alt="" />
      </div>
      <div className="quality">
        <h2>Качество</h2>
        <p>Турбулентность, по данным астрономических наблюдений, сжимает субсветовой <br /> вихрь. Лазер отражает фронт. Волновая тень, вследствие квантового характера </p>
        <button>Связаться с менеджером</button>
      </div>
      <div className="img-quality">
        <img src={imgRight} alt="" />
        <img src={imgLeft} alt=""  className='img-22'/>
      </div>
    </div>
  )
}

export default Quality
