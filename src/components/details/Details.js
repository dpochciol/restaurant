import React from 'react';
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Details page</h1>
            {id}
        </div>
    );
}

export default Details;
