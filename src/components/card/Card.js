import React from 'react';
import {Link} from "react-router-dom";

const Card = ({value, functionSelect}) => {
  // console.log(value);
  return(
    <Link to={`/details/${value._id}`}>
      <div class="card p-2 m-2" style={{width: "300px"}} onClick={() => functionSelect(value._id)}>
        <img src={value.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{value.name}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card;