import React from 'react'
import logo1 from "../../assets/svg/logo1.svg"
import logo2 from "../../assets/svg/logo2.svg"
import { CiFileOff } from "react-icons/ci";
import "./desktop.scss"

function Desktop() {
  return (
    <div className='content'>
        <div className='supplier-top'>
            <div className='supplier-logo'>
                <h1>Поставщики</h1>
            </div>
            <ul>
                <li><img src={logo1} alt="" /></li>
                <li><img src={logo2} alt="" /></li>
                <li><img src={logo1} alt="" /></li>
                <li><img src={logo2} alt="" /></li>
                <li><img src={logo1} alt="" /></li>
            </ul>
        </div>
        <div className='supplier-bottom'>
            <div className='main-info'>
               <h1>Документы</h1>
               <p>Турбулентность, по данным астрономических наблюдений, сжимает субсветовой вихрь. Лазер отражает фронт.</p>
               <button>Наша продукция</button>
            </div>
            <div className='cards-info'>
                <div className='card'>
                    <div className='icon'>
                    <CiFileOff />
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'>
                    <CiFileOff />
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'>
                    <CiFileOff />
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'>
                    <CiFileOff />
                    </div>
                </div>


            </div>
        </div>
    
    </div>
  )
}

export default Desktop
