import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerCustom from "../../img/icon.png";
import "leaflet/dist/images/marker-shadow.png";
import { Icon } from "leaflet";

const Map = ({values}) => {
  console.log(values)
  const icon = new Icon({
    iconUrl: markerCustom,
    iconSize: [35, 35],
  });


  const renderMarker = values.map((location, id) => {
    
    return(
      <Marker key={id}
        position={[
          location.location.coordinates[0],
          location.location.coordinates[1],
        ]}
        icon={icon}
      >
        <Popup>
        </Popup>
      </Marker>
    )
  })


  return (
    <div class="card p-2 m-2" style={{ width: "600px" }}>
      <MapContainer
      style={{height: 600}}
      center={[values[0].location.coordinates[0], values[0].location.coordinates[1]]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {renderMarker}

    </MapContainer>
  </div>

  );
};

export default Map;