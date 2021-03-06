import React from 'react';
import { Link } from 'react-router'

class BuyTicket extends React.Component{

    handleChange(event) {
        this.setState({value: event.target.value.substr(0, 140)});
    }

    render(){
        return(
            <div className="tab-pane" id="buyTicket">
                <h1 className="text-black">E-TICKET WALLET</h1><br/>
                <div className="col-md-12">
                    <div className="tickets_topbg"></div>
                    <div className="tickets_mdbg">
                        <div className="row">
                            <div className="col-xs-4 text-center">
                                <img src="img/ticket/bus.png" className="margin-top-15 width100" id="availableBus"/>
                            </div>
                            <div className="col-xs-8">
                                <div className="custom-dropdown small text-center show" >
                                    <select className="text-center width100" id="buyTicketSelect">
                                        <option>Filter by Route</option>
                                        <option>The Great Gatsby</option>
                                        <option>V for Vendetta</option>
                                        <option>The Wolf of Wallstreet</option>
                                        <option>Quantum of Solace</option>
                                    </select>
                                </div>
                                <div className="">
                                    <h1 id="buyTicketHeader" className="text-right">TICKET</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 text-center">
                                <p className="text-center" id="buyQuantityLabel"><strong>Qty of Tickets</strong></p>
                                <input className="form-control marginAuto width60" type="number" value="33"  onChange={this.handleChange}/>
                            </div>
                            <div className="col-md-8 margin-top-25 font2" id="totalCost">
                                <span className="pull-left"><strong>Total Cost : </strong></span>
                                <span className="pull-right"><strong>$55</strong></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-8 text-center">
                            </div>
                            <div className="col-md-8 margin-top-10 text-right payBtn">
                                <Link to="/payment" className="w3-btn w3-margin-bottom text-white">Pay Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="tickets_btbg"></div>
                </div>
            </div>
    )
    }
}
export default BuyTicket;
