import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import AvailableTicket from '../components/availableticket'
import BuyTicket from '../components/buyticket'
import Header from '../components/navbar'
import UsedTicket from '../components/usedticket'


class Ticket extends Component {



    render() {
        return (
            <div className="mainBackground ticketPage">
                <Header/>
                <div className="page-container margin-top-46">
                    <div className="page-content-wrapper col-md-7 col-xs-12 no-margin no-float margin-auto">
                        <div className="page-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tabbable-line boxless">
                                        <ul className="nav nav-tabs" id="ticketTab">
                                            <li className="active">
                                                <a href="#availableTicket" data-toggle="tab">
                                                    Avaiable Tickets</a>
                                            </li>
                                            <li>
                                                <a href="#buyTicket" data-toggle="tab">
                                                    Buy Tickets</a>
                                            </li>
                                            <li>
                                                <a href="#usedTicket" data-toggle="tab">
                                                    Used Tickets</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <AvailableTicket />
                                            <BuyTicket/>
                                            <UsedTicket/>
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

function mapStateToProps(state, ownProps) {
    return {

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Ticket);