import React from 'react';
import './cart.scss';
import { IoCartOutline } from "react-icons/io5";

function Cart({ data }) {
  // Функция для обрезки описания
  const truncateDescription = (description) => {
    if (description.length > 6) {
      return description.slice(0, 40) + "..."; // Обрезаем описание до 6 символов
    }
    return description;
  };

  return (
    <div className='cart'>
        <div className='cart-img'>
            <img src={data.image} alt="" />
            <p>{data.gram} гр.</p>
            <p>
  {data?.callories ? `${data.callories} ккал.` : `${data.kg} кг`}
</p>
        </div>
        <div className='cart-text'>
            <div>
                <h3>{data.title}</h3>
                <h4>{data.price} сом</h4>
            </div>
            <p>{truncateDescription(data.description)}</p> {/* Применяем обрезку к описанию */}
            <button className='cart-button'>
                <IoCartOutline />
                <p>В корзину</p>
            </button>
        </div>    
    </div>
  );
}

export default Cart;
