import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail.js";

const ItemDetalleContenedor = () => {
  const [productos, cambiarProductos] = useState({});

  useEffect(() => {
    const establecerProductos = async () => {
      try {
        const results = await fetch("./productos.json")
        const data = await results.json();
        cambiarProductos(data);

      } catch (error) {
        console.log(error);
      }
    }



    establecerProductos();
  }, [])

  return (
    <ItemDetail productos={productos} />
  );
}

export default ItemDetalleContenedor;