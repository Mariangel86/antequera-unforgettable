import React,{ useState, useContext } from "react";

const CartContext= React.createContext([]);

export const UseContextCarro = () => useContext(CartContext);

const CartProvider=({children})=>{
    const [irCarro, cambiarIrCarro] = useState([]);

 const LimpiarCarro=()=>cambiarIrCarro([]);

 const EstaEnCarro=(id)=> irCarro.find(producto=>producto.id=== id)? true:false;

 const RemoverProducto=(id)=> cambiarIrCarro(irCarro.filter(producto=> producto.id !== id)) 

 const AgregarProducto=(item, cuenta)=>{
    if (EstaEnCarro(item.id)){
        cambiarIrCarro(irCarro.map(producto=>{
            return producto.id === item.id ? { ...producto, cuenta:producto.cuenta+ cuenta} : producto

        }));
    } else {
        cambiarIrCarro([...irCarro, {...item, cuenta}]);
    }
     
 }


 const PrecioTotal=()=>{
    return irCarro.reduce ((prev, act)=> prev+ act.cuenta*act.price, 0);
 }

 const TotalProductos=()=> irCarro.reduce((acumulador,productoActual)=> acumulador + productoActual.cuenta,0);

    return(
        <CartContext.Provider value={{
            LimpiarCarro,
            EstaEnCarro,
            RemoverProducto,
            AgregarProducto,
            PrecioTotal,
            TotalProductos,
            irCarro
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;