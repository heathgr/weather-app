import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import root from './reducers/root';

const store = createStore(
  root,
  {
    initialized: false,
  },
  compose(
    applyMiddleware(thunk),
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
