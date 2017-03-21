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
        sassManifest: [
            path.resolve(cwd, 'src/ng-mfux.scss'),
            path.resolve(cwd, 'src/ng-mfux_dark.scss')
        ],
        typescriptMainDevelopment: path.resolve(cwd, 'src/ng-mfux.module.ts'),
        typescriptMainProduction: path.resolve(cwd, 'src/ng-mfux.module.ts'),
        typescriptMainTest: path.resolve(cwd, 'src/ng-mfux.module.ts'),
        vendorDevelopment: [
            // There should not be any vendor dependencies in this library
        ],
        vendorProduction: [
            // There should not be any vendor dependencies in this library
        ],
        vendorTest: [
            path.resolve(cwd, 'node_modules/angular/angular.js'),
            path.resolve(cwd, 'node_modules/angular-mocks/angular-mocks.js')
        ]
    }
});