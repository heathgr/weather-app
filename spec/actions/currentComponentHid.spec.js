import { expect } from 'chai';
import { spy } from 'sinon';
import currentComponentHid from '../../src/actions/currentComponentHid';
import actionTypes from '../../src/constants/actionTypes';

describe('current component hid action', () => {
  it('should return a current component hid action', () => {
    const dispatch = spy();

    dispatch(currentComponentHid());
    expect(
      dispatch.withArgs(
        {
          type: actionTypes.CURRENT_COMPONENT_HID,
        }
      ).calledOnce
    ).to.equal(true);
  });
});
