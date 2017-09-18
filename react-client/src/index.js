import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker';
import reducer from './services/DatSplit/reducer'

let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
