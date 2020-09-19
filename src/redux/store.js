/* eslint-disable import/prefer-default-export */
import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {menuReducer, authReducer} from './reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authState'],
  blacklist: ['menuState'],
};

const menuPersistConfig = {
  key: 'menuState',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const allReducers = combineReducers({
  menuState: persistReducer(menuPersistConfig, menuReducer),
  authState: authReducer,
});

const persistedAllReducer = persistReducer(rootPersistConfig, allReducers);

const enhancers = applyMiddleware(reduxThunk);

const store = createStore(persistedAllReducer, composeWithDevTools(enhancers));
const persistor = persistStore(store);

export {store, persistor};
