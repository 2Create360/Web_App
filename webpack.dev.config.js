
var webpack = require('webpack');
var path = require('path');

var bootstrapPath = __dirname + '/node_modules/bootstrap/dist/css';
var fontAwesomePath = __dirname + '/node_modules/font-awesome/css';

module.exports = {

    entry: [
        'babel-polyfill',
        './app/index.js',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server',
        './app/styles/style.css'
    ],

    output: {
        path: '/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "*": "http://localhost:3000"
        },
        stats: {
          // Config for minimal console.log mess.
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0']
                })],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            }
        ]
    },

    resolve: {
        root: path.resolve('./app'),
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: ['node_modules', bootstrapPath, fontAwesomePath]
    }

};
