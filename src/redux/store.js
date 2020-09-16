/* eslint-disable import/prefer-default-export */
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import allReducers from './reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authState'],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const enhancers = applyMiddleware(reduxThunk);

const store = createStore(persistedReducer, composeWithDevTools(enhancers));
const persistor = persistStore(store);

export {store, persistor};
