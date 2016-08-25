import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import initialized from '../actions/initialized';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialized);
  }

  render() {
    return (<div>
      Hello
    </div>);
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Radium(App);
