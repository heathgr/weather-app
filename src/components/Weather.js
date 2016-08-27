import React, { Component, PropTypes } from 'react';
import { TweenLite } from 'gsap';
import currentComponentHid from '../actions/currentComponentHid';

let weatherRef;

class Weather extends Component {

  componentWillEnter(callback) {
    TweenLite.from(
      weatherRef,
      0.5,
      {
        opacity: 0,
        onComplete: callback,
      }
    );
  }

  componentWillLeave(callback) {
    TweenLite.to(
      weatherRef,
      0.5,
      {
        opacity: 0,
        onComplete: () => {
          this.props.dispatch(currentComponentHid());
          callback();
        },
      }
    );
  }

  render() {
    return (
      <g
        ref={
          (ref) => {
            weatherRef = ref;
          }
        }
        transform="translate(400, 250)"
      >
        <text y={0}>
          {`${this.props.locationData.city}, ${this.props.locationData.region}`}
        </text>
        <text y={30}>
          {`Tempurature: ${this.props.weatherData.currentTemp}ºF`}
        </text>
        <text y={60}>
          {`Condition: ${this.props.weatherData.condition}`}
        </text>
        <text y={90}>
          {`Timesteamp: ${this.props.weatherData.timestamp}`}
        </text>
      </g>
    );
  }
}


Weather.propTypes = {
  dispatch: PropTypes.func.isRequired,
  weatherData: PropTypes.object.isRequired,
  locationData: PropTypes.object.isRequired,
};

export default Weather;
