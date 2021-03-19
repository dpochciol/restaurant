import React from 'react';
import Card from '../card/Card';
import Map from '../map/Map';

const Results = ({values, functionSelect}) => {

  const renderCards = values.map(value => {
    return <Card value={value} functionSelect={functionSelect} />
  })

  return(
    <div className="">

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