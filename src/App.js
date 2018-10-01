import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Saludo from "./Saludo";
import Despedida from "./Despedida";
import NoHuman from "./NoHuman";
import DespedidaContainer from "./DespedidaContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Route exact path="/saludo" component={Saludo} />
        <Route path="/saludo/no-humano" component={NoHuman} />
        <Route path="/despedida" component={DespedidaContainer} />
        <Route path="/render" render={() => <h1>Render inside</h1>} />
      </div>
    );
  }
}

export default App;
