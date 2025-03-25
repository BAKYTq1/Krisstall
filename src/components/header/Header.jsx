import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/svg/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import "./header.scss"

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className='header'>
      <div className='header-section'>
          <button onClick={() => setOpen(!open)} className='catalogg'>
            <div className='icon'> <GiHamburgerMenu /></div>
             <h4>Каталог</h4>
          </button>
        <div className='header-logo'>
          <img src={logo} alt="" />
        </div>
        <nav className='header-nav'>
          <ul>
          <Link to={"/WholesaleSales"}> <li>Оптовые продажи</li> </Link>
            <Link to={'prodaji'}><li>Продажи в рознице</li></Link>
            <li>Контакты</li>
            <li>Вакансии</li>
            <li>Отзывы</li>
          </ul>

        </nav>
        <div className='header-profile'>
          <Link to="/auth">
          <button className='profile-btn'>
          <FaRegUser />   Личный кабинет
          </button>
          </Link>
         
        </div>

      </div>
      { open && <div  className='click-btn-header'>
        <ul>
          <Link to={"/WholesaleSales"}> <li>Оптовые продажи</li> </Link>
            <Link to={'prodaji'}><li>Продажи в рознице</li></Link>
            <li>Контакты</li>
            <li>Вакансии</li>
            <li>Отзывы</li>
          </ul></div>}
    </div>
  )
}

export default Header
