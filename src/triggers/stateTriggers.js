import actionTypes from '../constants/actionTypes';
import componentTypes from '../constants/componentTypes';
import getLocation from '../actions/getLocation';
import getWeather from '../actions/getWeather';
import transitionToComponent from '../actions/transitionToComponent';

const stateTriggers = (prevState, nextState, action, dispatch) => {
  switch (action.type) {
    case actionTypes.APP_MOUNTED:
      dispatch(getLocation());
      break;
    case actionTypes.GOT_LOCATION:
      if (action.success) {
        dispatch(getWeather(action.data.loc));
      } else {
        // TODO location error handling
      }
      break;
    case actionTypes.GOT_WEATHER:
      if (action.success) {
        dispatch(transitionToComponent(componentTypes.WEATHER));
      } else {
        // TODO weather error handling
      }
      break;
    default:
      break;
  }
};

export default stateTriggers;
