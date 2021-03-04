import React from "react";
import propTypes from "prop-types"

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ?"verdadero" :"falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + "  " + props.objeto.edad}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}
Propiedades.defaultProps={
    porDefecto:"las props"
}
Propiedades.propTypes={
    numero:propTypes.number.isRequired,
}