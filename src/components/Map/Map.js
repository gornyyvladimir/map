import React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

const Map = props => (
  <ReactMapGL
    {...props.viewport}
    mapboxApiAccessToken={MAPBOX_TOKEN}
    onViewportChange={props.onUpdateViewport}
  >
    <div style={{ position: 'absolute', right: 30, bottom: 30 }}>
      <NavigationControl onViewportChange={props.onUpdateViewport} />
    </div>
  </ReactMapGL>
);

export default Map;