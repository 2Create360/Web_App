import React from 'react';

class AvailableTicket extends React.Component{
    render(){
        return(
            <div className="tab-pane active" id="tab_1">
                <h1>E-TICKET WALLET</h1>
                <h3>You have 7 Valid E-Tickets in your wallet.</h3>
                <div className="ticket">
                    <div className="ticket-head">
                        <div className="row">
                            <div className="col-xs-6">Route <mark style={{backgroundColor: '#1f6ec5', color:'#ffffff'}}>4</mark></div>
                            <div className="col-xs-6 text-right"><mark style={{backgroundColor: '#1f6ec5', color:'#ffffff'}}>5</mark> Valid Ticket</div>
                        </div>
                        <div className="row paddingtop1">
                            <div className="col-xs-4 tbl-cell">
                                Black Diamond
                            </div>
                            <div className="col-xs-4 tbl-cell text-center" style={{textAlign:'center'}}>
                                <img src="img/icon1.png"/>
                            </div>
                            <div className="col-xs-4 tbl-cell text-right">
                                Airdree
                            </div>
                        </div>
                    </div>
                    <div className="ticket-qty">
                        Set to auto renew when min qty is :2 <span className='qty_value'> Change</span>
                    </div>
                </div>

                <div className="ticket">
                    <div className="ticket-head">
                        <div className="row">
                            <div className="col-xs-6">Route <mark style={{backgroundColor: '#1f6ec5', color:'#ffffff'}}>4</mark></div>
                            <div className="col-xs-6 text-right"><mark style={{backgroundColor:'#1f6ec5', color:'#ffffff'}} >5</mark> Valid Ticket</div>
                        </div>
                        <div className="row paddingtop1">
                            <div className="col-xs-4 tbl-cell">
                                Black Diamond
                            </div>
                            <div className="col-xs-4 tbl-cell text-center" style={{textAlign:'center'}}>
                                <img src="img/icon1.png"/>
                            </div>
                            <div className="col-xs-4 tbl-cell text-right">
                                Airdree
                            </div>
                        </div>
                    </div>
                    <div className="ticket-qty">
                        Set to auto renew when min qty is :2 <span className='qty_value'> Change</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default AvailableTicket;