import chai, { expect } from 'chai';
import { spy } from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../../src/components/App';
import actionTypes from '../../src/constants/actionTypes';

describe('<App />', () => {
  chai.use(chaiEnzyme());

  it('should display default content if the app state has no "loadingStatus" property', () => {
    const appWrapper = shallow(<App loadingStatus={null} />);

    expect(appWrapper).to.contain(<div>Press the button!!!</div>);
  });

  it('should display loading content if the "loadingStatus" property equals "loading"', () => {
    const appWrapper = shallow(<App loadingStatus={actionTypes.LOADING} />);

    expect(appWrapper).to.contain(<div>Loading...</div>);
  });

  it('should display loaded content if the "loadingStatus" property equals "loaded"', () => {
    const appWrapper = shallow(<App loadingStatus={actionTypes.LOADED} />);

    expect(appWrapper).to.contain(<div>Loaded :)</div>);
  });

  it('should have a button that triggers a "loading" action when clicked', () => {
    const dispatch = spy();
    const appWrapper = shallow(<App dispatch={dispatch} />);

    appWrapper.find('button').simulate('click');
    expect(dispatch.calledOnce).to.equal(true);
  });
});
