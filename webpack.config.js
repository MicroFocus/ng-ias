var autoPrefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

var outDir = path.resolve(__dirname, 'dist');

module.exports = {
    devServer: {
        contentBase: outDir,
        outputPath: outDir,
        port: 4000,
        historyApiFallback: true
    },
    devtool: 'cheap-module-source-map',
    entry: {
        'ng-mfux': './src/ng-mfux.module'
    },
    externals:
    {
        'angular': true
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html',
                exclude: /index\.html$/
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass', 'postcss' ]
            }
        ]
    },
    // [name] is replaced by entry point name
    output: {
        filename: '[name].js',
        path: outDir
    },
    postcss: function() {
        return [
            autoPrefixer({
                browsers: ['last 2 versions']
            })
        ];
    },
    resolve: {
        extensions: [ '', '.ts', '.js', '.json' ],
        modulesDirectories: ['./src', 'node_modules']
    }
};
