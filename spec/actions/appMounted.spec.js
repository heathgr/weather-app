import { expect } from 'chai';
import { spy } from 'sinon';
import appMounted from '../../src/actions/appMounted';
import actionTypes from '../../src/constants/actionTypes';

describe('app mounted action', () => {
  it('should return an app mounted action', () => {
    const dispatch = spy();

    dispatch(appMounted());
    expect(dispatch.withArgs({ type: actionTypes.APP_MOUNTED }).calledOnce).to.equal(true);
  });
});
