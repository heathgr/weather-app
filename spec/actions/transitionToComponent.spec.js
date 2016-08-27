import { expect } from 'chai';
import { spy } from 'sinon';
import transitionToComponent from '../../src/actions/transitionToComponent';
import actionTypes from '../../src/constants/actionTypes';
import componentTypes from '../../src/constants/componentTypes';

describe('the transition to component action', () => {
  it('should return a transition to component action', () => {
    const dispatch = spy();

    dispatch(transitionToComponent(componentTypes.WEATHER));
    expect(
      dispatch.withArgs(
        {
          type: actionTypes.TRANSITION_TO_COMPONENT,
          data: componentTypes.WEATHER,
        }
      ).calledOnce
    ).to.equal(true);
  });
});
