import React from "react";
import { Switch, Route } from "react-router-dom";
import Despedida from "./Despedida";
import NoHuman from "./NoHuman";
import ConParametro from "./ConParametro";
import Error from "./Error";

export default class DespedidaContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/despedida/robot" component={NoHuman} />
        <Route path="/despedida/:nombre/despide" component={ConParametro} />
        <Route exact path="/despedida" component={Despedida} />
        <Route component={Error} />
      </Switch>
    );
  }
}
