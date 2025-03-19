import "react";
import "./style.scss";

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
            <a href="#" onClick={() => setActiveCategory("deserty")}>Десерты</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("combo")}>Комбо</a> 
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("sendvichi")}>Сендвичи</a>
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
          <li>
            <a href="#" onClick={() => setActiveCategory("salaty")}>Салаты</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("dobavliandsous")}>Добавки и соусы</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Blllock2;
