'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function isUserUnique(reqBody, cb) {
    var username = reqBody.username ? reqBody.username.trim() : '';
    var email = reqBody.email ? reqBody.email.trim() : '';

    _user2.default.findOne({
        $or: [{
            'username': new RegExp(["^", username, "$"].join(""), "i")
        }, {
            'email': new RegExp(["^", email, "$"].join(""), "i")
        }]
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            cb();
            return;
        }

        var err;
        if (user.username === username) {
            err = {};
            err.username = '"' + username + '" is not unique';
        }
        if (user.email === email) {
            err = err ? err : {};
            err.email = '"' + email + '" is not unique';
        }

        cb(err);
    });
}

router.get('/users/?', function (req, res) {

    if (!req.user || !req.user.admin) return res.status(401).json({
        hasError: true,
        error: 'You must be admin to access this route.'
    });

    _user2.default.find({}).select({
        password: 0,
        __v: 0,
        updatedAt: 0,
        createdAt: 0
    }) //make sure to not return password (although it is hashed using bcrypt)
    .limit(100).sort({
        createdAt: -1
    }).exec(function (err, users) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                hasError: true,
                error: 'Could not retrieve users'
            });
        }
        res.json(users);
    });
});

router.post('/signin', function (req, res) {
    _user2.default.findOne({
        email: req.body.email
    }).select({
        __v: 0,
        updatedAt: 0,
        createdAt: 0
    }) //make sure to not return password (although it is hashed using bcrypt)
    .exec(function (err, user) {
        if (err) throw err;

        if (!user) {
            if (req.body.isSocial == false) {
                return res.json({
                    hasError: true,
                    error: 'Email or Password is Wrong'
                });
            } else {
                var hash = _bcryptjs2.default.hashSync(req.body.password.trim(), 10);
                var new_user = new _user2.default({
                    email: req.body.email.trim(),
                    password: hash,
                    isSocial: true,
                    isEmailVerified: false
                });

                new_user.save(function (err, newuser) {
                    if (err) throw err;

                    //email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token

                    var token = _utils2.default.generateToken(newuser);

                    user = _utils2.default.getCleanUser(newuser, token);

                    res.json({
                        hasError: false,
                        user: newuser
                    });
                });
            }
        }

        _bcryptjs2.default.compare(req.body.password, user.password, function (err, valid) {
            if (!valid) {
                return res.json({
                    hasError: true,
                    error: 'Email or Password is Wrong'
                });
            }

            //make sure to NOT pass password and anything sensitive inside token
            //Pass anything tht might be used in other parts of the app
            var token = _utils2.default.generateToken(user);

            user = _utils2.default.getCleanUser(user, token);

            res.json({
                hasError: false,
                user: user
            });
        });
    });
});

router.post('/signup', function (req, res, next) {
    var body = req.body;

    var errors = _utils2.default.validateSignUpForm(body);
    if (errors) {
        return res.status(403).json({
            hasError: true,
            error: errors
        });
    }

    isUserUnique(body, function (err) {
        if (err) {
            return res.json({
                hasError: true,
                error: 'Email has been exist already.'
            });
        }

        var hash = _bcryptjs2.default.hashSync(body.password.trim(), 10);
        var user = new _user2.default({
            email: body.email.trim(),
            password: hash,
            isEmailVerified: false
        });

        user.save(function (err, user) {
            if (err) throw err;

            //email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token

            var token = _utils2.default.generateToken(user);

            user = _utils2.default.getCleanUser(user, token);

            res.json({
                hasError: false,
                user: user
            });
        });
    });
});

//currently validating uniqueness for username
router.post('/validate/fields', function (req, res, next) {
    var body = req.body;

    isUserUnique(body, function (err) {
        if (err) {
            res.json({
                hasError: true,
                error: err
            });
        } else {
            return res.json({
                hasError: false
            });
        }
    });
});

//get current user from token
router.get('/me/from/token', function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            message: 'Must pass token'
        });
    }

    // decode token
    _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, user) {
        if (err) throw err;

        //return user using the id from w/in JWTToken
        _user2.default.findById({
            '_id': user._id
        }, function (err, user) {
            if (err) throw err;

            user = _utils2.default.getCleanUser(user, token); //dont pass password and stuff

            //note: you can renew token by creating new token(i.e. refresh it) w/ new expiration time at this point, but I'm passing the old token back.
            // var token = utils.generateToken(user);

            res.json({
                hasError: false,
                user: user
            });
        });
    });
});

router.get('/resendValidationEmail', (0, _expressJwt2.default)({
    secret: _config2.default.secret
}), function (req, res, next) {

    _user2.default.findById({
        '_id': req.user._id
    }, function (err, user) {
        if (err) throw err;

        //send welcome email w/ verification token
        email.sendWelcomeEmail(user, req.headers.host, function (err) {
            if (err) {
                res.status(404).json({
                    hasError: true,
                    error: err
                });
            } else {
                res.send({
                    message: 'Email was resent'
                });
            }
        });
    });
});

router.post('/updateEmail', (0, _expressJwt2.default)({
    secret: _config2.default.secret
}), function (req, res, next) {

    var newEmail = req.body.email && req.body.email.trim();

    _user2.default.findOneAndUpdate({
        '_id': req.user._id
    }, {
        email: newEmail
    }, {
        new: true
    }, function (err, user) {
        if (err) throw err;

        console.dir(user.toJSON());
        //send welcome email w/ verification token
        //email.sendWelcomeEmail(user, req.headers.host);

        res.json({ message: 'Email was updated' });
    });
});

//get current user from email-token(from w/in welcome email)
router.get('/validateEmail/:token', function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.params.token;
    if (!token) {
        return res.status(401).json({
            message: 'Must pass token'
        });
    }

    _user2.default.findOne({
        verifyEmailToken: req.params.token,
        verifyEmailTokenExpires: {
            $gt: Date.now()
        }
    }, function (err, user) {

        if (!user) {
            return res.status(404).json({
                message: 'Email token is not valid or has expired'
            });
        }

        user.isEmailVerified = true;
        user.verifyEmailToken = undefined;
        user.verifyEmailTokenExpires = undefined;
        user.save(function (err) {
            user = _utils2.default.getCleanUser(user); //dont pass password and stuff
            var token = _utils2.default.generateToken(user);
            res.json({
                user: user,
                token: token
            });
        });
    });
});

exports.default = router;