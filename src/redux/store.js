/* eslint-disable import/prefer-default-export */
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import allReducers from './reducer';

const enhancers = applyMiddleware(reduxThunk);

const store = createStore(allReducers, composeWithDevTools(enhancers));

export {store};
