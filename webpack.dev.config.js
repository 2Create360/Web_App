var webpack = require('webpack');
var path = require('path');

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
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader'
            }
        ]
    },

    resolve: {
        root: path.resolve('./app')
    }

};
