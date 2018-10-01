import React from "react";

export default class ConParametro extends React.Component {
  render() {
    return <h1>Hola, {this.props.match.params.nombre}</h1>;
  }
}
