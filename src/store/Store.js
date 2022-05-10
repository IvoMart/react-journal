// import { legacy_createStore as createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer';



/*
const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers, +
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

*/


const reducer = {
    auth: authReducer
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production'
})