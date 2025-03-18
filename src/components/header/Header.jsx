import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/svg/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import "./header.scss"

function Header() {
  return (
    <div className='header'>
      <div className='header-section'>
        <div className='header-logo'>
          <img src={logo} alt="" />
        </div>
        <nav className='header-nav'>
          <div className='catalogg'>
            <div className='icon'> <GiHamburgerMenu /></div>
             <h4>Каталог</h4>
          </div>
          <ul>
          <Link to={"/WholesaleSales"}> <li>Оптовые продажи</li> </Link>
            <li>Продажи в рознице</li>
            <li>Контакты</li>
            <li>Вакансии</li>
            <li>Отзывы</li>
          </ul>

        </nav>
        <div className='header-profile'>
          <button className='profile-btn'>
          <FaRegUser />   Личный кабинет
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header
