import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from "redux";
import { Provider } from 'react-redux'

import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const toRoot = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  toRoot
);