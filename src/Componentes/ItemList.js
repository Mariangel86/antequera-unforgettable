import React from 'react'

const ItemList = () => {
  return (
    <div>I{productos.map((producto) => (<h2>{producto.name}</h2>))}</div>
  )
}

export default ItemList;