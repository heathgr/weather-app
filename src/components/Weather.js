import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { TweenLite } from 'gsap';
import fecha from 'fecha';
import currentComponentHid from '../actions/currentComponentHid';
import weatherIconCharCodes from '../constants/weatherIconCharCodes';
import styles from '../constants/styles';

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
    const iconCharacter = String.fromCharCode(weatherIconCharCodes[this.props.weatherData.icon]);
    const dateString = fecha.format(
      this.props.weatherData.timestamp * 1000,
      'ddd MMM D, YYYY hh:mm A'
    );
    const splitDate = dateString.split(/(([0-9]\w:[0-9]\w (AM|PM)))/g);

    return (
      <g
        ref={
          (ref) => {
            weatherRef = ref;
          }
        }
      >
        <rect style={styles.gridContainer} x={0} y={0} width={800} height={500} />
        <line style={styles.horizontalLine} x1={0} y1={1} x2={800} y2={1} />
        <line style={styles.horizontalLine} x1={0} y1={100} x2={800} y2={100} />
        <line style={styles.horizontalLine} x1={0} y1={400} x2={800} y2={400} />
        <line style={styles.horizontalLine} x1={0} y1={499} x2={800} y2={499} />
        <line style={styles.verticalLine} x1={1} y1={20} x2={1} y2={80} />
        <line style={styles.verticalLine} x1={1} y1={120} x2={1} y2={380} />
        <line style={styles.verticalLine} x1={1} y1={420} x2={1} y2={480} />
        <line style={styles.verticalLine} x1={400} y1={120} x2={400} y2={380} />
        <line style={styles.verticalLine} x1={799} y1={20} x2={799} y2={80} />
        <line style={styles.verticalLine} x1={799} y1={120} x2={799} y2={380} />
        <line style={styles.verticalLine} x1={799} y1={420} x2={799} y2={480} />
        <text x={400} y={50}>
          <tspan style={[styles.centeredText, styles.headerFooterText]}>
            {`${this.props.locationData.city}, `}
          </tspan>
          <tspan style={[styles.centeredText, styles.headerFooterTextLight]}>
            {this.props.locationData.region}
          </tspan>
        </text>
        <text style={[styles.centeredText, styles.temperatureText]} x={600} y={250}>
          {`${Math.round(this.props.weatherData.currentTemp)}ºF`}
        </text>
        <text style={[styles.centeredText, styles.conditionText]} x={200} y={240}>
          {`${iconCharacter}`}
        </text>
        <text style={[styles.centeredText, styles.detailsTextLight]} x={200} y={300}>
          {`${this.props.weatherData.condition}`}
        </text>
        <text style={styles.centeredText} x={400} y={450}>
          <tspan style={[styles.centeredText, styles.headerFooterTextLight]}>{splitDate[0]} </tspan>
          <tspan style={[styles.centeredText, styles.headerFooterText]}>{splitDate[1]}</tspan>
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

export default Radium(Weather);
