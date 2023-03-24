import React, { useEffect, useState } from 'react';
import Titulo from './Titulo';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [productos, cambiarProductos] = useState([]);
  const { id: categoriaId } = useParams()||{}

  useEffect(() => {
    const establecerProductos = async () => {
      try {
        const results = await fetch("../productos.json")
        const data = await results.json();
        if(categoriaId){
          cambiarProductos(data?.filter?.((producto)=> producto.categoria === categoriaId))
        } else {
          cambiarProductos(data);
        }
      } catch (error) {
        console.log('Error', error);
      }
    }
    establecerProductos();
  }, [categoriaId])


  return (
    <div>
      <Titulo greeting={props.text} greeting1={props.text1}/>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;