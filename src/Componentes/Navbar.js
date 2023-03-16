import React from "react";
import LogoSoft from './assets/LogoSoft.png';
import './Navbar.module.css';
import CartWidget from './CartWidget';
import InicioSesion from "./InicioSesion";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (

<nav>
   <NavLink to='/'><img src= {LogoSoft} alt='Logo'/></NavLink>
     <h1>Menu</h1> 
     <h3>Contact us</h3>
     
     <CartWidget />

     <InicioSesion/>

        <ul>
            <li>
                <NavLink to='/categoria/sabanas'>Sabanas</NavLink>
        </li>
            <li>
            <NavLink to='/categoria/edredones'>Peluches</NavLink>
        </li>
            <li>
            <NavLink to='/categoria/peluches'>Edredones</NavLink>
            </li>
           
         </ul>
        </nav>
    
    )
}

export default NavBar;