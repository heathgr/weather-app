import actionTypes from '../constants/actionTypes';

const root = (state: Object = {}, action: Object): Object => {
  switch (action.type) {
    case actionTypes.INITIALIZED:
      return Object.assign({}, state, { initialized: true });
    default:
      return state;
  }
};

export default root;
