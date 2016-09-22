import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component{
    render(){
        return(
            <div className="page-header md-shadow-z-1-i navbar navbar-fixed-top">
                <div className="page-header-inner">
                    <div className="page-logo">
                        <Link to="/">
                            <img src="img/global/logo.png" alt="logo" className="logo-default"/>
                        </Link>
                        <div className="menu-toggler sidebar-toggler hide">
                        </div>
                    </div>
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown dropdown-extended dropdown-tasks"><span id="welcome" className="text-white">Welcome</span></li>
                            <li className="dropdown dropdown-user">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <img src="img/sign/icon-color.png" />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-default" style={{float:'none',right:0,left: 'inherit',backgroundColor:'#ffffff'}}>
                                    <li>
                                        <a href="extra_profile.html">
                                            <i className="icon-user"><img src="img/sign/pwicon.png" /></i> Profile </a>
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

Header.propTypes = {
    isLoggedIn:React.PropTypes.bool,
    onLogout:React.PropTypes.func
};
Header.defaultProps = {
    isLoggedIn:false,
    onLogout:()=>{console.error("logout function not defined");}
}
export default Header;

