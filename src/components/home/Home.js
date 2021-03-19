
import "./Home.css";
import * as ReactBootStrap from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Result from "../result/Results";


const Home = ({ functionSelect }) => {


    const [input, setInput] = useState();
    const [restaurants, setRestaurants] = useState();


    const handleUserInput = (e) => {
        setInput(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (input) {
            fetch(
                `https://yelp-restaurant-api.herokuapp.com/city/restaurants/${input}
            `)
                .then((res) => res.json())
                .then((json) => {
                    setRestaurants(json[0].restaurants);
                })
                .catch((e) => console.log(e.message));
        }
    };

    return (<>
        <div className="searchBar">
            <div></div>
            <div>
                <ReactBootStrap.Form>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Form.Control style={{ width: '20rem' }} type="text" placeholder="Select your City" name="" value={input} onChange={handleUserInput} />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Button variant="dark" variant="outline-dark" type="text" onClick={handleSearch} >
                                Search
                            </ReactBootStrap.Button>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Form>
            </div>
            <div></div>

        </div>
        <div>
            {restaurants ? (
                <Result values={restaurants} functionSelect={functionSelect} />
            ) : (
                ""
            )}
        </div>
    </>);
}

export default Home;

