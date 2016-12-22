var async = require('async');
var fs = require('fs');
var gulp = require('gulp');
var gulpAutoprefixer = require('gulp-autoprefixer');
var gulpClean = require('gulp-clean');
var gulpConnect = require('gulp-connect');
var gulpJscs = require('gulp-jscs');
var gulpRename = require('gulp-rename');
var gulpReplace = require('gulp-replace');
var gulpSass = require('gulp-sass');
var gulpSourceMaps = require('gulp-sourcemaps');
var gulpWatch = require('gulp-watch');

var docsDirectory = './docs/';
var docsFiles = './docs/**/*';
var docsJs = './docs/**/*.js';
var outputDirectory = './dist/';
var sassFiles = './src/**/*.scss';
var sassManifestFiles = [ './src/mfux.scss', './src/mfux_dark.scss' ] ;
var pkg = JSON.parse(fs.readFileSync('./package.json'));


gulp.task('build-docs', ['jscs', 'copy-vendor', 'copy-mfux', 'copy-docs']);

gulp.task('build-src', []);

gulp.task('clean', function() {
    return gulp.src(outputDirectory)
        .pipe(gulpClean());
});

gulp.task('connect', function() {
    gulpConnect.server({
        livereload: true,
        port: 8081,
        root: outputDirectory
    });
});

gulp.task('copy-docs', function() {
    return gulp
        .src(docsDirectory + '**/*')
        .pipe(gulpConnect.reload())
        .pipe(gulp.dest(outputDirectory + 'docs/'));
});

gulp.task('copy-mfux', function() {
    return gulp
        .src([
            'node_modules/mfux/dist/**/*'
        ])
        .pipe(gulp.dest(outputDirectory + 'docs/vendor/mfux'))
});

gulp.task('copy-vendor', function() {
    return gulp
        .src([
            'node_modules/angular/angular.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js'
        ])
        .pipe(gulp.dest(outputDirectory + 'docs/vendor/'));
});

gulp.task('jscs', function() {
    return gulp
        .src(docsJs)
        .pipe(gulpJscs())
        .pipe(gulpJscs.reporter());
});

gulp.task('default', ['build-src', 'watch-src']);

gulp.task('docs', ['build-src', 'build-docs', 'connect', 'watch-docs']);

gulp.task('sass', function() {
    return processSass(sassManifestFiles, { outputStyle: 'expanded' })
        .pipe(gulpConnect.reload())
        .pipe(gulp.dest(outputDirectory));
});

gulp.task('sass-minified', function() {
    return processSass(sassManifestFiles, { outputStyle: 'compressed' })
        .pipe(gulpRename({ suffix: '.min' }))
        .pipe(gulp.dest(outputDirectory));
});

gulp.task('watch-docs', function() {
    gulpWatch(sassFiles, function() {
        gulp.start('sass');
        gulp.start('sass-minified');
    });
    gulpWatch(docsJs, function() {
        gulp.start('jscs');
    });
    gulpWatch(docsFiles, function() {
        gulp.start('copy-docs');
    });
});

gulp.task('watch-src', function() {
    gulpWatch(sassFiles, function() {
        gulp.start('sass');
        gulp.start('sass-minified');
    });
});

function processSass(filePattern, sassOptions) {
    sassOptions = sassOptions || {};

    return gulp.src(filePattern)
        .pipe(gulpSourceMaps.init())
        .pipe(gulpReplace('%VERSION%', pkg.version))
        .pipe(gulpSass(sassOptions).on('error', gulpSass.logError))
        .pipe(gulpAutoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulpSourceMaps.write('./'));
}
