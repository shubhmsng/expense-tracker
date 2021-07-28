import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './store/store';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, middleware);

const Root = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(
  Root,
  document.getElementById("root")
);

reportWebVitals();
