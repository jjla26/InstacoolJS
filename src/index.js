import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './ducks'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
    ...reducers,
}), applyMiddleware(thunk)) 

const history = createHistory()
ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>

</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
