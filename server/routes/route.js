import express from 'express'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import bcrypt from 'bcryptjs'
import User from '../models/user'
import utils from '../utils'
import config from '../config.json'
import gtfs from 'gtfs'

const router = express.Router();

router.get('/getRouteSuggestions', function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({
            hasError: true,
            errors: 'Must pass token'
        })
    }

    jwt.verify(token, config.secret, function (err, user) {
        if (err) throw err;

        gtfs.getRoutesByName(req.query.route, function (err, routes) {
            if (!routes) {
                return res.status(404).send({message: 'Route not found.'});
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
            })
        });
    })
});

export default router