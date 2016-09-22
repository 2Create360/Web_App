import React from 'react';

class Ticket extends React.Component{
    render(){
        return(
            <div className="ticket">
                <div className="ticket-head">
                    <div className="row">
                        <div className="col-xs-6">Route <mark className="text-white backgrountActive" >{this.props.routeNumber}</mark></div>
                        <div className="col-xs-6 text-right"><mark className="text-white backgrountActive"  >{this.props.ticketCount}</mark> Valid Ticket</div>
                    </div>
                    <div className="row paddingtop1">
                        <div className="col-xs-4 tbl-cell">
                            {this.props.from}
                        </div>
                        <div className="col-xs-4 tbl-cell text-center">
                            <img src="img/icon1.png"/>
                        </div>
                        <div className="col-xs-4 tbl-cell text-right">
                            {this.props.to}
                        </div>
                    </div>
                </div>
                <div className="ticket-qty text-black">
                    Set to auto renew when min qty is :{this.props.minCount} <span className='qty_value'> Change</span>
                </div>
            </div>
        )
    }
}
Ticket.defaultProps = {
    from: 'Black Diamond',
    to: 'Airdree',
    routeNumber: '3',
    ticketCount:'0',
    minCount:'2'
};

class AvailableTicket extends React.Component{
    render(){
        return(
            <div className="tab-pane active" id="availableTicket">
                <h1 className="text-black">E-TICKET WALLET</h1>
                <h3 className="text-black">You have 7 Valid E-Tickets in your wallet.</h3>
                <Ticket routeNumber="4" from="Black Diamond" ticketCount="5" to="Aridree" minCount="2" />
                <Ticket routeNumber="4" from="Black Diamond" ticketCount="5" to="Aridree" minCount="2" />
            </div>
        )
    }
}

export default AvailableTicket;