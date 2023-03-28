import {BsFillCartPlusFill} from 'react-icons/bs';
import React from 'react';
import './CartWidget.css';
import { NavLink } from 'react-router-dom';
import { UseContextCarro } from './Contexts/CartContext';

const CartWidget = () => {
  const {TotalProductos}=UseContextCarro();
  return (
    <NavLink to="/cart" className='carrito'>
    <BsFillCartPlusFill/>
    <span>{TotalProductos()|| ''}</span>
    </NavLink >
  )
}

export default CartWidget;