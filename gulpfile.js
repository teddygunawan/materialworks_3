  
'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', async function () {
    gulp.src('./sample_1/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./sample_1/css'))
    gulp.src('./sample_2/scss/slides.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./sample_2/css'))
});

gulp.task('sass:watch', function () {
    gulp.watch(['./sample_1/scss/*.scss', './sample_2/scss/*.scss'], gulp.series('sass'));
    // gulp.watch('./sample_2/scss/*.scss', gulp.series('sass'));
});