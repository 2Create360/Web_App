import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import route from './route'
import configureStore from './store/configureStore'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{route}</Router>
    </Provider>,
    document.getElementById('root')
)
