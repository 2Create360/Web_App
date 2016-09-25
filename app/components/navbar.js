import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router'

class Navbar extends Component{

    componentWillReceiveProps(nextProps) {
        if(this.props.user.user && !nextProps.user.user) {
            this.context.router.push('/');
        }
    }

    renderAuthenticated(authenticatedUser) {
        if (authenticatedUser) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#main-info" >About</a></li>
                    <li><a href="#" className="scroll">Contact</a></li>
                    <li><Link to="/ticket">My Ticket</Link></li>
                    <li className="dropdown dropdown-user">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <img src="img/sign/icon-color.png" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-default whiteBackground" id="subTopMenu" >
                            <li>
                                <Link to="/profile"><i className="icon-user"><img src="img/sign/pwicon.png" /></i> Profile Setting</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            );
        }
        else {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#main-info" >About</a></li>
                    <li><a href="#" className="scroll">Contact</a></li>
                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            )
        }
    }

    render() {
        const { authenticatedUser } = this.props;
        return(
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top open">
                    <div className="container width100">
                        <div className="navbar-header margin-left-0">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="logo" to="/"><img src="img/global/logo.png" alt="Logo"/></Link>
                        </div>

                        <div className="navbar-collapse collapse">
                            {this.renderAuthenticated(authenticatedUser)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar);

