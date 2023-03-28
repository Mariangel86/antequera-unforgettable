import React from 'react';
import {UseContextCarro} from './Contexts/CartContext';
import {Link} from 'react-router-dom';
import { getFirestore, addDoc, collection} from 'firebase/firestore';
import ProductoCarro from './ProductoCarro';

const Cart =()=>{
  const {PrecioTotal,irCarro}= UseContextCarro();
  const querydb = getFirestore();
  const Orden={
      comprador:{
          name:'mariangel',
          email: 'mariangel_antequera@hotmail.com',
          telefono:'3001234568',
          direccion: 'xxxxxxxxx'
      },
      Items: irCarro.map(producto=> ({id: producto.id, name: producto.name, price: producto.price, cuenta: producto.cuenta})),
      Total: PrecioTotal(),
  }
  
  const handleClick=()=>{
      const ordenesCollection= collection(querydb, 'Ordenes');
      addDoc(ordenesCollection, Orden)
      .then (({id})=> console.log(id))
  
  }
  
  
      if (irCarro.length ===0){
          return(
              <>
              <p>No hay productos registrados</p>
              <Link to='/'>Hacer Compras</Link>
              </>
          );
      }
  
      return(
          <>
          {
              irCarro.map(producto=> <ProductoCarro key={producto.id} producto={producto}/>)
          }
          <p>
              Total: {PrecioTotal()}
          </p>
          <button onClick={handleClick}>Generar Orden</button>
          </>
          );
  }
  export default Cart;