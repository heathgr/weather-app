import { expect } from 'chai';
import { spy } from 'sinon';
import actionTypes from '../../src/constants/actionTypes';
import componentTypes from '../../src/constants/componentTypes';
import stateTriggers from '../../src/triggers/stateTriggers';
import appMounted from '../../src/actions/appMounted';
import getLocation from '../../src/actions/getLocation';
import getWeather from '../../src/actions/getWeather';
import transitionToComponent from '../../src/actions/transitionToComponent';

describe('state triggers', () => {
  it('should dispatch a get location action after an app mounted action', () => {
    const dispatch = spy();

    stateTriggers({}, {}, appMounted(), dispatch);

    const func1 = dispatch.getCall(0).args[0];
    const func2 = getLocation();

    expect(func1.toString()).to.equal(func2.toString());
  });

  it('should dispatch a get weather action after a successful get location action', () => {
    const dispatch = spy();

    stateTriggers(
      {},
      {},
      {
        type: actionTypes.GOT_LOCATION,
        success: true,
        data: {
          loc: [100, -100],
        },
      },
      dispatch
    );

    const func1 = dispatch.getCall(0).args[0];
    const func2 = getWeather();

    expect(func1.toString()).to.equal(func2.toString());
  });

  it(
      'should dispatch a transition to component action after a successful got weather action',
      () => {
        const dispatch = spy();

        stateTriggers(
          {},
          {},
          {
            type: actionTypes.GOT_WEATHER,
            success: true,
          },
          dispatch
        );

        const func1 = dispatch.getCall(0).args[0];
        const func2 = transitionToComponent(componentTypes.WEATHER);

        expect(func1.toString()).to.equal(func2.toString());
      }
    );
});
