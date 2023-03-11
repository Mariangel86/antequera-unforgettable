import React, {useState,useEffect} from "react";
import ItemDetalle from "./ItemDetalle";

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
    },[]);



    useEffect(()=>{
        let tiempo;
        if(productos=== true){
            tiempo=setTimeout (()=>{
                cambiarProductos(false);
            },2000);

        }return (()=>clearTimeout(tiempo));
    },[productos,cambiarProductos]);

    
    return(
    <ItemDetalle productos={productos}/>
    );
    }

export default ItemDetalleContenedor;