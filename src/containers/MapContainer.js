import { connect } from 'react-redux';
import { updateViewport } from '../store/map/actions';
import Map from '../components/Map/Map';

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

export default connect(mapStateToProps, mapDispatchToProps)(Map);