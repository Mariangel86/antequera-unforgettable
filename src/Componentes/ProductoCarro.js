import React from "react";
import { UseContextCarro } from "./Contexts/CartContext";

const ProductoCarro = ( {producto} ) =>{
    const {RemoverProducto}= UseContextCarro();
    return (
        <div>
            <img src={producto.image} alt={producto.title}/>
            <div>
                <p> Titulo: {producto.title}</p>
                <p>Cantidad: {producto.cuenta}</p>
                <p>Precio u.: {producto.price}</p>
                <p>Subtotal: ${producto.cuenta * producto.price}</p>
                <button onClick={()=> RemoverProducto(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}
    export default ProductoCarro;