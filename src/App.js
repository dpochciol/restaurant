import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Results from "./components/result/Results";
import { Fragment } from "react";
import NotFound from "./components/notFound/NotFound";


const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/results/details/:id">
            <Details />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Fragment>

  );
}

export default App;
