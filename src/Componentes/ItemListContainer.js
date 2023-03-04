import React, {useEffect, useState} from 'react';
import Titulo from './Titulo';
import './ItemListContainer.css'
import ContadorFuncional from './Contador';

const ItemListContainer = (props) => {
  const [productos, CambiarOrdenProductos ] = useState ([]);

  useEffect(() => {
    
  
},[]);
    
    const handleClick = () => {
        alert("Click");
      };

  return (
  <div>
  
    <Titulo greeting={props.text}/>

    <ul>
        <li>Manzana</li>
        <li>Perá</li>
        <li>Uva</li>
      </ul>
      <button className='button1' onClick={handleClick}>Click me</button>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1}/>
      </div>
  )
}

export default ItemListContainer;