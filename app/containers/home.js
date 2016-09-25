
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'
import Navbar from '../components/navbar'


class Home extends Component {

    componentDidMount(){
        window.onload =  function () {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0,          // distance to the element when triggering the animation (default is 0)
                    mobile: false        // trigger animations on mobile devices (true is default)
                }
            );
            wow.init();
        }
    }
    render() {
        return (
            <div>
                <Navbar/>
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
                    <div className="container" >
                        <div className="iphone wow fadeInUp" data-wow-delay="1s" >
                            <img src="img/bus1.png"/>
                        </div>
                    </div>
                </section>
                <section id="main-info" className="pad-xl">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                                <span className="line purple">
                                     <hr className="line purple"/>
                                    <h3>Ride with On-It</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut est facilisis, eu elementum mi volutpat. Pellentesque ac tristique nisi.</p>
                                </span>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                                <span  className="line blue">
                                     <hr className="line blue"/>
                                    <h3>Easy ticket purchase</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra orci ut est facilisis, eu elementum mi volutpat. Pellentesque ac tristique nisi.</p>
                                </span>
                            </div>
                            <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                                <span  className="line yellow">
                                     <hr className="line yellow"/>
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
                            <div className="col-sm-8 margin-20 text-center-xs">
                                <ul className="list-inline social">
                                    <li>Connect with us on</li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 text-right-sm text-center-xs">
                                <p><small>Copyright &copy; 2016. All rights reserved.</small></p>
                            </div>
                        </div>
                    </div>
                </footer>
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