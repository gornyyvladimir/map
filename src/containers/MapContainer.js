import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateViewport } from '../store/map/actions';
import Map from '../components/Map/Map';

class MapContainer extends Component {
  componentDidMount() {
    this.goToCurrentLocation();
  }

  goToCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const viewport = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        this.props.onUpdateViewport(viewport);
      },
      error => {
        console.log(error);
      },
      { timeout: 10000, maximumAge: 60000 }
    );
  }

  handleLocationClick = () => {
    this.goToCurrentLocation();
  };

  render() {
    return <Map {...this.props} onLocationClick={this.handleLocationClick} />;
  }
}

const mapStateToProps = state => {
  return {
    viewport: state.map.viewport,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateViewport: viewport => dispatch(updateViewport(viewport)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
