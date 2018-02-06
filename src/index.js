import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom'
import { createStore } from 'redux'
import createBrowserHistory  from 'history/createBrowserHistory'
import {Provider} from 'react-redux'

import allReducers from './reducers/index'
import App from "./containers/app"

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = new createStore(allReducers)

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
            <Router history={history} >
                <App/>
            </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
