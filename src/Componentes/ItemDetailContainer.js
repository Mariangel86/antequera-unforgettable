import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";

const ItemDetalleContenedor = () => {
  const [productos, cambiarProductos] = useState({});
  const {detalleId}= useParams();

  //useEffect(() => {
    //const establecerProductos = async () => {
      //try {
        //const results = await fetch("./productos.json")
        //const data = await results.json();
        //cambiarProductos(data);

      //} catch (error) {
        //console.log(error);
      //}
    //}
    //establecerProductos();
  //}, [])


  useEffect(() => {
    const  querydb = getFirestore();
    const queryDoc = doc(querydb, 'Productos', detalleId);
   getDoc(queryDoc)
        .then(resl=> cambiarProductos({id: resl.id, ...resl.data()}))
},[detalleId])

  return (
    <ItemDetail productos={productos} />
  );
}

export default ItemDetalleContenedor;