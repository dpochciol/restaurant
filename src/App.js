import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Details from "./components/details/Details";
// import NotFound from "./components/notFound/NotFound";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import React, { useEffect, useState } from 'react';
import Result from './components/result/Results';


const App = () => {

  const [values, setValues] = useState();
  const [select, setSelect] = useState();
  const [city, setCity] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    fetch('https://yelp-restaurant-api.herokuapp.com/restaurant')
      .then(res => res.json())
      .then(json => setValues(json));
  }, []);

  useEffect(() => {
    fetch(`https://yelp-restaurant-api.herokuapp.com/restaurant/${id}`)
      .then(res => res.json())
      .then(json => setSelect(json), console.log('hi2'));
  }, [id]);

  const functionSelect = (id) => {
    setId(id);
    console.log(id);
  }

  const functionCity = (city) => {
    // setValues(city);
    console.log('hi');
  }

  console.log(select);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path={`/details/${id}`}> {select ? <Details select={select} /> : 'Loading...'} </Route>
        <Route exact path="/results"> {values ? <Result values={values} functionSelect={functionSelect} /> : 'Loading...'} </Route>
        <Route exact path="/"><Home functionCity={functionCity} /></Route>
        {/* <Route path="*" component={NotFound}></Route> */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
