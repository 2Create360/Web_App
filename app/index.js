import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'

// import 'jquery/dist/jquery.min'
// import 'jquery-ui-dist/jquery-ui.min'
// import 'bootstrap/dist/js/bootstrap.min'
 import 'bootstrap/dist/css/bootstrap.min.css'

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
