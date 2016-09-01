import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import Radium from 'radium';
import Weather from './Weather';
import Loading from './Loading';
import Error from './Error';
import appMounted from '../actions/appMounted';
import componentTypes from '../constants/componentTypes';
import styles from '../constants/styles';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(appMounted());
  }

  render() {
    return (
      <svg
        style={[styles.centeredElement, styles.svgContainer]}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 800 500"
      >
        <defs>
          <pattern
            id="gridFill"
            x={-20}
            y={-20}
            width={100}
            height={100}
            patternUnits="userSpaceOnUse"
          >
            <line className="gridline" style={styles.gridLine} x1={0} y1={20} x2={40} y2={20} />
            <line className="gridline" style={styles.gridLine} x1={20} y1={0} x2={20} y2={40} />
            <line className="gridline" style={styles.gridLine} x1={60} y1={20} x2={80} y2={20} />
            <line className="gridline" style={styles.gridLine} x1={70} y1={10} x2={70} y2={30} />
            <line className="gridline" style={styles.gridLine} x1={10} y1={70} x2={30} y2={70} />
            <line className="gridline" style={styles.gridLine} x1={20} y1={60} x2={20} y2={80} />
            <line className="gridline" style={styles.gridLine} x1={60} y1={70} x2={80} y2={70} />
            <line className="gridline" style={styles.gridLine} x1={70} y1={60} x2={70} y2={80} />
          </pattern>
        </defs>
        <ReactTransitionGroup component="g">
          {
            this.props.currentComponent === componentTypes.LOADING
            && this.props.transitionInComponent === componentTypes.LOADING
            && <Loading dispatch={this.props.dispatch} />
          }
          {
            this.props.currentComponent === componentTypes.ERROR
            && this.props.transitionInComponent === componentTypes.ERROR
            && <Error dispatch={this.props.dispatch} />
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
