import React from "react";
import styled from "styled-components";

const ItemDetalle =({productoDetalle})=>{
    return(
    <ContenedorProductos key={productoDetalle.id}>
        <Imagen src={productoDetalle.image} alt=""/>
        <p>{productoDetalle.name} {productoDetalle.LastName}</p>
        <p>{productoDetalle.price}</p>
    </ContenedorProductos>
    );
}

const Imagen = styled.img`
    width:10%;
`
const ContenedorProductos = styled.div`
	display: flex;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	padding: 20px 0;
    justify-content:center;
    margin-top: 140px;
    float:left
`;
 
export default ItemDetalle;