import { expect } from 'chai';
import { spy, useFakeTimers } from 'sinon';
import load from '../../src/actions/load';
import actionTypes from '../../src/constants/actionTypes';

describe('Load', () => {
  let clock;

  beforeEach(() => {
    clock = useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should dispatch a loading action followed by a loaded action', () => {
    const thunk = load();
    const dispatch = spy();

    thunk(dispatch);
    expect(dispatch.withArgs({ type: actionTypes.LOADING }).calledOnce).to.equal(true);
    clock.tick(3000);
    expect(dispatch.withArgs({ type: actionTypes.LOADED }).calledOnce).to.equal(true);
  });
});
