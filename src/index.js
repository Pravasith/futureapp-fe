import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createBrowserHistory  from 'history/createBrowserHistory'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import allReducers from './reducers/index'
import App from "./containers/app"

import 'bootstrap/dist/css/bootstrap.min.css'

import registerServiceWorker from './registerServiceWorker'


const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore)(allReducers)
// const store = new createStore(allReducers)

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
            <Router history={history} >
                <App/>
            </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
