import express from 'express'
import jwt from 'jsonwebtoken'
import config from '../config.json'
import { Transaction, Ticket } from '../models/transaction'

var beanstream = require('beanstream-node')('300203529', 'C770B7DE0Dc847d18aacA4Ef40529056');
const router = express.Router();
var order_number = 100;

router.post('/buyticket', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        })
    }

    jwt.verify(token, config.secret, function (err, user) {
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
        beanstream.payments.makePayment(cardPayment)
            .then(function (response) {
                console.log(response);
                Ticket
                    .findOneAndUpdate({
                        email: req.body.email,
                        route_name: req.body.route_name,
                        type: req.body.type
                    }, {$inc: {quantity: req.body.quantity}}, function (err, old_ticket) {
                        if (err) throw err;

                        if (!old_ticket) {
                            var new_ticket = new Ticket({
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
                                })
                            })
                        }
                        else {
                            console.log(old_ticket);
                            res.json({
                                hasError: false,
                                ticket: old_ticket
                            })
                        }
                    })
            })
            .catch(function (error) {
                console.log(error);
                return res.status(500).json({
                    hasError: true,
                    errors: "Payment is failed."
                })
                // display error
            });
    })
});

router.post('/validateticket', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        })
    }

    jwt.verify(token, config.secret, function (err, user) {
        if (err) throw err;

        Ticket
            .findOne({email: req.body.email, route_name: req.body.route_name})
            .lean()
            .exec(function (err, ticket) {
                if (err) throw err;

                if (!ticket) {
                    return res.status(404).json({
                        hasError: true,
                        errors: "Not found validate ticket."
                    })
                }

                var quantity = ticket.quantity;
                if (quantity < req.body.quantity) {
                    return res.json({
                        hasError: true,
                        errors: "Select quantity less than " + quantity.toString()
                    })
                }
                else if (quantity > req.body.quantity) {
                    Ticket.update({email: req.body.email, route_name: req.body.route_name},
                        {$set: {quantity: quantity - req.body.quantity}},
                        function (err) {
                            if (err) throw err;

                            return res.json({
                                hasError: false,
                            })
                        })
                }
                else {
                    Ticket.remove({_id: ticket._id}, function (err) {
                        if (err) throw err;

                        return res.json({
                            hasError: false,
                        })
                    })
                }

            })
    });
});

router.get('/tickets', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        })
    }

    jwt.verify(token, config.secret, function (err, user) {
        if (err) throw err;

        Ticket
            .find({ email: user.email})
            .sort('-type')
            .lean()
            .exec(function (err, tickets) {
                if (!tickets) {
                    return res.status(404).json({
                        hasError: true,
                        errors: 'Tickets not found.'
                    })
                }

                console.log(tickets);

                var results = [];
                for (var i = 0 ; i < tickets.length; i++) {
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
                })
            });
    })
});


export default router