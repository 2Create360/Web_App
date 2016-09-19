import React from 'react'
import {Link} from 'react-router'

class Header extends React.Component{
    render(){
        return(
            <div className="row header ">
                <div className="col-md-2 col-sm-2">
                    <Link className="site-logo" to="/"><img src="img/global/logo.png" style={{height: 60+'px'}} alt="On-it" /></Link>
                </div>
                <div className="col-md-10 col-sm-10 text-right">
                    <ul className="nav navbar-nav pull-right">
                        <li>
                            <a href="#" className="btn-transparent no-bottom-padding no-top-padding" data-toggle="collapse" data-target="#profileContent">
                                <span className="fa fa-user" id="btnSetting"></span>
                            </a>
                            <ul id="profileContent" className="collapse dropdown-menu">
                                <h2 className="text-center"><strong>Your Profile</strong></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elt. Nulla
                                    quam velit, vulputate eu pharetra nec, mattls ac neque. Duls vulputate commodo lectus, ac blandlt elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit,
                                    et lacinia ipsum quam nec dul. Quisque nec mauris slt amet elt
                                </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <select className="width100" placeholder="Your location">
                                            <option>Mustard</option>
                                            <option>Ketchup</option>
                                            <option>Relish</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Postal Code"/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Home Phone"/>
                                    </div>
                                </div>
                                <div className="row">&nbsp;</div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <select className="width100" placeholder="Age Range">
                                            <option>Mustard</option>
                                            <option>Ketchup</option>
                                            <option>Relish</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <select className="width100" placeholder="Age Range">
                                            <option>Mustard</option>
                                            <option>Ketchup</option>
                                            <option>Relish</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Participate in Feedback surveys
                                        </label>
                                    </div>
                                </div>
                            </ul>

                        </li>
                        <li className="dropdown dropdown-extended " id="header_notification_bar">
                            <a href="javascript:;" className="dropdown-toggle no-bottom-padding no-top-padding" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                    <span className="fa fa-cog" id="btnSetting">
                                     </span>
                            </a>
                            <ul className="dropdown-menu">
                                <div className="dropdown-menu-list " style={{height: 105+'px'}} data-handle-color="#637283">
                                    <li>
                                        <a href="javascript:;">
                                                <span className="details">
                                                <i className="fa fa-circle"></i>
                                                MODIFY PASSWORD </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                                <span className="details">
                                                <i className="fa fa-info"></i>
                                                PAYMENT INFORMATION </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                                <span className="details">
                                                <i className="fa fa-mobile"></i>
                                                ACCOUNT AND MOBILE </span>
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
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

