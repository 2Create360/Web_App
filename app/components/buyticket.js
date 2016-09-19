import React from 'react';
import { Link } from 'react-router'

class BuyTicket extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            route: "",
            quantity: "",
            ticketCost:"",
            totalCost:"",
            volumeDiscount:"",
            total:"",
            gstPercent:"",
            amount:""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        return(
            <div id="butyticket" className="tab-pane fade">
                <h2 className="text-center text-white font3em">E-TICKET WALLET</h2>
                <div className="row">
                    <select className="width100 height38">
                        <option value="1">Chocraine Airdre Route 4</option>
                        <option value="2">BlackDiamond Nanton R5</option>
                        <option value="3">High river Calgary R6</option>
                    </select>
                </div>
                <div className="row top20">
                    <div className="col-md-6 col-xs-6 no-padding">
                        <h4 className="text-white">Qty of Tickets</h4>
                        <input type="Number" className="height38 width100" max="200" placeholder="QUANTITY OF TICKETS"/>
                    </div>
                    <div className="col-md-6 col-xs-6">
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>PerTicket cost:</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$2.50</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>Total Cost:</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$2.50</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>Volume Discount:</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$2.50</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>Total:</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$25.00</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>GST:(5%)</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$1.00</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-xs-8 text-yellow">
                                <strong>Amount Due</strong>
                            </div>
                            <div className="col-md-4 col-xs-4  text-yellow">
                                <strong>$26.00</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row padding33">
                    <div className="checkbox">
                        <label className="text-white">
                            <input type="checkbox" /> August Month Pass(Unlimited Use)
                        </label>
                    </div>
                </div>
                <div className="row text-center">
                    <Link type="button" to="/payment" className="btn whiteBackground " value="Pay Now" id="payNow">Continue
                        <span className="glyphicon glyphicon glyphicon-arrow-right pull-right text-white btn-primary"></span>
                    </Link>
                </div>
            </div>
        )
    }
}
export default BuyTicket;
