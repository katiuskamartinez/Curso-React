import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.Sumar = this.Sumar.bind(this);
    this.Restar = this.Restar.bind(this);
  }
  Sumar(e) {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  Restar(e) {
    console.log("Restar");
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.Sumar}>+</button>
        <button onClick={this.Restar}>-</button>
      </div>
    );
  }
}
//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };
  //Arrow Functions
  Sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  Restar = (e) => {
    console.log("Restar");
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={this.Sumar}>+</button>
        <button onClick={this.Restar}>-</button>
      </div>
    );
  }
}

/* function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho Componente</button>;
} */
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho Componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h2>Mas Sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un parametro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando un parametro desde un evento")
          }
        />
      </div>
    );
  }
}
