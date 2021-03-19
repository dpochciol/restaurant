import React from 'react';

const Details = ({select}) => {
  console.log(select);
  return(
    <div>
       {select.name}<br/>
      {select.city.name}<br/>
      {select.description}<br />
    </div>
  )
}


export default Details;