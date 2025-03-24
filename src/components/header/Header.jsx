import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/svg/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import "./header.scss"
import { IoCartOutline } from "react-icons/io5";

import { SlClose } from "react-icons/sl";
function Header() {
  const [open, setOpen] = useState(false)
  const [delet, setDelet] = useState(<GiHamburgerMenu />)
   useEffect(() => {
    setDelet(open? <SlClose /> : <GiHamburgerMenu />)
  }, [open])
  return (
    <div className='header'>
      <div className='header-section'>
          <button onClick={() => setOpen(!open)} className='catalogg'>
            <div className='icon'> <GiHamburgerMenu /></div>
             <h4>Каталог</h4>
          </button>
        <div className='header-logo'>
         <Link to={'/'}><img src={logo} alt="" /></Link>
        </div>
        <nav className='header-nav'>
          <ul>
          <Link to={"/WholesaleSales"}> <li>Оптовые продажи</li> </Link>
            <Link to={'prodaji'}><li>Продажи в рознице</li></Link>
            <li>Контакты</li>
            <Link to={'kachestvo'}><li>Качесвто</li></Link>
            <li>Отзывы</li>
          </ul>
        </nav>
        <div className="header-profile">
          <button className="profile-btn">
            <FaRegUser /> <h6>Личный кабинет</h6>
          </button>
          <button onClick={() => setOpen(!open)} className='catalogg-2'>
             {delet}
          </button>
        </div>
        <span><IoCartOutline />
        </span>
      </div>
      { open && <div  className='click-btn-header'>
        <ul>
          <Link to={"/WholesaleSales"}> <li>Оптовые продажи</li> </Link>
            <Link to={'prodaji'}><li>Продажи в рознице</li></Link>
            <li>Контакты</li>
            <li>Вакансии</li>
            <li>Отзывы</li>
          </ul>
          </div>}
            <Link to={'contact'}><li>Контакты</li></Link>
            <Link to={'kachestvo'}><li>Качесвто</li></Link>
            <Link to={'otzyv'}><li>Отзывы</li></Link>
          </ul></div>}
    </div>
  );
}

export default Header;