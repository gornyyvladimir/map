import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateViewport, updatePosition } from '../store/map/actions';
import Map from '../components/Map/Map';

class MapContainer extends Component {
  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const position = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        const viewport = {
          ...position,
          zoom: 16,
        };
        this.props.onUpdatePosition(position);
        this.props.onUpdateViewport(viewport);
      },
      error => {
        console.log(error);
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  }

  handleLocationClick = () => {
    this.getCurrentPosition();
  };

  render() {
    return <Map {...this.props} onLocationClick={this.handleLocationClick} />;
  }
}

const mapStateToProps = state => {
  return {
    viewport: state.map.viewport,
    position: state.map.position,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateViewport: viewport => dispatch(updateViewport(viewport)),
    onUpdatePosition: position => dispatch(updatePosition(position)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
