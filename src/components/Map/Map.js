import React from 'react';
import ReactMapGL, { NavigationControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationButton from './LocationButton/LocationButton';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

const Map = props => {
  let currentPositionPopup = null;
  if (props.position) {
    currentPositionPopup = (
      <Popup
        latitude={props.position.latitude}
        longitude={props.position.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>You are here</div>
      </Popup>
    );
  }

  return (
    <ReactMapGL
      {...props.viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={props.onUpdateViewport}
      mapStyle="mapbox://styles/mapbox/streets-v10"
    >
      {currentPositionPopup}
      <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
        <NavigationControl onViewportChange={props.onUpdateViewport} />
      </div>
      <div style={{ position: 'absolute', right: 8, top: 8 }}>
        <LocationButton
          onClick={props.onLocationClick}
          style={{ position: 'absolute', right: 30, top: 30 }}
        />
      </div>
    </ReactMapGL>
  );
};

export default Map;
