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

var _gtfs = require('gtfs');

var _gtfs2 = _interopRequireDefault(_gtfs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/getRouteSuggestions', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        });
    }

    _jsonwebtoken2.default.verify(token, _config2.default.secret, function (err, user) {
        if (err) throw err;

        _gtfs2.default.getRoutesByName(req.query.route, function (err, routes) {
            if (!routes) {
                return res.status(404).send({ message: 'Route not found.' });
            }
            var results = [];

            for (var i = 0; i < routes.length; i++) {
                var result = {};
                result.route_id = routes[i].route_id;
                result.fullname = routes[i].route_short_name + ' ' + routes[i].route_long_name;
                results.push(result);
            }

            res.json({
                hasError: false,
                routes: results
            });
        });
    });
});

exports.default = router;