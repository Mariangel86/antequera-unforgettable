import React from "react";

const ItemDetalle =({productoDetalle})=>{
    return(
    <div key={productoDetalle.id}>
        <img src={productoDetalle.image} alt=""/>
        <p>{productoDetalle.name}</p>
        <p>{productoDetalle.price}</p>
    </div>
    );
}
export default ItemDetalle;