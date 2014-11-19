var gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        jsmin = require('gulp-jsmin'),
        rename = require('gulp-rename'),
        concatCss = require('gulp-concat-css'),
        minifyCSS = require('gulp-minify-css'),
        htmlmin = require('gulp-htmlmin');

gulp.task('default', function() {
    gulp.src('proj/js/main.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'));

    gulp.src('proj/css/*.css')
        .pipe(concatCss("css/bundle.css"))
        .pipe(gulp.dest('dist'));

    gulp.src('dist/css/bundle.css')
        .pipe(minifyCSS({keepBreaks:false}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))

    gulp.src('dist/css/ie.css')
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))

    gulp.src('proj/*.html')
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist'))
});