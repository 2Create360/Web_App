import React from 'react'
import { Route } from 'react-router'
import App from './pages/app'
import Home from './pages/home'
import SignUp from './pages/signup'
import SignIn from './pages/signin'
import Ticket from './pages/ticket'
import Payment from './pages/payment'
import PaymentConfirm from './pages/paymentconfirm'

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