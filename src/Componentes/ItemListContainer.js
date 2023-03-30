import React, { useEffect, useState } from 'react';
import Titulo from './Titulo';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [productos, cambiarProductos] = useState([]);
  //const { id: categoriaId } = useParams()||{}
  const {categoriaId } = useParams();

 // useEffect(() => {
   // const establecerProductos = async () => {
     // try {
       // const results = await fetch("../productos.json")
       // const data = await results.json();
       // if(categoriaId){
       //   cambiarProductos(data?.filter?.((producto)=> producto.categoria === categoriaId))
       // } else {
         // cambiarProductos(data);
       // }
     // } catch (error) {
       // console.log('Error', error);
     // }
   // }
   // establecerProductos();
//  }, [categoriaId])

  useEffect(() => {
    const  querydb = getFirestore();
  const queryCollection= collection(querydb, 'Productos');
  if (categoriaId){
  const queryFilter = query(queryCollection,where('categoria', '==',categoriaId))
  getDocs(queryFilter)
  .then(resl=> cambiarProductos(resl.docs.map(producto=>({id: producto.id, ...producto.data() })))) 
  } else{
  getDocs(queryCollection)
  .then(resl=> cambiarProductos(resl.docs.map(producto=>({id: producto.id, ...producto.data() }))))
  } 
},[categoriaId])

  return (
    <div>
      <Titulo greeting={props.text} greeting1={props.text1}/>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer;