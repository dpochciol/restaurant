import React from 'react';
import Map from '../map/Map';

const Details = ({select}) => {
  console.log(select);
  return (

    <div className="container">
      <div className="row" style={{marginTop:80}}>
        <div className="col-sm m-2">

          <div className="card p-2" style={{width: 600}}>
          <img src={select.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{select.name}</h5>
              <p className="card-text">{select.city.name}</p>
              <p className="card-text">{select.description}</p>
            </div>
          </div>


        </div>
        <div className="col-sm">
          <Map values={[select]} />
        </div>
      </div>
    </div>
  )
}


export default Details;
