import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './charState';
import characterSaga from './characterSaga';

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: {
    characters: characterReducer
  },
  middleware: [saga]
})
saga.run(characterSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

