import React, { Component } from "react";
import Loadable from "react-loadable";

import { Route, Switch, Redirect } from "react-router-dom";
//import Flow from 'Views/eventflow';

import Loader from "Components/Loading";
function Loading({ error }) {
  if (error) {
    return "Something went wrong: " + (error.message ? error.message : error);
  } else {
    return <Loader loading={true} />;
  }
}

const MainView = Loadable({
  loader: () => import("Views/main"),
  loading: Loading
});

const ManufacturerView = Loadable({
  loader: () => import("Views/manufacturer"),
  loading: Loading
});

const CoinbaseView = Loadable({
  loader: () => import("Views/coinbase"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="container-fluid mr-0 ml-0 pr-0 pl-0">
        <Switch>
          <Route exact path={`/main`} component={MainView} />
          <Route exact path={`/manufacturer`} component={ManufacturerView} />
          <Route exact path={`/coinbase`} component={CoinbaseView} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

export default App;
