var gulp = require('gulp'),
        jsmin = require('gulp-jsmin'),
        minifyCSS = require('gulp-minify-css'),
        useref = require('gulp-useref'),
        gulpif = require('gulp-if'),
        uglify = require('gulp-uglify'),
        sass = require('gulp-sass'),
        connect = require('gulp-connect');

// Create a local server
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
    opn('http://localhost:8080/');
});

// Minify
gulp.task('minify', function() {
    gulp.src('./dist/css/*.css')
        .pipe(minifyCSS(
            {
                keepBreaks:false,
                keepSpecialComments: 1
            }
        ))
        .pipe(gulp.dest('./dist/css'))
});

// Tracking changes in *.html
gulp.task('html', function () {
    gulp.src('proj/*.html')
        .pipe(connect.reload());
});

// Tracking changes in *.html
gulp.task('sass', function () {
    gulp.src('proj/sass/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('css'))
         .pipe(connect.reload());
});

// Watcher
gulp.task('watch', function () {
    gulp.watch(['proj/*.html'], ['html']);
    gulp.watch(['proj/sass/*.scss'], ['sass']);
});

// Default task
gulp.task('default', ['connect', 'watch']);

// Build project
gulp.task('build', function () {
    var assets = useref.assets();

    return gulp.src('proj/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCSS()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});