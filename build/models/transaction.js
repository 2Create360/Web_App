'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ticket_type = 'fair pass'.split(' ');

var transactionSchema = new Schema({
    order_number: { type: Number },
    card: { type: String },
    expire_date: { type: Date },
    cvv: { type: String },
    amount: { type: Number },
    created: { type: Date, default: Date.now() }
});

var ticketSchema = new Schema({
    email: { type: String },
    type: { type: String, enum: ticket_type },
    route_name: { type: String },
    org_stop: { type: String },
    dst_stop: { type: String },
    quantity: { type: Number }
});

module.exports = {
    Transaction: mongoose.model('Transaction', transactionSchema, 'transaction'),
    Ticket: mongoose.model('Ticket', ticketSchema, 'ticket')
};