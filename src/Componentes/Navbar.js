import React from "react";
import LogoSoft from './assets/LogoSoft.png';
import './Navbar.css';
const NavBar = () => {

    return (

<nav>
    <img src= {LogoSoft} alt='Logo'/>

        <h1>Soft Angels</h1>
        

     <h1>Menu</h1>

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

         <button>Carrito</button>

        <button>
            Inicia Sesion
        </button>

        </nav>
    )
}
export default NavBar;