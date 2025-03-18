import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <ul>
      <Link to={"/WholesaleSales"}>
        <li>Оптовые продажи</li>
      </Link>

        </ul>
      </nav>
      header
    </div>
  )
}

export default Header
