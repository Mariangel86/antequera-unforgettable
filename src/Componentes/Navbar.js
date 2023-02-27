import React from "react";
import LogoSoft from './assets/LogoSoft.png';
import './Navbar.css';
const NavBar = ({number}) => {

    return (

<nav>
    <img src= {LogoSoft} alt='Logo'/>
     <h1>Menu</h1> 
     <h4>Contact us</h4>
     
     <button className="button1">{number} Carrito</button>

        <button className="button2">
            Inicia Sesion
        </button>

        <ul>
            <li>
                Sabanas
        </li>
            <li>
                Peluches
        </li>
            <li>
                Edredones
            </li>
           
         </ul>

        

        </nav>
    )
}
export default NavBar;