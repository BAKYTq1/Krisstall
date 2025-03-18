import "react";
import "./style.scss";
import Twoblock2 from "./twoblock2/Twoblock2";

function Blllock2({ setActiveCategory }) { // Принимаем setActiveCategory из Block2
  return (
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
  );
}

export default Blllock2;
