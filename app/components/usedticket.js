import React from 'react';
class UsedTicket extends React.Component{
    render(){
        return(
            <div id="menu2" className="tab-pane fade">
                <h2 className="text-center text-white font3em">E-TICKET WALLET</h2>
                <div className="ticketHistory">
                    <table className="table table-bordered whiteBackground text-center" id="datatable_ajax">
                        <thead>
                        <tr role="row" className="heading">
                            <th className="text-center" width="5%">
                                Route
                            </th>
                            <th className="text-center" width="15%">
                                Frome
                            </th>
                            <th className="text-center" width="15%">
                                To
                            </th>
                            <th className="text-center" width="10%">
                                Date
                            </th>
                        </tr>
                        <tr role="row" className="filter">
                            <td>
                                Route 2
                            </td>
                            <td>
                                Nanton
                            </td>
                            <td>
                                Chochrane
                            </td>
                            <td>
                                02/05/2016 3:15 pm
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default UsedTicket;
