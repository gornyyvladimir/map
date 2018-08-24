export const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';

export const updateViewport = viewport => {
  return {
    type: UPDATE_VIEWPORT,
    payload: {
      viewport
    }
  }
};
