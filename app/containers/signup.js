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

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className={`form-group ${touched && error ? 'has-error' : ''}`}>
        <label className="control-label">{label}</label>
        <input type={type} className="form-control form-control-solid placeholder-no-fix" {...input} placeholder={placeholder}/>
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
            <div>
                <div className="row header">
                    <div className="col-md-2 col-sm-2">
                        <Link className="scroll site-logo" to="/">
                            <img src="img/global/logo.png" alt="On-it"></img></Link>
                    </div>
                </div>
                <div className="content height100vh signupContent">
                    <div className="background">
                        <div className="col-md-4 col-md-offset-4">
                            <form className="signup-form" onSubmit={handleSubmit(signUpUserHandler)}>
                                <div className="form-title">
                                    <h3 className="text-center text-white">Create your Account</h3></div>
                                <Field component={renderField} type="email" placeholder="Email Address" name="email"/>
                                <Field component = {renderField} type="password" placeholder="Password" name="password"/>
                                <Field component = {renderField} type="password" placeholder="Confirm Password" name="confirmPassword"/>
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary btn-block noborder">Sign Up</button>
                                </div>
                            </form>
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