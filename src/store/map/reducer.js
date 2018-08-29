import { UPDATE_VIEWPORT, UPDATE_POSITION } from './actions';

const initialState = {
  viewport: {
    width: 800,
    height: 800,
    latitude: 55.78208522075799,
    longitude: 49.124473959633065,
    zoom: 12,
  },
  position: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT:
      return {
        ...state,
        viewport: {
          ...state.viewport,
          ...action.payload.viewport,
        },
      };
    case UPDATE_POSITION:
      return {
        ...state,
        position: {
          ...state.position,
          ...action.payload.position,
        },
      };
    default:
      return state;
  }
};

export default reducer;
