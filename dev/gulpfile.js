var
    gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

//------ Build ------ //

gulp.task('HTML: Build', function () {
    gulp
        .src('index.jade')
        .pipe(jade({
            pretty: true
        }))
        .on('error', console.log)
        .pipe(gulp.dest('../public'))
});

gulp.task('CSS: Build', function () {
    gulp
        .src('sass/style.scss')
        .pipe(sass({
            outputStyle: 'compact',
            precision: 10,
            indentWidth: 4
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(rename('style.min.css'))
        .on('error', console.log)
        .pipe(gulp.dest('../public/css'))
});

gulp.task('JS: Build', function () {
    gulp
        .src('js/*.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(concat('script.js'))
        .pipe(rename('script.min.js'))
        .on('error', console.log)
        .pipe(gulp.dest('../public/js'))
});

gulp.task('All: Build', ['HTML: Build', 'CSS: Build', 'JS: Build'], function () {});
    