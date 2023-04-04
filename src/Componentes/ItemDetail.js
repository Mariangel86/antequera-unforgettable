import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import ContadorFuncional from './Contador';
import {UseContextCarro} from "./Contexts/CartContext";

const ItemDetail = ({ productos }) => {
  const [irCarro, cambiarIrCarro] = useState(false);
  
  const {AgregarProducto}= UseContextCarro();

  const onAdd = (cuenta) => {
    cambiarIrCarro(true);
    AgregarProducto(productos, cuenta);
   }

  //const { detalleId } = useParams();
  //const producto = productos?.find?.((producto) => producto.id === detalleId)
  //console.log({ productos, detalleId });
  return (
    <div>
      <img src={productos.image} alt="" />
      <h1>{productos.name}</h1>
      <h4>{productos.descripcion}</h4>
      {
        irCarro
          ? <Link to='/cart' > Finalizar Su Compra </Link>
          :
          <ContadorFuncional cantidadAincrementar={1} cantidadAdisminuir={1} stock={8} onAdd={onAdd} initial={1} />
      }
    </div>

  )
}

export default ItemDetail;
