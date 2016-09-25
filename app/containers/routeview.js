import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Navbar from '../components/navbar'

class RouteView extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 no-padding">
                        <div className="label label-danger visible-ie8">
                            Not supported in Internet Explorer 8
                        </div>
                        <div id="googlemap" >
                            <div id="maptitle" className="row">
                                <div className="col-md-10">
                                    <a href="/ticket" className="text-left">Back to </a>
                                    <p className="text-left">Weekdays 6:30-10,4:30-7:30pm</p>
                                </div>
                                <div className="col-md-1 titleTime" >
                                    <span>AM</span>
                                </div>
                                <div className="col-md-1 titleTime selected"><span>PM</span></div>
                            </div>
                            <div id="gmap_routes" className="gmaps">
                            </div>
                            <ol id="gmap_routes_instructions">
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
};

export default connect(null,mapDispatchToProps)(RouteView);