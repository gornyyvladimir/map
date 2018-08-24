import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import Page from './containers/PageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <MapContainer />
        <Page />
      </div>
    );
  }
}

export default App;
