import express from 'express'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import bcrypt from 'bcryptjs'
import User from '../models/user'
import utils from '../utils'
import config from '../config.json'


const router = express.Router();

function isUserUnique(reqBody, cb) {
    var username = reqBody.username ? reqBody.username.trim() : '';
    var email = reqBody.email ? reqBody.email.trim() : '';

    User.findOne({
        $or: [{
            'username': new RegExp(["^", username, "$"].join(""), "i")
        }, {
            'email': new RegExp(["^", email, "$"].join(""), "i")
        }]
    }, function(err, user) {
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

router.get('/users/?', function(req, res) {

    if (!req.user || !req.user.admin)
        return res.status(401).json({
            hasError: true,
            error: 'You must be admin to access this route.'
        });

    User
        .find({})
        .select({
            password: 0,
            __v: 0,
            updatedAt: 0,
            createdAt: 0
        }) //make sure to not return password (although it is hashed using bcrypt)
        .limit(100)
        .sort({
            createdAt: -1
        })
        .exec(function(err, users) {
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

router.post('/signin', function(req, res) {
    User
        .findOne({
            email: req.body.email
        })
        .select({
            __v: 0,
            updatedAt: 0,
            createdAt: 0
        }) //make sure to not return password (although it is hashed using bcrypt)
        .exec(function(err, user) {
            if (err) throw err;

            if (!user) {
                if (req.body.isSocial == false) {
                    return res.json({
                        hasError: true,
                        error: 'Email or Password is Wrong'
                    });
                }
                else {
                    var hash = bcrypt.hashSync(req.body.password.trim(), 10);
                    var new_user = new User({
                        email: req.body.email.trim(),
                        password: hash,
                        isSocial: true,
                        isEmailVerified: false
                    });

                    new_user.save(function(err, newuser) {
                        if (err) throw err;

                        //email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token

                        var token = utils.generateToken(newuser);

                        user = utils.getCleanUser(newuser, token);

                        res.json({
                            hasError: false,
                            user: newuser,
                        });
                    });
                }
            }

            bcrypt.compare(req.body.password, user.password, function(err, valid) {
                if (!valid) {
                    return res.json({
                        hasError: true,
                        error: 'Email or Password is Wrong'
                    });
                }

                //make sure to NOT pass password and anything sensitive inside token
                //Pass anything tht might be used in other parts of the app
                var token = utils.generateToken(user);

                user = utils.getCleanUser(user, token);

                res.json({
                    hasError: false,
                    user: user,
                });
            });
        });
});



router.post('/signup', function(req, res, next) {
    var body = req.body;

    var errors = utils.validateSignUpForm(body);
    if (errors) {
        return res.status(403).json({
            hasError: true,
            error: errors
        });
    }

    isUserUnique(body, function(err) {
        if (err) {
            return res.json({
                hasError: true,
                error: 'Email has been exist already.'
            });
        }

        var hash = bcrypt.hashSync(body.password.trim(), 10);
        var user = new User({
            email: body.email.trim(),
            password: hash,
            isEmailVerified: false
        });

        user.save(function(err, user) {
            if (err) throw err;

            //email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token

            var token = utils.generateToken(user);

            user = utils.getCleanUser(user, token);

            res.json({
                hasError: false,
                user: user,
            });
        });

    });
});



//currently validating uniqueness for username
router.post('/validate/fields', function(req, res, next) {
    var body = req.body;

    isUserUnique(body, function(err) {
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
router.get('/me/from/token', function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            message: 'Must pass token'
        });
    }

    // decode token
    jwt.verify(token, config.secret, function(err, user) {
        if (err) throw err;

        //return user using the id from w/in JWTToken
        User.findById({
            '_id': user._id
        }, function(err, user) {
            if (err) throw err;

            user = utils.getCleanUser(user, token); //dont pass password and stuff

            //note: you can renew token by creating new token(i.e. refresh it) w/ new expiration time at this point, but I'm passing the old token back.
            // var token = utils.generateToken(user);

            res.json({
                hasError: false,
                user: user
            });

        });
    });
});

router.get('/resendValidationEmail', expressJwt({
    secret: config.secret
}), function(req, res, next) {

    User.findById({
        '_id': req.user._id
    }, function(err, user) {
        if (err) throw err;

        //send welcome email w/ verification token
        email.sendWelcomeEmail(user, req.headers.host, function(err) {
            if (err) {
                res.status(404).json({
                    hasError: true,
                    error: err
                });
            } else {
                res.send({
                    message: 'Email was resent'
                })
            }
        });
    });
});


router.post(
    '/updateEmail',
    expressJwt({
        secret: config.secret
    }),
    function(req, res, next) {

        var newEmail = req.body.email && req.body.email.trim();

        User.findOneAndUpdate({
            '_id': req.user._id
        }, {
            email: newEmail
        }, {
            new: true
        }, function(err, user) {
            if (err) throw err;

            console.dir(user.toJSON());
            //send welcome email w/ verification token
            //email.sendWelcomeEmail(user, req.headers.host);

            res.json({message: 'Email was updated'});

        });
    });




//get current user from email-token(from w/in welcome email)
router.get('/validateEmail/:token', function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.params.token;
    if (!token) {
        return res.status(401).json({
            message: 'Must pass token'
        });
    }

    User.findOne({
        verifyEmailToken: req.params.token,
        verifyEmailTokenExpires: {
            $gt: Date.now()
        }
    }, function(err, user) {

        if (!user) {
            return res.status(404).json({
                message: 'Email token is not valid or has expired'
            });
        }

        user.isEmailVerified = true;
        user.verifyEmailToken = undefined;
        user.verifyEmailTokenExpires = undefined;
        user.save(function(err) {
            user = utils.getCleanUser(user); //dont pass password and stuff
            var token = utils.generateToken(user);
            res.json({
                user: user,
                token: token
            });
        });
    });
});

export default router
