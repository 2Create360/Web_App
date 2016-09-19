import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Header from './header'


export default class PaymentConfirm extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="content height100vh">
                    <div className="background">
                        <div className="col-md-4 col-md-offset-4 text-center mainContent padding-top-20">
                            <div className="row text-white">
                                <h3>Please Confirm</h3>
                            </div>
                            <div className="row text-white">
                                <p><strong>Route Black Diamond -  High River</strong></p>
                                <p><strong>Type: Single use Qty:14</strong></p>
                                <p><strong>Total : $48.00</strong></p>
                            </div>
                            <div className="row text-center">
                                <Link to="/ticket" type="button" className="btn whiteBackground " id="confirm">Confirm
                                    <span className="btn-primary"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


