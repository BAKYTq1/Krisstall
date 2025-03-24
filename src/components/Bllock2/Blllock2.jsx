import React from "react";
import "./style.scss";

function Block2({ setActiveCategory, activeCategory }) { 
  return (
    <div className="menu-block2">
      <h1>Меню</h1>
      <div className="catalog">
        <h2>Летнее меню</h2>
        <ul>
          {[
            { id: "cakes", label: "Торты" },
            { id: "coffee", label: "Кофе" },
            { id: "deserty", label: "Десерты" },
            { id: "combo", label: "Комбо" },
            { id: "sendvichi", label: "Сендвичи" },
            { id: "pizza", label: "Пицца" },
            { id: "blinchiki", label: "Блинчики" },
            { id: "supy", label: "Супы" },
            { id: "salaty", label: "Салаты" },
            { id: "dobavliandsous", label: "Добавки и соусы" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button 
                onClick={() => setActiveCategory(id)}
                className={activeCategory === id ? "active" : ""}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Block2;
