import React from 'react';
import { useSelector } from 'react-redux';
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import './style.scss';

function Cardd() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='cardd'>
<button>

      <Link to="/cart" className="cart-link">
      <span><IoCartOutline />
      </span>
{totalItems > 0 && <span className="cart-count">{totalItems}</span>}
</Link>
</button>
    </div>
  );
}

export default Cardd;
