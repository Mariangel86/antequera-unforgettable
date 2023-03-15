import React, {useState,useEffect} from "react";
import Item from "./Item.js";
import ItemDetail from "./ItemDetail.js";

const ItemDetalleContenedor= () => {
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

    return(
    <ItemDetail productos={productos}/>
    );
    }

export default ItemDetalleContenedor;