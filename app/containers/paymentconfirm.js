import { connect } from 'react-redux';
import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import Header from '../components/header'

class PaymentConfirm extends Component {

    render() {
        return (
            <div className="mainBackground">
                <Header/>
                <div className="clearfix">
                </div>

                <div className="container ">
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 margin-top-70" >
                            <div className="panel panel-default credit-card-box">
                                <div className="panel-heading display-table width100">
                                    <div className="row display-tr" >
                                        <h3 className="panel-title display-td text-center" >Confirm</h3>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="card-container">
                                        <div className="card-wrapper"></div>
                                        <div className="form-container">
                                            <form action="/ticket">
                                                <div>
                                                    <img src="img/ticket/Ticket-icon.png"/>
                                                    <p className="margin-top-15">Route Black Diamond - High River</p>
                                                    <p>Type:Sing use Qty:14</p>
                                                    <p>Total : $48.00</p>
                                                    <p>&nbsp;</p>
                                                </div>
                                                <Link to="/ticket"  className="button CardGood btn width100">Confirm</Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(null, mapDispatchToProps)(PaymentConfirm);