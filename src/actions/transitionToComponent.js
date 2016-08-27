import actionTypes from '../constants/actionTypes';

const transitionToComponent = (nextComponent) => ({
  type: actionTypes.TRANSITION_TO_COMPONENT,
  data: nextComponent,
});

export default transitionToComponent;
