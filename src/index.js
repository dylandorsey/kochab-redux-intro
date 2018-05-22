import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// action is whatever was dispatched from App.js (or whichever component)
const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        return state + 1;
    } else if (action.type === 'MINUS') {
        return state - 1;
    }
    return state;
}

// Box of oreos reducer
const secondsies = (state = [], action) => {// set state to an empty array to start
    if (action.type === 'BUTTON_TWO') {
        return [...state, ']O[']; // add an 'oreo' to state
    } else if (action.type === 'EAT_OREOS') {
        return [];}

    return state;
}

const thirdsies = (state = [], action) => {
    if (action.type === 'SUBMIT_FORM') {
        return [...state, action.payload];
    } 
    return state;
}

// create a store instance
// this can take in only one reducer
const storeInstance = createStore(
    // combine multiple reducers
    // and do some extra validation
    combineReducers({
        firstReducer: firstReducer,
        secondsies: secondsies,
        thirdsies: thirdsies,
    }),
    applyMiddleware(logger),
);

// the Provider will glue togther the react app with the redux store


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

