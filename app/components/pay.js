import React, { Component } from 'react';
import { Link } from 'react-router'
import CardReactFormContainer from 'card-react'

import '../styles/card.css'

class Pay extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3 col-xs-12 col-md-4 col-md-offset-4 margin-top-70">
                        <div className="panel panel-default credit-card-box">
                            <div className="panel-heading display-table width100" >
                                <div className="row display-tr" >
                                    <h3 className="panel-title display-td" >Payment Details</h3>
                                    <div className="display-td" >
                                        <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="card-container">
                                    <div id="card-wrapper"></div>
                                    <CardReactFormContainer
                                        container="card-wrapper" // required
                                        classes={
                                            {
                                                valid: 'valid-input', // optional — default 'jp-card-valid'
                                                invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                                            }
                                        }
                                    >
                                        <div className="form-container">
                                            <form action="/paymentconfirm">
                                                <label >Card Number</label>
                                                <input placeholder="XXXX  XXXX  XXXX  XXXX" type="text" name="number"/>
                                                <label>Name on Card</label>
                                                <input placeholder="Full Name" type="text" name="name"/><br/>
                                                <div className="cardForm-Field50">
                                                    <label>Expiry Date</label><br/>
                                                    <input placeholder="MM/YY" type="text" name="expiry" className="secondRow"/>
                                                </div>
                                                <div className="cardForm-Field50">
                                                    <label >CVC</label><br/>
                                                    <input placeholder="XXX" type="text" name="cvc" className="secondRow incorrectInfo"/>
                                                </div>
                                                <Link to="paymentconfirm" value="Pay $500.00" className="button btn CardGood width100">Pay $500.00</Link>
                                            </form>
                                        </div>

                                    </CardReactFormContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pay;