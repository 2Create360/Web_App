'use strict'

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerReducer as routing} from 'react-router-redux'
import UserReducer from './users'
import TicketReducer from './tickets'

const rootReducer = combineReducers({
    routing,
    form: formReducer,
    user: UserReducer,
    tickets: TicketReducer
});

export default rootReducer