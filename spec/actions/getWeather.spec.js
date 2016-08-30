import { expect } from 'chai';
import { spy } from 'sinon';
import getWeather from '../../src/actions/getWeather';
import actionTypes from '../../src/constants/actionTypes';

const successfulResponse = {
  body: {
    coord: {
      lon: -111.89,
      lat: 40.72,
    },
    sys: {
      type: 1,
      id: 2802,
      message: 0.0051,
      country: 'US',
      sunrise: 1472215797,
      sunset: 1472263683,
    },
    weather: [{
      id: 800,
      main: 'Clear',
      description: 'sky is clear',
      icon: '01n',
    }],
    base: 'stations',
    main: {
      temp: 67.68,
      pressure: 1016,
      humidity: 25,
      temp_min: 64.4,
      temp_max: 73.4,
    },
    visibility: 16093,
    wind: {
      speed: 5.62,
      deg: 150,
    },
    clouds: {
      all: 1,
    },
    dt: 1472186827,
    id: 5778755,
    name: 'Murray',
    cod: 200,
  },
};

const successfulAction = {
  type: actionTypes.GOT_WEATHER,
  success: true,
  data: {
    currentTemp: 67.68,
    condition: 'sky is clear',
    icon: '01n',
    timestamp: 1472186827,
  },
};

const unsuccessfulAction = {
  type: actionTypes.GOT_WEATHER,
  success: false,
};

class successfulRequest {
  get() {
    return this;
  }

  set() {
    return this;
  }

  end(callback) {
    callback(null, successfulResponse);
  }
}

class unsuccessfulRequest {
  get() {
    return this;
  }

  set() {
    return this;
  }

  end(callback) {
    callback({ message: 'it did not work' }, null);
  }
}

describe('the get weather action', () => {
  it('should return a successful got weather action if there are no errors', () => {
    getWeather.__Rewire__('request', new successfulRequest());

    const thunk = getWeather([40.7079, -111.8555]);
    const dispatch = spy();

    thunk(dispatch);
    expect(dispatch.withArgs(successfulAction).calledOnce).to.equal(true);

    getWeather.__ResetDependency__('request');
  });

  it('should return an unsuccessful got weather action if there are errors', () => {
    getWeather.__Rewire__('request', new unsuccessfulRequest());

    const thunk = getWeather([40.7079, -111.8555]);
    const dispatch = spy();

    thunk(dispatch);
    expect(dispatch.withArgs(unsuccessfulAction).calledOnce).to.equal(true);

    getWeather.__ResetDependency__('request');
  });
});
