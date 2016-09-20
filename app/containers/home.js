
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import Sidebar from '../components/sidebar'

class Home extends Component {

    render() {
        return (
            <div>
                <div className="promo-block" id="promo-block">
                    <div className="row">
                        <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                        </a>
                        <Sidebar></Sidebar>
                        <div className="col-md-9" id="slideContent">
                            <div className={`col-md-11 text-right ${this.props.authenticatedUser ? 'hidden' : ''}`} id="startButtons">
                                <Link to="/signin" className="btn btn-primary noborder">Sign In</Link>
                                <Link to="/signup" className="btn btn-primary noborder">Sign Up</Link>
                            </div>
                            <div className="tp-banner-container">
                                <div className="tp-banner" >
                                    <ul>
                                        <li data-transition="slidevertical" data-slotamount="5" data-masterspeed="700" data-delay="9400" className="slider-item-1">
                                            <img src="img/slide1.jpg" alt="" data-bgfit="cover" style={{opacity: 0.4}} data-bgposition="center center" data-bgrepeat="no-repeat" />
                                            <div className="tp-caption large_text customin customout start"
                                                 data-x="center"
                                                 data-hoffset="0"
                                                 data-y="center"
                                                 data-voffset="60"
                                                 data-customin="x:0;y:0;z:0;rotationX:90;rotationY:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                                                 data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
                                                 data-speed="1000"
                                                 data-start="500"
                                                 data-easing="Back.easeInOut"
                                                 data-endspeed="300">
                                                <div className="promo-like"><i className="fa fa-thumbs-up"></i></div>
                                                <div className="promo-like-text">
                                                    <h2>Let's just do it</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit amet sed diam nonummy nibh <a href="javascript:void(0);">dolore</a></p>
                                                </div>
                                            </div>
                                            <div className="tp-caption large_bold_white fade"
                                                 data-x="center"
                                                 data-y="center"
                                                 data-voffset="-110"
                                                 data-speed="300"
                                                 data-start="1700"
                                                 data-easing="Power4.easeOut"
                                                 data-endspeed="500"
                                                 data-endeasing="Power1.easeIn"
                                                 data-captionhidden="off"
                                                 style={{zIndex: 6}}
                                            ><span>On-it</span> Has Arrived
                                            </div>
                                        </li>
                                        <li data-transition="slidevertical" data-slotamount="5" data-masterspeed="700" data-delay="9400" className="slider-item-2">
                                            <img src="img/Slide2_bg.jpg" alt="slidebg2" data-bgfit="cover" data-bgposition="center center" data-bgrepeat="no-repeat" />
                                            <div className="caption lft start"
                                                 data-y="center"
                                                 data-voffset="40"
                                                 data-x="center"
                                                 data-hoffset="-250"
                                                 data-speed="600"
                                                 data-start="500"
                                                 data-easing="easeOutBack"><img src="img/Slide2_iphone_left.png" alt="" />
                                            </div>
                                            <div className="caption lft start"
                                                 data-y="center"
                                                 data-voffset="130"
                                                 data-x="center"
                                                 data-hoffset="170"
                                                 data-speed="600"
                                                 data-start="1200"
                                                 data-easing="easeOutBack"><img src="img/Slide2_iphone_right.png" alt="" />
                                            </div>
                                            <div className="tp-caption large_bold_white fade"
                                                 data-x="center"
                                                 data-y="40"
                                                 data-speed="300"
                                                 data-start="1700"
                                                 data-easing="Power4.easeOut"
                                                 data-endspeed="500"
                                                 data-endeasing="Power1.easeIn"
                                                 data-captionhidden="off"
                                                 style={{zIndex: 6}}>Extremely <span>Responsive</span> Design
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content content-center row" id="about">
                    <div className="col-md-5 no-padding">
                        <img src="img/bus.png" className="img-responsive" />
                    </div>
                    <div className="col-md-5 col-md-offset-1 rightContent">
                        <h2 className="text-left">Ride with On-It</h2>
                        <h5 className="text-left">
                            Loren ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h5>
                        <h5 className="text-left">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h5>
                        <h5 className="text-left">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla paritur.Excepteur sint
                        </h5>
                        <p>&nbsp;</p>
                        <p className="text-right">
                            <a href="#" className="text-right">Link to ABOUT ON-IT</a>
                        </p>
                    </div>
                </div>
                <div className="content content-center row" id="services">
                    <div className="col-md-5 no-padding">
                        <img src="img/phone.png" className="img-responsive" />
                    </div>
                    <div className="col-md-5 col-md-offset-1 rightContent">
                        <h2 className="text-left">Easy ticket purchase</h2>
                        <h5 className="text-left">
                            Loren ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h5>
                        <h5 className="text-left">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h5>
                        <h5 className="text-left">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla paritur.Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </h5>
                        <h5 className="text-left">
                            accusantium doloremque laudantium, totam rem aperiam,
                            eaquee ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enum
                            ipsam voluptatem quia voluptas sit
                        </h5>
                        <p>&nbsp;</p>
                        <p className="text-right">
                            <a href="#" className="text-right">Link to TICKETS</a>
                        </p>
                    </div>
                </div>
                <div className="content content-center valign-center row" id="message-block">
                    <div className="col-md-5 no-padding">
                        <div id="googlemap" >
                            <div id="maptitle" className="row">
                                <div className="col-md-10">
                                    <h3 className="text-left">Our Route</h3>
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
                    <div className="col-md-5 col-md-offset-1 rightContent">
                        <h2 className="text-left">Check out our routes</h2>
                        <h5 className="text-left">
                            Loren ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </h5>
                        <h5 className="text-left">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </h5>
                        <h5 className="text-left">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla paritur.Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </h5>
                        <h5 className="text-left">
                            accusantium doloremque laudantium, totam rem aperiam,
                            eaquee ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enum
                            ipsam voluptatem quia voluptas sit
                        </h5>
                        <p>&nbsp;</p>
                        <p className="text-right">
                            <a href="#" className="text-right">Link to ROUTES</a>
                        </p>
                    </div>
                </div>

                <a href="#promo-block" className="go2top scroll"><i className="fa fa-arrow-up"></i></a>
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