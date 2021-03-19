import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
import Results from "./components/result/Results";
import { Fragment } from "react";
import NotFound from "./components/notFound/NotFound";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";




const App = () => {
  return (
    <Fragment id="container-main">
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
      <Nav />
      <Home />
      <Footer />
    </Fragment>

  );
}

export default App;
