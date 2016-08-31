import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { TimelineLite } from 'gsap';
import currentComponentHid from '../actions/currentComponentHid';
import styles from '../constants/styles';

class Loading extends Component {

  componentWillAppear(callback) {
    const timeline = new TimelineLite({ onComplete: callback });

    timeline
      .from('.loader', 0.001, { opacity: 0 })
      .from('.loader', 0.2, { fill: '#fff' });
  }

  componentWillEnter(callback) {
    const timeline = new TimelineLite({ onComplete: callback });

    timeline
      .from('.loader', 0.001, { opacity: 0 })
      .from('.loader', 0.2, { fill: '#fff' });
  }

  componentWillLeave(callback) {
    const timeline = new TimelineLite({
      onComplete: () => {
        this.props.dispatch(currentComponentHid());
        callback();
      },
    });

    timeline
      .to('.loader', 0.2, { opacity: 0 });
  }

  render() {
    return (<text
      className="loader"
      style={[styles.centeredText, styles.headerFooterText]}
      x={400}
      y={250}
    >
      Getting the Weather...
    </text>);
  }
}

Loading.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Radium(Loading);
