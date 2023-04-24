import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { configureStore, combineReducers, applyMiddleware } from 'redux' // createStore replaced with configureStore, because createStore is deprecated
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = configureStore(
  rootReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

console.log('Now I know React and Redux!')