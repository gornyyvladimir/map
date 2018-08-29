export const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';
export const UPDATE_POSITION = 'UPDATE_POSITION';

export const updateViewport = viewport => {
  return {
    type: UPDATE_VIEWPORT,
    payload: {
      viewport,
    },
  };
};

export const updatePosition = position => {
  return {
    type: UPDATE_POSITION,
    payload: {
      position,
    },
  };
};
