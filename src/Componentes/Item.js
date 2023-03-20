import React from "react";
import styled from "styled-components";
import {Link } from "react-router-dom";

const Item =({producto})=>{
    
    return(
    <Link to={`${producto.id}`}>
        <ContenedorProductos>
        <Imagen src={producto.image} alt=""/>
        <p>{producto.name} {producto.LastName}</p>
        <p>{producto.price}</p>
    </ContenedorProductos>
    </Link>
    );
};

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
 
export default Item;