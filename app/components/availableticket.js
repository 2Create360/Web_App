import React from 'react';

class AvailableTicket extends React.Component{
    render(){
        return(
            <div id="home" className="tab-pane fade in active">
                <h2 className="text-center text-white font3em">E-TICKET WALLET</h2>
                <h3 className="text-white">You have 7 Valid E-Tickets in your wallet</h3>
                <div className="row yellowBackground">
                    <div className="col-md-5 col-xs-5">
                        <strong className="font1_3">ROUTE 4</strong>
                        <p><strong className="font1_3">Black  Diamond</strong></p>
                    </div>
                    <div className="col-md-2 col-xs-2">
                        <img src="img/narrowIcon.png" id="mainarrwo"/>
                    </div>
                    <div className="col-md-5 col-xs-5">
                        <strong className="font1_3">5 VALID TICKETS</strong>
                        <p><strong className="font1_3">Airdree</strong></p>
                    </div>
                </div>
                <div className="row grayBackground">
                    &nbsp;<strong className="font1_3 margin-left-10">Set to auto renew when min qty is : 2 </strong><a href="#">Change</a>
                </div>
                <div className="row whiteBackground">
                    <div className="col-md-3 col-xs-3 text-center borderright">
                        <a data-toggle="tab" href="#butyticket" aria-expanded="false">BUY MORE</a>
                    </div>
                    <div className="col-md-3 col-xs-3 text-center borderright">
                        <a href="#">TRANSFER</a>
                    </div>
                    <div className="col-md-3 col-xs-3 text-center borderright">
                        <a href="#">VIEW MAP</a>
                    </div>
                    <div className="col-md-3 col-xs-3 text-center">
                        <a href="#">SCHEDULE</a>
                    </div>
                </div>
            </div>


        )
    }
}

export default AvailableTicket;