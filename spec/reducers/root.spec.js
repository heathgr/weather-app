import { expect } from 'chai';
import root from '../../src/reducers/root';
import actionTypes from '../../src/constants/actionTypes';

describe('root reducer', () => {
  it('should correctly handle loading actionTypes', () => {
    const testState = root({}, { type: actionTypes.LOADING });
    const expectedState = {
      loadingStatus: actionTypes.LOADING,
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle loaded actionTypes', () => {
    const testState = root({}, { type: actionTypes.LOADED });
    const expectedState = {
      loadingStatus: actionTypes.LOADED,
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('should correctly handle unrecognized actionTypes', () => {
    const testState = root({}, { type: 'unrecognized' });
    const expectedState = {};

    expect(testState).to.deep.equal(expectedState);
  });
});
