import React from 'react';
import { Link } from 'react-router'

class BuyTicket extends React.Component{

    render(){
        return(
            <div className="tab-pane" id="tab_2">
                <h1>E-TICKET WALLET</h1><br/>
                <div className="col-md-12">
                    <div className="tickets_topbg"></div>
                    <div className="tickets_mdbg">
                        <div className="row">
                            <div className="col-xs-4 text-center">
                                <img src="img/bus.png" style={{marginTop:'15px', width:'100%', maxWidth:'186px'}}/>
                            </div>
                            <div className="col-xs-8">
                                <div className="custom-dropdown small text-center"  style={{display:'block'}}>
                                    <select className="glyphicon glyphicon-triangle-bottom text-center" id="buyTicketSelect">
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
                            <div className="col-md-4 text-center">
                                <p className="text-center" id="buyQuantityLabel"><strong>Qty of Tickets</strong></p>
                                <input className="form-control marginAuto width60" type="number" value="33"/>
                            </div>
                            <div className="col-md-8 margin-top-25" style={{fontSize:'2em', color:'#61a31b'}}>
                                <span className="pull-left"><strong>Total Cost : </strong></span>
                                <span className="pull-right"><strong>$55</strong></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center">
                            </div>
                            <div className="col-md-8 margin-top-10 text-right payBtn">
                                <a href="#" className="w3-btn w3-margin-bottom">Pay Now</a>
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
