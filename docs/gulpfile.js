var connectHistoryApiFallback = require('connect-history-api-fallback');
var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

function exclude(path) {
    return '!' + path;
}

ngGulp(gulp, {
    devServer: {
        middleware: function(connect, opt) {
            return [ connectHistoryApiFallback() ]
        },
        root: [
            path.resolve(__dirname, '../dist'),
            path.resolve(__dirname, '../dist/docs')
        ]
    },
    devServerPort: 8081,
    directories: {
        nodeModules: path.resolve(__dirname, '../node_modules'),
        output: path.resolve(__dirname, '../dist/docs'),
        outputImages: path.resolve(__dirname, '../dist/docs/images'),
        outputVendor: path.resolve(__dirname, '../dist/docs/vendor')
    },
    externals: {
        'ng-ias': 'window["ng-ias"]',
        'ng-prism': 'window["ng-prism"]',
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        indexProduction: 'src/index.production.html',
        vendorDevelopment: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'),
            path.resolve(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../node_modules/ias-icons/dist/**/*'),
            path.resolve(__dirname, '../dist/ng-ias.js'),
            exclude(path.resolve(__dirname, '../node_modules/ias-icons/dist/ias-icons.min.css'))
        ],
        vendorProduction: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css'),
            path.resolve(__dirname, '../node_modules/bootstrap/dist/css/bootstrap.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../node_modules/ias-icons/dist/**/*'),
            path.resolve(__dirname, '../dist/ng-ias.js'),
            exclude(path.resolve(__dirname, '../node_modules/ias-icons/dist/ias-icons.min.css'))
        ],
        vendorTest: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../dist/ng-ias.js')
        ]
    },
    productionServer: {
        root: [
            path.resolve(__dirname, '../dist'),
            path.resolve(__dirname, '../dist/docs')
        ]
    }
});