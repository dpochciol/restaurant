import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Result from './components/result/Results';
import Nav from './components/nav/Nav';
import Details from './components/details/Details';

const App = () => {

  const [values, setValues] = useState();
  const [select, setSelect] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    fetch('https://yelp-restaurant-api.herokuapp.com/restaurant')
        .then(res => res.json())
        .then(json => setValues(json));
}, []);

useEffect(() => {
    fetch(`https://yelp-restaurant-api.herokuapp.com/restaurant/${id}`)
      .then(res => res.json())
      .then(json => setSelect(json));
}, [id]);

  const functionSelect = (id) => {
    setId(id);
  }

  console.log(select);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/"> {values ? <Result values={values} functionSelect={functionSelect}/> : 'Loading...'} </Route>
        <Route exact path={`/details/${id}`}> {values ? <Details select={select}/> : 'Loading...'} </Route>
      </div>
    </Router>
  );
}

export default App;
