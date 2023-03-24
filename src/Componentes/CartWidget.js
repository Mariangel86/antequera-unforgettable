import {BsFillCartPlusFill} from 'react-icons/bs';
import React from 'react';
import './CartWidget.css';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
  return (
    <NavLink to="/cart" className='carrito'>
    <BsFillCartPlusFill/>
    <span>{2}</span>
    </NavLink >
  )
}

export default CartWidget;