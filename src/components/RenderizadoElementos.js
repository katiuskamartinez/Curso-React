import React, { Component } from "react";
import data from "../herpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.nombre}
      </a>
    </li>
  );
}

export default class RenderizadoElemento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estaciones: ["primareva", "verano", "otoño", "invierno"],
    };
  }
  render() {
    //console.log(data);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.estaciones.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Framewoks frontend javascript</h3>
        <ul>
          {data.framewoks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
