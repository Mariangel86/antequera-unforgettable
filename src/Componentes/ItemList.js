import React from 'react';
import Item from './Item.js';

const ItemList = ({productos=[]}) => {
  return (
    productos.map(producto => <Item key={producto.id} productoCategoria={producto}/>)
  );
}

export default ItemList;