var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

ngGulp(gulp, {
    devServer: {
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
        'ng-mfux': 'window["ng-mfux"]',
        'ng-prism': 'window["ng-prism"]',
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        indexProduction: 'src/index.production.html',
        sassManifest: [
            path.resolve(__dirname, 'src/app.scss'),
            path.resolve(__dirname, 'src/app_dark.scss')
        ],
        vendorDevelopment: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../node_modules/mf-icons/dist/**/*'),
            path.resolve(__dirname, '../dist/ng-mfux.js')
        ],
        vendorProduction: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
			path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
			path.resolve(__dirname, '../node_modules/mf-icons/dist/**/*'),
            path.resolve(__dirname, '../dist/ng-mfux.js')
        ],
        vendorTest: [
            path.resolve(__dirname, '../node_modules/angular/angular.js'),
            path.resolve(__dirname, '../node_modules/angular-mocks/angular-mocks.js'),
            path.resolve(__dirname, '../node_modules/angular-ui-router/release/angular-ui-router.js'),
            path.resolve(__dirname, '../node_modules/ng-prism/dist/ng-prism.js'),
            path.resolve(__dirname, '../dist/ng-mfux.js')
        ]
    },
    productionServer: {
        root: [
            path.resolve(__dirname, '../dist'),
            path.resolve(__dirname, '../dist/docs')
        ]
    }
});