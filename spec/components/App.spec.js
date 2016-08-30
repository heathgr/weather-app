import chai, { expect } from 'chai';
import { spy } from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import React from 'react';

import App from '../../src/components/App';
import Loading from '../../src/components/Loading';
import Weather from '../../src/components/Weather';
import appMounted from '../../src/actions/appMounted';
import componentTypes from '../../src/constants/componentTypes';

describe('<App />', () => {
  chai.use(chaiEnzyme());

  it('should dispatch an appmounted action when loaded', () => {
    const dispatch = spy();
    const state = {
      currentComponent: componentTypes.LOADING,
      transitionInComponent: componentTypes.LOADING,
    };

    mount(<App dispatch={dispatch} {...state} />);
    expect(dispatch.withArgs(appMounted()).calledOnce).to.equal(true);
  });

  it('should display the loading component if weather data is being fetched', () => {
    const dispatch = spy();
    const state = {
      currentComponent: componentTypes.LOADING,
      transitionInComponent: componentTypes.LOADING,
    };
    const wrapper = shallow(<App dispatch={dispatch} {...state} />);

    expect(wrapper).to.contain(<Loading dispatch={dispatch} />);
  });

  it('should display the weather component if weather data has been fetched', () => {
    const dispatch = spy();
    const state = {
      currentComponent: componentTypes.WEATHER,
      transitionInComponent: componentTypes.WEATHER,
      geoLocation: {
        city: 'Awesomeville',
        loc: '40, -100',
        region: 'North Aweseome State',
      },
      weather: {
        condidtion: 'clear',
        currentTemp: 178,
        icon: '03d',
        timestamp: 1472582873,
      },
    };
    const wrapper = shallow(<App dispatch={dispatch} {...state} />);

    expect(wrapper).to.contain(
      <Weather
        dispatch={dispatch}
        weatherData={state.weather}
        locationData={state.geoLocation}
      />
    );
  });

  it('should display an empty svg if the components are transitioning', () => {
    const dispatch = spy();
    const state = {
      currentComponent: componentTypes.ERROR,
      transitionInComponent: componentTypes.LOADING,
    };
    const wrapper = shallow(<App dispatch={dispatch} {...state} />);

    expect(wrapper.find('svg g')).to.be.blank();
  });
});
