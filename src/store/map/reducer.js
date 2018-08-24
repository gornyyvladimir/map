import { UPDATE_VIEWPORT } from './actions';

const initialState = {
  viewport: {
    width: 800,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          ...action.payload.viewport
        }
      }
    default:
      return state;
  }
};

export default reducer;