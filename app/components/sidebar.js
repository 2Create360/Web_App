import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

export default class Sidebar extends Component {

    render() {
        return (
            <div className="col-md-3" id="sidebar">
                <div className="page-sidebar-wrapper">
                    <div className="page-sidebar navbar-collapse collapse">
                        <ul className="page-sidebar-menu" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                            <li className="start">
                                <a href="javascript:;">
                                    <img src="img/startLogo.png" className="img-responsive" />
                                </a>
                            </li>
                            <li className="active">
                                <a href="javascript:;">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">HOME </span>
                                </a>
                            </li>
                            <li className="">
                                <Link to="javascript:;">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">ABOUT ON-IT </span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/ticket">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">TICKETS</span>
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/routeview">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">ROUTES & SCHEDULES</span>
                                </Link>
                            </li>
                            <li className="start">
                                <a href="javascript:;">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">BLOG</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="javascript:;">
                                    <i className="icon-color"></i>
                                    <i className="icon-color"></i>
                                    <span className="title">CONTACT</span>
                                </a>
                            </li>
                            <li className="last" id="socialButtons">
                                <ul className="social-icons">
                                    <li><a className="facebook" data-original-title="facebook" href="javascript:void(0);"></a></li>
                                    <li><a className="twitter" data-original-title="twitter" href="javascript:void(0);"></a></li>
                                    <li><a className="linkedin" data-original-title="linkedin" href="javascript:void(0);"></a></li>
                                    <li><a className="vimeo" data-original-title="vimeo" href="javascript:void(0);"></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
