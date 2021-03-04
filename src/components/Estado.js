import React, { Component } from "react";

function EstadoAHijo(props) {
  return (
    <div>
      <h2>{props.ContadorHijo}</h2>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    /* setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000); */
  }
  render() {
    return (
      <div>
        <h2>Estado</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo ContadorHijo={this.state.contador} />
      </div>
    );
  }
}
