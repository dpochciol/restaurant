import React from 'react';
import Card from '../card/Card';
import Map from '../map/Map';
import "./result.css";

const Results = ({ values, functionSelect }) => {

  const renderCards = values.map(value => {
    return <Card value={value} functionSelect={functionSelect} />
  })

  return (
    <div className="result">

      <div className="col-md-8 d-flex flex-wrap mb-3">
        {renderCards}
      </div>
      <div className="col-6 col-md-4">
        <Map />
      </div>

    </div>
  )
}

export default Results;