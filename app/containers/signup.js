import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {signUpUser, signUpUserSuccess, signUpUserFailure, resetUser,
    validateUserFields,validateUserFieldsSuccess,validateUserFieldsFailure,
    resetValidateUserFields } from '../actions/users';
import { Link } from 'react-router'

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
    if(!values.confirmPassword || values.confirmPassword.trim() === '') {
        errors.confirmPassword = 'Enter Confirm Password';
        hasErrors = true;
    }

    if(values.confirmPassword  && values.confirmPassword.trim() !== '' && values.password  && values.password.trim() !== '' && values.password !== values.confirmPassword) {
        errors.password = 'Password And Confirm Password don\'t match';
        errors.password = 'Password And Confirm Password don\'t match';
        hasErrors = true;
    }
    return hasErrors && errors;
}


//For any field errors upon submission (i.e. not instant check)
function signUpUserHandler(values, dispatch) {

    return dispatch(signUpUser(values))
            .then(function(response) {
                let data = response.payload.data;

                if(data.hasError) {
                    //dispatch(signUpUserFailure(response.payload));
                    throw new SubmissionError({email: data.error, _error: 'Login failed!'});
                } else {
                    sessionStorage.setItem('token', response.payload.data.user.token);
                    dispatch(signUpUserSuccess(response.payload));
                }
            });
};

const renderField = ({ input, label,id, placeholder, type, meta: { touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="sr-only">{label}</label>
        <input type={type} className="form-control " {...input} id={id} placeholder={placeholder}/>
        <div className="help-block">
            {touched ? error : ''}
        </div>
    </div>
);

class SignUpForm extends Component {
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
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <div className="mainBackground">
                <div className="page-header md-shadow-z-1-i navbar navbar-fixed-top">
                    <div className="page-header-inner">
                        <div className="page-logo">
                            <Link to="/">
                                <img src="img/global/logo.png" style={{width: 97, height: 26}}alt="logo" className="logo-default"></img>
                            </Link>
                            <div className="menu-toggler sidebar-toggler hide">
                            </div>
                        </div>
                        <div className="top-menu">
                            <ul className="nav navbar-nav pull-right">
                                <li className="dropdown dropdown-extended dropdown-tasks"><span style={{lineHeight:46+'px',color:"white"}}>Welcome</span></li>
                                <li className="dropdown dropdown-user">
                                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                        <img src="img/sign/icon-color.png" ></img>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-default" style={{float:'none',right:0+'px',left:'inherit',backgroundColor:'#ffffff'}}>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-user"><img src="img/sign/pwicon.png" ></img></i> Modify Password </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-calendar"><img src="img/sign/money.png" style={{width:"20px", height:"20px"}}></img></i> Payment Information </Link>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <i className="icon-envelope-open"><img src="img/sign/mobile.png" style={{width:"20px", height:"20px"}}></img></i> Accound and Mobile </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                    </div>
                    </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="page-container">
                    <div style={{margin: 0,float:'none'}}>
                        <div className="page-content">
                            <div className="top-content">
                                <div className="inner-bg">
                                    <div className="container signContent">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3 form-box ">
                                                <div className="form-top">
                                                    <div className="form-top-left">
                                                        <h3 id="signHeader">Create your account</h3>
                                                        <p>Enter your Email adress and password to Signin:</p>
                                                    </div>
                                                    <div className="form-top-right">
                                                        <i className="fa fa-key"></i>
                                                    </div>
                                                </div>
                                                <div className="form-bottom">
                                                    <form role="form" onSubmit={handleSubmit(signUpUserHandler)} method="post" className="login-form">
                                                        <Field component={renderField} type="email" placeholder="Email Address" name="email" id="form-username"/>
                                                        <Field component = {renderField} type="password" placeholder="Password" name="password"id="form-username"/>
                                                        <Field component = {renderField} type="password" placeholder="Confirm Password" name="confirmPassword"id="form-password"/>
                                                        <button type="submit" className="btn">Sign in!</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3 social-login">
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

const mapDispatchToProps = (dispatch) => {
    return {
        resetMe: () =>{
            dispatch(resetValidateUserFields());
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        validateFields: state.validateFields
    };
}

SignUpForm = reduxForm({
    form: 'SignUpForm',
    validate
})(SignUpForm);

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);