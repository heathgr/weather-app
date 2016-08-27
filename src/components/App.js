import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import Radium from 'radium';
import Weather from './Weather';
import Loading from './Loading';
import Error from './Error';
import appMounted from '../actions/appMounted';
import componentTypes from '../constants/componentTypes';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(appMounted());
  }

  render() {
    return (<svg width="80%" height="80%" preserveAspectRatio="xMidYMid" viewBox="0 0 800 500">
      <ReactTransitionGroup component="g">
        {
          this.props.currentComponent === componentTypes.LOADING
          && this.props.transitionInComponent === componentTypes.LOADING
          && <Loading dispatch={this.props.dispatch} />
        }
        {
          this.props.currentComponent === componentTypes.WEATHER
          && this.props.transitionInComponent === componentTypes.WEATHER
          && <Weather
            dispatch={this.props.dispatch}
            weatherData={this.props.weather}
            locationData={this.props.geoLocation}
          />
        }
      </ReactTransitionGroup>
    </svg>);
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentComponent: PropTypes.string.isRequired,
  transitionInComponent: PropTypes.string.isRequired,
  weather: PropTypes.object,
  geoLocation: PropTypes.object,
};

export default Radium(App);
