import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import App from './components/App';

const logger = createLogger();

const middlewares = [
  logger,
];

const store = createStore(
  compose(applyMiddleware(...middlewares)));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'));
