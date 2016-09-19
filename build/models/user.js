'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var status = 'active suspended'.split(' ');
var gender = 'male female'.split(' ');

var userSchema = new Schema({
    email: { type: String, trim: true, unique: true },
    password: { type: String },
    created: { type: Date, default: Date.now() },
    status: { type: String, enum: status },
    last_login: { type: Date, default: Date.now() },
    login_count: { type: Number, default: 0 },
    isEmailVerified: { type: Boolean, default: false },
    verifyEmailToken: { type: String },
    validation_code: { type: String },
    billingName: { type: String },
    billingAddress: { type: String },
    billingCity: { type: String },
    billingPostalCode: { type: String },
    billingPhone: { type: String },
    gender: { type: String, enum: gender },
    isSocial: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema, 'user');