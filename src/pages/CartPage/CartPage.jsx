import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeItem 
} from '../../redux/cart/cartSlice.js';
import './CartPage.scss';
import { IoIosAdd } from "react-icons/io";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { TiDeleteOutline } from "react-icons/ti";
import { PiShoppingCartBold } from "react-icons/pi";





function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">
      
      <div className='Carttext'>
      <span><PiShoppingCartBold />
      </span>
      <h1>Корзина</h1>
      </div>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <span><PiShoppingCartBold /></span>
          <p>Ваша корзина пуста</p>
          <Link to="/" className="back-to-shop">Вернуться к покупкам</Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="item-info">
                  <div className='Title'>
                  <h3>{item.title}</h3>
                  <p>{item.gram ? item.gram : 200} гр.</p>
                  </div>
                  <div className='price-info'>
                  <p> Цена за шт - {item.price}сом</p>
                  <p> Цена за все - {item.quantity}x = {item.price * item.quantity} сом</p>
                  </div>
                  
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleDecrement(item.id)}
                      className="quantity-btn"
                    >
                      <HiMiniMinusSmall />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => handleIncrement(item.id)}
                      className="quantity-btn"
                    >
                      <IoIosAdd />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="remove-btn"
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div>
            <span className='allProduct'>Всего товаров: {totalItems} шт</span>
            <div>

            <button className="checkout-button">Оформить заказ</button>
            <Link to="/" className="continue-shopping">Продолжить покупки</Link>
            </div>
            </div>
            <div className="summary-row">
            <h2>Сумма заказа: <span>{totalPrice} сом</span></h2>
            <div className='free'>
              <span>Доставка:</span>
              <span>Бесплатно</span>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
