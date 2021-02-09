import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import { counterReducer } from './reducers';

import './styles/global.css'


const initialState = { count: 0 } 
const store = createStore(counterReducer, initialState)

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'));
}

renderApp()

if(module.hot) {
  module.hot.accept('./containers/App.jsx', ()=> {
    render()
  })
}

