import React, {useEffect, useState} from 'react';
import Titulo from './Titulo';
import './ItemListContainer.css'
import ContadorFuncional from './Contador';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const [productos, cambiarProductos ] = useState ([]);

  const establecerProductos = async()=> {
    try {
    const results = await fetch ("./productos.json")
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
    <Titulo greeting={props.text}/>
      <ItemList productos={productos}/>
      <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir= {1}/>
      <button onClick={handleClick}>Click me</button>
      </div>
  )
}

export default ItemListContainer;