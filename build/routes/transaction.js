'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

var _transaction = require('../models/transaction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beanstream = require('beanstream-node')('300203529', 'C770B7DE0Dc847d18aacA4Ef40529056');
var router = _express2.default.Router();
var order_number = 100;

router.post('/buyticket', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        });
    }

    _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, user) {
        if (err) throw err;

        var cardPayment = {
            amount: req.body.amount,
            payment_method: "card",
            card: {
                name: req.body.cardname,
                number: '5100000010001004',
                expiry_month: req.body.exp_mn,
                expiry_year: req.body.exp_yr,
                cvd: req.body.cvv
            }
        };
        beanstream.payments.makePayment(cardPayment).then(function (response) {
            console.log(response);
            _transaction.Ticket.findOneAndUpdate({
                email: req.body.email,
                route_name: req.body.route_name,
                type: req.body.type
            }, { $inc: { quantity: req.body.quantity } }, function (err, old_ticket) {
                if (err) throw err;

                if (!old_ticket) {
                    var new_ticket = new _transaction.Ticket({
                        email: req.body.email,
                        type: req.body.type,
                        route_name: req.body.route_name,
                        org_stop: req.body.org_stop,
                        dst_stop: req.body.dst_stop,
                        quantity: req.body.quantity
                    });

                    new_ticket.save(function (err, ticket) {
                        if (err) throw err;

                        res.json({
                            hasError: false,
                            ticket: ticket
                        });
                    });
                } else {
                    console.log(old_ticket);
                    res.json({
                        hasError: false,
                        ticket: old_ticket
                    });
                }
            });
        }).catch(function (error) {
            console.log(error);
            return res.status(500).json({
                hasError: true,
                errors: "Payment is failed."
            });
            // display error
        });
    });
});

router.post('/validateticket', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        });
    }

    _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, user) {
        if (err) throw err;

        _transaction.Ticket.findOne({ email: req.body.email, route_name: req.body.route_name }).lean().exec(function (err, ticket) {
            if (err) throw err;

            if (!ticket) {
                return res.status(404).json({
                    hasError: true,
                    errors: "Not found validate ticket."
                });
            }

            var quantity = ticket.quantity;
            if (quantity < req.body.quantity) {
                return res.json({
                    hasError: true,
                    errors: "Select quantity less than " + quantity.toString()
                });
            } else if (quantity > req.body.quantity) {
                _transaction.Ticket.update({ email: req.body.email, route_name: req.body.route_name }, { $set: { quantity: quantity - req.body.quantity } }, function (err) {
                    if (err) throw err;

                    return res.json({
                        hasError: false
                    });
                });
            } else {
                _transaction.Ticket.remove({ _id: ticket._id }, function (err) {
                    if (err) throw err;

                    return res.json({
                        hasError: false
                    });
                });
            }
        });
    });
});

router.get('/tickets', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        });
    }

    _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, user) {
        if (err) throw err;

        _transaction.Ticket.find({ email: user.email }).sort('-type').lean().exec(function (err, tickets) {
            if (!tickets) {
                return res.status(404).json({
                    hasError: true,
                    errors: 'Tickets not found.'
                });
            }

            console.log(tickets);

            var results = [];
            for (var i = 0; i < tickets.length; i++) {
                var result = {};
                result._id = tickets[i]._id;
                result.type = tickets[i].type;
                result.route_name = tickets[i].route_name;
                result.org_stop = tickets[i].org_stop;
                result.dst_stop = tickets[i].dst_stop;
                result.quantity = tickets[i].quantity;

                results.push(result);
            }

            return res.json({
                hasError: false,
                tickets: results
            });
        });
    });
});

exports.default = router;