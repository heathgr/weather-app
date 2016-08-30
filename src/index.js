import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import onStateChange from 'redux-on-state-change';
import App from './components/App.js';
import root from './reducers/root';
import stateTriggers from './triggers/stateTriggers';
import componentTypes from './constants/componentTypes';

// TODO:0 create a constant for the intial app state
const store = createStore(
  root,
  {
    appMounted: false,
    currentComponent: componentTypes.LOADING,
    transitionInComponent: componentTypes.LOADING,
  },
  compose(
    applyMiddleware(thunk, onStateChange(stateTriggers)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
let { dispatch } = store;

function render() {
  ReactDOM.render(
    <App dispatch={dispatch} {...store.getState()} />,
    document.getElementById('app')
  );
}

window.onload = () => {
  store.subscribe(render);
  render();
};
