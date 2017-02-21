var gulp = require('gulp');
var ngGulp = require('ng-gulp');
var path = require('path');

var cwd = process.cwd();

ngGulp(gulp, {
    cssBasename: 'ng-mfux',
    devServer: false,
    jsBasename: 'ng-mfux',
    externals: {
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        sassManifest: path.resolve(cwd, 'src/ng-mfux.scss'),
        typescriptMainDevelopment: path.resolve(cwd, 'src/ng-mfux.module.ts'),
        typescriptMainProduction: path.resolve(cwd, 'src/ng-mfux.module.ts'),
        vendorDevelopment: [
            path.resolve(cwd, '../node_modules/angular/angular.js'),
            path.resolve(cwd, '../node_modules/angular-ui-router/release/angular-ui-router.js')
        ],
        vendorProduction: [
            // TODO: add production dependencies to vendor bundle
        ]
    }
});