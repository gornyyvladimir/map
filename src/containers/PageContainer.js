import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateViewport } from '../store/map/actions';
import { FlyToInterpolator } from 'react-map-gl';

class Page extends Component {

  handleClick = () => {
    const viewport = {
      ...this.props.viewport,
      latitude: 55.793719,
      longitude: 49.1253406,
      zoom: 16,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    }
    this.props.onUpdateViewport(viewport)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Flatstack</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    viewport: state.map.viewport
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateViewport: viewport => dispatch(updateViewport(viewport)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);