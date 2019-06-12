var gulp = require('gulp');
var ngGulp = require('@microfocus/ng-gulp');
var path = require('path');

var cwd = process.cwd();

ngGulp(gulp, {
    autoTest: false,
    cssBasename: 'ng-ias',
    devServer: false,
    jsBasename: 'ng-ias',
    externals: {
        'angular-ui-router': 'window["angular-ui-router"]'
    },
    files: {
        sassManifest: [
            path.resolve(cwd, 'src/ng-ias.scss'),
            path.resolve(cwd, 'src/ng-ias_dark.scss')
        ],
        typescriptMainDevelopment: path.resolve(cwd, 'src/ng-ias.module.ts'),
        typescriptMainProduction: path.resolve(cwd, 'src/ng-ias.module.ts'),
        typescriptMainTest: path.resolve(cwd, 'src/ng-ias.module.ts'),
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