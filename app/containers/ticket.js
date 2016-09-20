import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import AvailableTicket from '../components/availableticket'
import BuyTicket from '../components/buyticket'
import Header from '../components/header'
import UsedTicket from '../components/usedticket'


class Ticket extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="content height100vh signupContent">
                    <div className="background">
                        <div className="col-md-4 col-md-offset-4 mainContent">
                            <ul className="nav nav-tabs blackBackground noborder">
                                <li className="col-md-4 col-xs-4 text-center active"><a data-toggle="tab" href="#home">Available Tickets</a></li>
                                <li className="col-md-4 col-xs-4 text-center"><a data-toggle="tab" href="#butyticket">Buy tickets</a></li>
                                <li className="col-md-4 col-xs-4 text-center"><a data-toggle="tab" href="#menu2">Used tickets</a></li>
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