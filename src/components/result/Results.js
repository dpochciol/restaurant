import React from 'react';
import Card from '../card/Card';
import Map from '../map/Map';

const Results = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 d-flex flex-row bd-highlight mb-3">
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card p-2 bd-highlight">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

        </div>
        <div className="col-6 col-md-4">
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Results;