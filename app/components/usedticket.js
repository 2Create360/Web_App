import React from 'react';
class UsedTicket extends React.Component{
    render(){
        return(
            <div className="tab-pane" id="usedTicket">
                <h1>E-TICKET WALLET</h1>
                <div>
                    <h3 className="text-black" className="pull-left" style={{display:'table'}}>History past 4 monthd</h3>
                    <span className="custom-dropdown small pull-right">
										<select>
											<option>Filter by Route</option>
											<option>The Great Gatsby</option>
											<option>V for Vendetta</option>
											<option>The Wolf of Wallstreet</option>
											<option>Quantum of Solace</option>
										</select>
									</span>
                </div>
                <div>
                    <table className="customers">
                        <tbody>
                            <tr>
                                <th>Date/Time</th>
                                <th>Route</th>
                                <th>From</th>
                                <th>To</th>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                            <tr>
                                <td>13:20/09/19/2016</td>
                                <td>Route1</td>
                                <td>Nanton</td>
                                <td>Chochrane</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default UsedTicket;
