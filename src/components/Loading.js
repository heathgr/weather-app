import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { TweenLite } from 'gsap';
import currentComponentHid from '../actions/currentComponentHid';
import styles from '../constants/styles';

let loadingRef;

class Loading extends Component {

  componentWillAppear(callback) {
    TweenLite.from(
      loadingRef,
      0.5,
      {
        opacity: 0,
        onComplete: callback,
      }
    );
  }

  componentWillLeave(callback) {
    TweenLite.to(
      loadingRef,
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
    return (<text
      ref={
        (ref) => {
          loadingRef = ref;
        }
      }
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
