import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCakes } from "../../redux/CakesApi/CakesApi";
import { getOtherApi } from "../../redux/OtherApi/OtherApi";
import Cart from "../Cart/Cart";
import "./style.scss";
import { X } from "lucide-react";
import { CgMenuRight } from "react-icons/cg";
import Blllock2 from "../Bllock2/Blllock2";
import { getCoffeeApi } from "../../redux/Coffeapi/CoffeApi";
function Block2() {
    const dispatch = useDispatch();
    const { data: cakesData, loading: cakesLoading, error: cakesError } = useSelector((state) => state.cakes);
    const { data: otherData, loading: otherLoading, error: otherError } = useSelector((state) => state.other);
    const { data: coffeData, loading: coffeeLoading, error: coffeeError } = useSelector((state) => state.coffee);
    const [activeCategory, setActiveCategory] = useState("cakes");
    const [isOpen, setIsOpen] = useState(false);
    console.log(coffeData);
    
    useEffect(() => {
        if (!cakesData.length) {
            dispatch(getCakes());
        }
    }, [dispatch, cakesData.length]);
 useEffect(() => {
        if (!coffeData.length) {
            dispatch(getCoffeeApi());
        }
 }, [dispatch, coffeData.length]);
    useEffect(() => {
        if (!otherData.length) { 
            dispatch(getOtherApi());
        }
    }, [dispatch, otherData.length]);

    if (cakesLoading || otherLoading) return <p>Загрузка...</p>;
    if (cakesError) return <p>Ошибка: {cakesError}</p>;
    if (otherError) return <p>Ошибка: {otherError}</p>;
    if (coffeeLoading) return <p>Загрузка...</p>;
    if (coffeeError) return <p>Ошибка: {coffeeError}</p>;

    // Фильтруем товары по категории
    const filteredData = activeCategory === "pizza"
    ? otherData.filter((item) => item.category === "Пицца")
    : activeCategory === "coffee"
    ? coffeData.filter((item) => item.ingredients[0] === "Coffee" || item.ingredients[0] === "Espresso")
    : activeCategory === "supy"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Супы")
    : activeCategory === "cakes"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Тортик")
    : activeCategory === "blinchiki"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Блинчики")
    : activeCategory === "salaty"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Салаты")
    : activeCategory === "deserty"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Десерты")
    : activeCategory === "dobavliandsous"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Добавки и соусы")
    : activeCategory === "sendvichi"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Сэндвичи")
    : activeCategory === "combo"
    ? [...cakesData, ...otherData].filter((item) => item.category === "Комбо")
    : activeCategory === "discount"
    ? [...cakesData, ...otherData, ...coffeData].filter((item) => item.price && item.price < 500) // Проверяем наличие price
    : cakesData;

            

    return (
        <div className="api-blocks">
            <Blllock2 setActiveCategory={setActiveCategory} /> {/* Управление фильтром */}
            <div className="boss-cart">
                <div className="discount">
                    <h1>Каталог</h1>
                    <select>
                        <option value="">Сначала дешевле</option>
                        <option value="">Для богачей</option>
                        <option value="">Для Токтогулских</option>
                        <option value="">Для женщин</option>
                    </select>
                    <div className="menu-wrapper">
      <button className="toggle-button" onClick={() => setIsOpen(true)}>
        <CgMenuRight size={24}/> <h6>Меню</h6>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
            <div className="menu-options">
                <h1>Меню</h1>
                <ul>
                    <li className="letnyi"> Летнее меню</li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("cakes")}>Торты</a>
                </li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("coffee")}>Кофе и чай</a>
                </li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("supy")}>Супы</a>
                </li>
                <li>
            <a href="#" onClick={() => setActiveCategory("deserty")}>Десерты</a>
          </li>
          <li>
            <a href="#" onClick={() => setActiveCategory("sendvichi")}>Сендвичи</a>
          </li>
                </ul>
                <ul>
                <li className="letnyi">Летнее меню</li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("blinchiki")}>Блинчики</a>
                </li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("combo")}>Комбо</a>
                </li>
                <li>
                    <a href="#" onClick={() => setActiveCategory("pizza")}>Пицца</a>
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
        </div>
      )}
    </div>
                </div>
                <div className="item-block2">
                {filteredData.length ? (
                    filteredData.map((item) => <Cart key={item.id} data={item} />)
                ) : (
                    <p>Нет товаров в этой категории</p>
                )}
                </div>
            </div>
        </div>
    );
}

export default Block2;
