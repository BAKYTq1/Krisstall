import React from 'react';
import './cart.scss';
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartSlice';

function Cart({ data }) {
  const dispatch = useDispatch();
  const truncateDescription = (description) => {
    if (description.length > 6) {
      return description.slice(0, 40) + "...";
    }
    return description;
  };
  const handleAddToCart = () => {
    dispatch(addItem({
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
      gram: data.gram,
      callories: data.callories,
    }));
  };

  return (
    <div className='cart'>
        <div className='cart-img'>
            <img src={data.image} alt="" />
            <p>{data.gram} гр.</p>
            <p>{data?.callories ? `${data.callories} ккал.` : `${data.kg} кг`}</p>
        </div>
        <div className='cart-text'>
            <div>
                <h3>{data.title}</h3>
                <h4>{data.price} сом</h4>
            </div>
            <p>{truncateDescription(data.description)}</p>
            <button className='cart-button' onClick={handleAddToCart}>
                <IoCartOutline />
                <p>В корзину</p>
            </button>
        </div>    
    </div>
  );
}

export default Cart;