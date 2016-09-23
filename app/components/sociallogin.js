import React from 'react'
import {Link} from 'react-router'

class SocialLogin extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4 social-login">
                    <h3>...or login with:</h3>
                    <div className="social-login-buttons">
                        <a className="btn btn-link-1 btn-link-1-facebook" href="#">
                            <i className="fa fa-facebook"></i> Facebook
                        </a>
                        <a className="btn btn-link-1 btn-link-1-twitter" href="#">
                            <i className="fa fa-twitter"></i> Twitter
                        </a>
                        <a className="btn btn-link-1 btn-link-1-google-plus" href="#">
                            <i className="fa fa-google-plus"></i> Google Plus
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default SocialLogin;
