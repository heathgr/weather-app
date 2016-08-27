import { expect } from 'chai';
import { spy } from 'sinon';
import getLocation from '../../src/actions/getLocation';
import actionTypes from '../../src/constants/actionTypes';

const successfulResponse = {
  body: {
    ip: '0.0.0.1',
    hostname: 'myhost.net',
    city: 'Salt Lake City',
    region: 'Utah',
    country: 'US',
    loc: '40.7079,-111.8555',
    org: 'Some Isp',
    postal: '84106',
  },
};

const successfulAction = {
  type: actionTypes.GOT_LOCATION,
  success: true,
  data: {
    city: 'Salt Lake City',
    region: 'Utah',
    loc: ['40.7079', '-111.8555'],
  },
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

const unsuccessfulAction = {
  type: actionTypes.GOT_LOCATION,
  success: false,
};

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

describe('get geo location action', () => {
  it('should return a succesful got location action if the location was obtained', () => {
    getLocation.__Rewire__('request', new successfulRequest());

    const thunk = getLocation();
    const dispatch = spy();

    thunk(dispatch);
    expect(dispatch.withArgs(successfulAction).calledOnce).to.equal(true);
    getLocation.__ResetDependency__('request');
  });

  it('should return an unsuccessful got location action if the location was not obtained', () => {
    getLocation.__Rewire__('request', new unsuccessfulRequest());

    const thunk = getLocation();
    const dispatch = spy();

    thunk(dispatch);
    expect(dispatch.withArgs(unsuccessfulAction).calledOnce).to.equal(true);
    getLocation.__ResetDependency__('request');
  });
});
