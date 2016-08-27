import React, { Component, PropTypes } from 'react';
import { TweenLite } from 'gsap';
import currentComponentHid from '../actions/currentComponentHid';

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
      x={400}
      y={250}
    >
      Loading
    </text>);
  }
}

Loading.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Loading;
