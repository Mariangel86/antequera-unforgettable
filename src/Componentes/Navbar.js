import React from "react";
import LogoSoft from './assets/LogoSoft.png';
import './Navbar.module.css';
import CartWidget from './CartWidget';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (

<nav>
   <img src= {LogoSoft} alt='Logo'/>
     <h1>Menu</h1> 
     <h3>Contact us</h3>
     
     <CartWidget />

        <BotonInicio>
            Inicia Sesion
        </BotonInicio>

        <ul>
            <li>
                <NavLink to='/categoria'>Sabanas</NavLink>
        </li>
            <li>
            <NavLink to='/categoria'>Peluches</NavLink>
        </li>
            <li>
            <NavLink to='/categoria'>Edredones</NavLink>
            </li>
           
         </ul>
        </nav>
    
    )
}
const BotonInicio = styled.button`
margin-left:60rem`

export default NavBar;