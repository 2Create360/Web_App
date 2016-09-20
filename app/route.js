import React from 'react'
import { Route } from 'react-router'
import App from './containers/app'
import Home from './containers/home'
import SignUp from './containers/signup'
import SignIn from './containers/signin'
import Ticket from './containers/ticket'
import Payment from './containers/payment'
import PaymentConfirm from './containers/paymentconfirm'

export default (
    <Route component={App}>
        <Route path="/" component={Home}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/ticket" component={Ticket}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/paymentconfirm" component={PaymentConfirm}></Route>
    </Route>
)