import React, {useEffect, useState} from 'react';
import Titulo from './Titulo';
import './ItemListContainer.css'
import ContadorFuncional from './Contador';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const [productos, cambiarProductos ] = useState ([]);

  const establecerProductos = async()=> {
    try {
    const results = await fetch ("/home/mariangelconcepcion53/antequera-unforgettable/src/Componentes/productos.json")
    const data= await results.json();
    cambiarProductos(data);
  }catch (error) {console.log(error);
  }}
  useEffect(()=>{
    establecerProductos();
  },[])
    
    const handleClick = () => {
        alert("Click");
      };

  return (
  <div>
    <ItemList productos={productos}/>
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