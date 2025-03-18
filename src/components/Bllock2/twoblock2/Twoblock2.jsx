import React from 'react'

function Twoblock2({setinfo}) {
  return (
    <div>
       <div className="menu-block2">
      <h1>Меню</h1>
      <div className="catalog">
        <h2>Летнее меню</h2>
        <ul>
          <li>
            <a href="#" onClick={() => setActiveCategory("cakes")}>Торты</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("coffee")}>Кофе и чай</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("")}>Напитки</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("combo")}>Комбо</a> 
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("")}>Shoko Go</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("pizza")}>пицца</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("blinchiki")}>Блинчики</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("supy")}>Супы</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Twoblock2
