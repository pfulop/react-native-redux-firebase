import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './store/index';
import App from './components/App';
import { Provider } from 'react-redux';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
