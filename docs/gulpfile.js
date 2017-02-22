var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

var cwd = process.cwd();

ngGulp(gulp, {
    devServerPort: 8081,
    directories: {
        nodeModules: path.resolve(cwd, '../node_modules'),
        output: path.resolve(cwd, '../dist/docs'),
        outputImages: path.resolve(cwd, '../dist/docs/images'),
        outputVendor: path.resolve(cwd, '../dist/docs/vendor')
    },
    externals: {
        'ng-mfux': 'window["ng-mfux"]',
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        vendorDevelopment: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(cwd, '../node_modules/mf-icons/dist/**/*'),
            path.resolve(cwd, '../dist/ng-mfux.js'),
            path.resolve(cwd, '../dist/ng-mfux.css')
        ],
        vendorProduction: [
            // TODO: add production dependencies to vendor bundle
        ]
    }
});