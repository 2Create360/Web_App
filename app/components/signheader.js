import React from 'react'
import {Link} from 'react-router'

class signHeader extends React.Component{
    render() {
        return (
            <div className="page-header md-shadow-z-1-i navbar navbar-fixed-top">
                <div className="page-header-inner">
                    <div className="page-logo">
                        <Link to="/">
                            <img src="img/global/logo.png" style={{width: 97, height: 26}} alt="logo"
                                 className="logo-default"></img>
                        </Link>
                        <div className="menu-toggler sidebar-toggler hide">
                        </div>
                    </div>
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown dropdown-extended dropdown-tasks"><span
                                style={{lineHeight:46+'px',color:"white"}}>Welcome</span></li>
                            <li className="dropdown dropdown-user">
                                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"
                                   data-hover="dropdown" data-close-others="true">
                                    <img src="img/sign/icon-color.png"></img>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default"
                                    style={{float:'none',right:0+'px',left:'inherit',backgroundColor:'#ffffff'}}>
                                    <li>
                                        <Link to="/">
                                            <i className="icon-user"><img src="img/sign/pwicon.png"></img></i> Modify
                                            Password </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon-calendar"><img src="img/sign/money.png"
                                                                              style={{width:"20px", height:"20px"}}></img></i>
                                            Payment Information </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon-envelope-open"><img src="img/sign/mobile.png"
                                                                                   style={{width:"20px", height:"20px"}}></img></i>
                                            Accound and Mobile </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default signHeader;