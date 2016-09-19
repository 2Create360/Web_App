/**
 * Created by Butterfly on 9/16/2016.
 */
import React, { Component, PropTypes } from 'react'
import { Field, SubmissionError, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {signInUser, signInUserSuccess, signInUserFailure} from '../actions/users';


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
            <div>
                <div className="row header">
                    <div className="col-md-2 col-sm-2">
                        <a className="scroll site-logo" href="#promo-block">
                            <img src="img/global/logo.png" alt="On-it"></img></a>
                    </div>
                </div>
                <div className="content height100vh signupContent">
                    <div className="background">
                        <div className="col-md-4 col-md-offset-4">
                            <form className="signup-form" onSubmit={handleSubmit(signInUserHandler)}>
                                <div className="form-title">
                                    <h3 className="text-center text-white">Login</h3></div>
                                <Field component={renderField} type="email" placeholder="Email Address" name="email"/>
                                <Field component = {renderField} type="password" placeholder="Password" name="password"/>
                                {error && <strong>{error}</strong>}
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary btn-block uppercase">Sign In</button>
                                </div>
                            </form>
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