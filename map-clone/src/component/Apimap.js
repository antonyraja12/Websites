import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Apps = () => {
  const mapOptions = {
    center: {
      lat: 11.0168,
      lng: 76.9558
    },
    zoom: 12
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key:'AIzaSyD2WmLu-HJKLRsYrNcV2a_qQuVVRnJ5yVE' }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
      >
        <AnyReactComponent
          lat={11.0168}
          lng={76.9558}
          text="Coimbatore"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Apps;
