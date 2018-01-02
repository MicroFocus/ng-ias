var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

ngGulp(gulp, {
    devServer: {
        root: [
            path.resolve(__dirname, '../dist')
        ]
    },
    directories: {
        nodeModules: path.resolve(__dirname, '../node_modules'),
        output: path.resolve(__dirname, '../dist'),
        outputImages: path.resolve(__dirname, '../dist/images'),
        outputVendor: path.resolve(__dirname, '../dist/vendor')
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
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/font**/*'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.css'),
            path.resolve(__dirname, '../node_modules/@microfocus/ux-ias/dist/ux-ias.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../dist/ng-ias.js')
        ],
        vendorProduction: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/font**/*'),
            path.resolve(__dirname, '../node_modules/@microfocus/ias-icons/dist/ias-icons.css'),
            path.resolve(__dirname, '../node_modules/@microfocus/ux-ias/dist/ux-ias.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.css'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../dist/ng-ias.js')
        ],
        vendorTest: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../dist/ng-ias.js')
        ]
    },
    productionServer: {
        root: [
            path.resolve(__dirname, '../dist')
        ]
    }
});
