import React from 'react';
import Card from '../card/Card';
import Map from '../map/Map';
import "./result.css";

const Results = ({ values, functionSelect }) => {

  const renderCards = values.map(value => {
    return <Card value={value} functionSelect={functionSelect} />
  })

  return (

    <div className="container">
      <div className="row" style={{marginTop:100}}>

        <div className="col-md-6 d-flex flex-wrap mb-3">
          {renderCards}
        </div>
        <div className="col-md-6">
          <Map values={values} />
        </div>
      </div>
    </div>
  )
}

export default Results;