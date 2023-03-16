import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = ({productos}) => {
    const {detalleId}= useParams();
    const producto= productos.find((producto)=>producto.id === detalleId)
  return (
    <div>
        <img src={producto.image} alt=""/>
        <h1>{producto.name}</h1>
        
        </div>
          
  )
}

export default ItemDetail
