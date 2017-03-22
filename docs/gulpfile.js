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
        'ng-prism': 'window["ng-prism"]',
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        indexProduction: 'src/index.production.html',
        sassManifest: [
            path.resolve(cwd, 'src/app.scss'),
            path.resolve(cwd, 'src/app_dark.scss')
        ],
        vendorDevelopment: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(cwd, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(cwd, '../node_modules/mf-icons/dist/**/*'),
            path.resolve(cwd, '../dist/ng-mfux.js')
        ],
        vendorProduction: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
			path.resolve(cwd, '../node_modules/ng-prism/dist/ng-prism.js'),
			path.resolve(cwd, '../node_modules/mf-icons/dist/**/*'),
            path.resolve(cwd, '../dist/ng-mfux.js')
        ],
        vendorTest: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(cwd, '../dist/ng-mfux.js')
        ]
    }
});