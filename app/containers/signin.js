import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {signInUser, signInUserSuccess, signInUserFailure} from '../actions/users';
import { Link } from 'react-router'
import Navbar from '../components/navbar'
import SocialLogin from '../components/sociallogin';
import '../styles/sign.css'

//Client side validation
function validate(values) {
    var errors = {};
    var hasErrors = false;

    if(!values.email || values.email.trim() === '') {
        errors.email = 'Enter email';
        hasErrors = true;
    }
    if(!values.password || values.password.trim() === '') {
        errors.password = 'Enter password';
        hasErrors = true;
    }

    return hasErrors && errors;
}

function signInUserHandler(values, dispatch) {

    return dispatch(signInUser(values))
            .then(function(response) {
                let data = response.payload.data;
                if(data.hasError) {
                    //let other components know of error by updating the redux` state
                    dispatch(signInUserFailure(data));
                    throw new SubmissionError({ _error: data.error })
                } else {
                    sessionStorage.setItem('token', data.user.token);
                    dispatch(signInUserSuccess(data));
                }
            });
};

const renderField = ({ input, label, placeholder, type, meta: { asyncValidating, touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <input type={type} className="form-control form-control-solid placeholder-no-fix" {...input} placeholder={placeholder}/>
        <div className="help-block">
            {touched ? error : ''}
        </div>
        <div className="help-block">
            {asyncValidating === 'email' ? 'validating..': ''}
        </div>
    </div>
);

class SignInForm extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        //Important! If your component is navigating based on some global state(from say componentWillReceiveProps)
        //always reset that global state back to null when you REMOUNT
        //this.props.resetMe();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
            this.context.router.push('/');
        }

        // if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
        //     console.log(nextProps);
        // }
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="mainBackground">
                <Navbar/>
                <div className="clearfix">
                </div>
                <div className="page-container">
                    <div className="no-margin no-float">
                        <div className="page-content">
                            <div className="top-content">
                                <div className="inner-bg">
                                    <div className="container signContent">
                                        <div className="row">
                                            <div className="col-sm-4 col-sm-offset-4 form-box ">
                                                <div className="form-top">
                                                    <div className="form-top-left">
                                                        <h3 id="signHeader">Login your account</h3>
                                                    </div>
                                                    <div className="form-top-right">
                                                        <i className="fa fa-key"></i>
                                                    </div>
                                                </div>
                                                <div className="form-bottom">
                                                    <form role="form" onSubmit={handleSubmit(signInUserHandler)} method="post" className="login-form">
                                                        <Field component={renderField} type="email" placeholder="Email Address" name="email"/>
                                                        <Field component = {renderField} type="password" placeholder="Password" name="password"/>
                                                            {error && <strong>{error}</strong>}
                                                        <button type="submit" className="btn">Sign In</button>
                                                        <p>&nbsp;</p>
                                                        <p className="text-center">Not a member? <Link to="/signup">Sign Up</Link></p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <SocialLogin/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
    };
}

SignInForm = reduxForm({
    form: 'SignInForm',
    validate
})(SignInForm);

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default connect(mapStateToProps)(SignInForm);