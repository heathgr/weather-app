import { expect } from 'chai';
import root from '../../src/reducers/root';
import actionTypes from '../../src/constants/actionTypes';
import componentTypes from '../../src/constants/componentTypes';
import appMounted from '../../src/actions/appMounted';
import currentComponentHid from '../../src/actions/currentComponentHid';
import transitionToComponent from '../../src/actions/transitionToComponent';

describe('root reducer', () => {
  it('should correctly handle app mounted actions', () => {
    const testState = root({}, appMounted());
    const expectedState = {
      appMounted: true,
    };
    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle current component hid actions', () => {
    const testState = root(
      {
        transitionInComponent: componentTypes.WEATHER,
        currentComponent: componentTypes.LOADING,
      },
      currentComponentHid()
    );
    const expectedState = {
      transitionInComponent: componentTypes.WEATHER,
      currentComponent: componentTypes.WEATHER,
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle transition to component actions', () => {
    const testState = root(
      {},
      transitionToComponent(componentTypes.WEATHER)
    );
    const expectedState = {
      transitionInComponent: componentTypes.WEATHER,
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle got location actions', () => {
    const testState = root(
      {},
      {
        type: actionTypes.GOT_LOCATION,
        success: true,
        data: {
          city: 'Austin',
          region: 'Texas',
          loc: [
            30.3076863,
            -97.8934863,
          ],
        },
      },
    );
    const expectedState = {
      geoLocation: {
        city: 'Austin',
        region: 'Texas',
        loc: [
          30.3076863,
          -97.8934863,
        ],
      },
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle got weather actions', () => {
    const testState = root(
      {},
      {
        type: actionTypes.GOT_WEATHER,
        success: true,
        data: {
          currentTemp: 32,
          high: 120,
          low: -5,
          condition: 'scattered clouds',
          icon: '02n',
          timestamp: '1472269061',
        },
      }
    );
    const expectedState = {
      weather: {
        currentTemp: 32,
        high: 120,
        low: -5,
        condition: 'scattered clouds',
        icon: '02n',
        timestamp: '1472269061',
      },
    };

    expect(testState).to.deep.equal(expectedState);
  });
});
