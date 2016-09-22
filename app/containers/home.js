
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="navbar navbar-inverse navbar-fixed-top open">
                    <div className="container" style={{width:'100%'}}>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="logo" to="/"><img src="img/global/logo.png" alt="Logo"/></Link>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#pricing" className="scroll">Home</a></li>
                                <li><a href="#footer" >About</a></li>
                                <li><a href="#pricing" className="scroll">Contact</a></li>
                                <li><Link to="/signin">Sign in</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header>
                    <div className="container">
                        <div className="row header-info">
                            <div className="col-sm-10 col-sm-offset-1 text-center">
                                <h1 className="wow fadeIn">Your daily commute just got a little easier...</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="mouse-icon hidden-xs">
                    <div className="scroll"></div>
                </div>
                <section id="be-the-first" className="pad-xl">
                    <div className="container">
                        <div className="iphone wow fadeInUp" data-wow-delay="1s">
                            <img src="img/bus1.png"/>
                        </div>
                    </div>
                </section>
                <section id="main-info" className="pad-xl">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                                <span className="line purple">
                                    <h3>Ride with On-It</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut est facilisis, eu elementum mi volutpat. Pellentesque ac tristique nisi.</p>
                                </span>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                                <span  className="line blue">
                                    <h3>Easy ticket purchase</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut est facilisis, eu elementum mi volutpat. Pellentesque ac tristique nisi.</p>
                                </span>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                                <span  className="line yellow">
                                    <h3>Check out our routes</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut est facilisis, eu elementum mi volutpat. Pellentesque ac tristique nisi.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 margin-20">
                                <ul className="list-inline social">
                                    <li>Connect with us on</li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 text-right">
                                <p><small>Copyright &copy; 2016. All rights reserved.</small></p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div id="footer"></div>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {

    }
};

function mapStateToProps(state, ownProps) {
    return {
        authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
        user: state.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);