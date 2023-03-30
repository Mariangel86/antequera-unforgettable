import React from "react";
import { UseContextCarro } from "./Contexts/CartContext";

const ProductoCarro = ( {producto} ) =>{
    const {RemoverProducto}= UseContextCarro();
    return (
        <div>
            <img src={producto.image} alt={producto.name}/>
            <div>
                <p> Titulo: {producto.name}</p>
                <p>Cantidad: {producto.cuenta}</p>
                <p>Precio u.: {producto.price}</p>
                <p>Subtotal: ${producto.cuenta * producto.price}</p>
                <button onClick={()=> RemoverProducto(producto.id)}>Eliminar</button>
            </div>
        </div>
    )
}
    export default ProductoCarro;