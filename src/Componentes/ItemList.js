import React from 'react';
import ItemDetalle from './ItemDetalle';

const ItemList = ({productos=[]}) => {
  return (
    productos.map(producto => <ItemDetalle key={producto.id} productoDetalle={producto}/>)
  );
}

export default ItemList;