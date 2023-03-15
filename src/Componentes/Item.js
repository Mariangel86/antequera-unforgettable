import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Item =({productoCategoria})=>{
    const {categoriaId}= useParams();

    const producto= productoCategoria.find((producto)=>producto.id ==categoriaId)
    
    return(
    <Link to={`/categoria/${producto.id}`}><ContenedorProductos>
        <Imagen src={producto.image} alt=""/>
        <p>{producto.name} {producto.LastName}</p>
        <p>{producto.price}</p>
    </ContenedorProductos></Link>
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
 
export default Item;