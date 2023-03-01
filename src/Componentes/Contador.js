import React, {useState, useEffect} from 'react'


const ContadorFuncional = (props) => {
    const [cuenta, CambiarCuenta ] = useState (0);
    const incrementar = (cantidad) =>CambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) => CambiarCuenta(cuenta - cantidad);

    useEffect (()=> {
        
    },[])

return (
<div>
    <h1>Contador: {cuenta}</h1>

<button
negro
marginRight
onClick={() => incrementar (props.cantidadAincrementar)}>

        Incrementar
    </button>
<button
negro
onClick={() => disminuir (props.cantidadAdisminuir)}>
        Disminuir
    </button>
    <button ></button> 
    </div>
);
}

export default ContadorFuncional;