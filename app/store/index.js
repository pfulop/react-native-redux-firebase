import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {APIKEY,AUTHDOMAIN,DATABASEURL,STORAGEBUCKET} from '../../config.js';
import firebase from 'firebase';
import thunk from 'redux-thunk';

export default function configureStore () {

  const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTHDOMAIN,
    databaseURL: DATABASEURL,
    storageBucket: STORAGEBUCKET,
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const middleware = applyMiddleware(thunk.withExtraArgument(firebaseApp));

  const store =createStore(rootReducer,middleware);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
