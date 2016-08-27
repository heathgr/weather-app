import actionTypes from '../constants/actionTypes';

const root = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.APP_MOUNTED:
      return Object.assign({}, state, { appMounted: true });
    case actionTypes.GOT_LOCATION:
      return Object.assign({}, state, { geoLocation: action.data });
    case actionTypes.GOT_WEATHER:
      return Object.assign({}, state, { weather: action.data });
    case actionTypes.TRANSITION_TO_COMPONENT:
      return Object.assign({}, state, { transitionInComponent: action.data });
    case actionTypes.CURRENT_COMPONENT_HID:
      return Object.assign({}, state, { currentComponent: state.transitionInComponent });
    default:
      return state;
  }
};

export default root;
