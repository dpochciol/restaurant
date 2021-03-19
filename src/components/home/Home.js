import React from 'react';
import "./Home.css";
import * as ReactBootStrap from "react-bootstrap";


const Home = () => {
    return (
        <div className="searchBar">
            <div></div>
            <div>
                <ReactBootStrap.Form>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Form.Control
                                style={{ width: '20rem' }}
                                as="select"
                                className="my-1 mr-sm-2"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose Your Favourite Food</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </ReactBootStrap.Form.Control>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Form.Control style={{ width: '20rem' }} type="text" placeholder="Select your City" />
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Button variant="dark" variant="outline-dark" type="text">
                                Search
                            </ReactBootStrap.Button>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Form>
            </div>
            <div></div>

        </div>
    );
}

export default Home;

