'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config2 = require('./config.json');

var _config3 = _interopRequireDefault(_config2);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;
var devPort = 3001;

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI || 'mongodb://localhost/on-it-transit');
var db = _mongoose2.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('DB connected!');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Request-Headers", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded());

//middleware that checks if JWT token exists and verifies it if it does exist.
//In all the future routes, this helps to know if the request is authenticated or not.
app.use(function (req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {
		_jsonwebtoken2.default.verify(token, _config3.default.secret, function (err, user) {
			if (err) {
				return res.status(401).json({ success: false, message: 'Failed to authenticate token.' });
			} else {
				req.user = user;
				next();
			}
		});
	} else {
		next();
	}
});

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));
app.use('/api/', _routes2.default);

app.get('*', function (req, res) {
	res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	console.dir(err);
	res.status(err.status || 500);
	if (err.status === 500) {
		console.error(err.stack);
		res.json({ error: 'Internal Server Error' });
	} else if (err.status === 404) {
		res.render('error'); //render error page
	} else {
		res.json({ error: err.message });
	}
});

var server = app.listen(port, function () {
	console.log('Express listening on port', port);
});

if (process.env.NODE_ENV == 'development') {
	console.log('Server is running on development mode');

	var _config = require('../webpack.dev.config');
	var compiler = (0, _webpack2.default)(_config);
	var devServer = new _webpackDevServer2.default(compiler, _config.devServer);
	devServer.listen(devPort, function () {
		console.log('webpack-dev-server is listening on port', devPort);
	});
}