import React from 'react'
import { useParams } from 'react-router-dom';
import ContadorFuncional from './Componentes/Contador';

const ItemDetail = ({ productos }) => {
  const [irCarro, cambiarIrCarro] = useState(false)
  const onAdd = (cuenta) => {
    cambiarIrCarro(true);
   }

  const { detalleId } = useParams();
  const producto = productos?.find?.((producto) => producto.id === detalleId)
  console.log({ productos, detalleId });
  return (
    <div>
      <img src={producto?.image} alt="" />
      <h1>{producto?.name}</h1>
      <h1>{producto?.price}</h1>

      <h1>{productos.name}</h1>
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
