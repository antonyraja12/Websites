import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Maps = () => {
  return (
    <div id='mapid'> 
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px', width: '100%' }} scrollWheelZoom={false} className=''>
    <TileLayer
   attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    </MapContainer>
    </div>
  );
};

export default Maps;
