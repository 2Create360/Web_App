var jwt = require('jsonwebtoken');
var config = require('../config.json')

function generateToken(user) {
    //Dont use password and other sensitive fields
    //Use fields that are useful in other parts of the app/collections/models
    var u = {
        email: user.email,
        _id: user._id.toString()
    };

    console.log(config.secret);
    var token = jwt.sign(u, config.secret, {expiresIn:1440});

    console.log(token);
    return token;
}

function validateSignUpForm(values, callback) {
    var errors = {};
    var hasErrors = false;

    if (!values.email || values.email.trim() === '') {
        errors.email = 'Enter email';
        hasErrors = true;
    }
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Enter password';
        hasErrors = true;
    }
    // if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    //     errors.confirmPassword = 'Enter Confirm Password';
    //     hasErrors = true;
    // }
    //
    // if (values.confirmPassword && values.confirmPassword.trim() !== '' && values.password && values.password.trim() !== '' && values.password !== values.confirmPassword) {
    //     errors.password = 'Password And Confirm Password don\'t match';
    //     errors.password = 'Password And Confirm Password don\'t match';
    //     hasErrors = true;
    // }

    if (callback) {
        callback(hasErrors && errors);
    } else {
        return hasErrors && errors;
    }
}

//strips internal fields like password and verifyEmailToken etc
function getCleanUser(user, token) {
    var u = user.toJSON();
    return {
        _id: u._id,
        email: u.email,
        token: token,
        isEmailVerified: u.isEmailVerified
    }
}

module.exports = {
    validateSignUpForm: validateSignUpForm,
    getCleanUser: getCleanUser,
    generateToken: generateToken
}