import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({productos}) => {
    const {detalleId}= useParams();
    const producto= productos.find((producto)=>producto.id === detalleId)
  return (
    <Link to={`/detalle ${producto.id}`}>
        <img src={producto.image} alt=""/>
        <h1>{producto.name}</h1>
        
        </Link>
          
  )
}

export default ItemDetail
