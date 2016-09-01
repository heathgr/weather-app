import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { TimelineLite } from 'gsap';
import currentComponentHid from '../actions/currentComponentHid';
import styles from '../constants/styles';

class Error extends Component {

  componentWillAppear(callback) {
    const timeline = new TimelineLite({ onComplete: callback });

    timeline
      .from('.error', 0.001, { opacity: 0 })
      .from('.error', 0.2, { fill: '#fff' });
  }

  componentWillEnter(callback) {
    const timeline = new TimelineLite({ onComplete: callback });

    timeline
      .from('.error', 0.001, { opacity: 0 })
      .from('.error', 0.2, { fill: '#fff' });
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

  render(): Object {
    return (<text
      className="error"
      style={[styles.centeredText, styles.headerFooterText]}
      x={400}
      y={250}
    >
      Oh noes, something went wrong.
    </text>);
  }
}

Error.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Radium(Error);
