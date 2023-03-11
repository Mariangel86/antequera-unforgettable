import React, {useState} from 'react';

const ContadorFuncional = (props) => {
    const [cuenta, CambiarCuenta ] = useState (0);
    const incrementar = (cantidad) =>CambiarCuenta(cuenta + cantidad);
    const disminuir = (cantidad) => CambiarCuenta(cuenta - cantidad);

return (
<div>
    <h2>Contador: {cuenta}</h2>

<button
onClick={() => incrementar (props.cantidadAincrementar)}>

        Incrementar
    </button>
<button
onClick={() => disminuir (props.cantidadAdisminuir)}>
        Disminuir
    </button>
    </div>
);
}

export default ContadorFuncional;