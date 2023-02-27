import {BsFillCartPlusFill} from 'react-icons/bs';
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='carrito'>
    <BsFillCartPlusFill/>
    <span>{2}</span>
    </div>
  )
}

export default CartWidget;