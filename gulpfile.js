var gulp = require('gulp')
  , riot = require('gulp-riot')
  , concat = require('gulp-concat')
  , jade = require('gulp-jade')
  , babel = require('gulp-babel')

gulp.task('riot', function () {
  return gulp.src('src/tags/*.tag')
    .pipe(riot())
    .pipe(concat('tags.js'))
    .pipe(gulp.dest('dest/tags'))
})

gulp.task('jade', function () {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dest'))
})

gulp.task('babel', function () {
  return gulp.src('src/api/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dest/api'))
})

gulp.task('watch', function () {
  gulp.watch('src/tags/*.tag', ['riot'])
  gulp.watch('src/index.jade', ['jade'])
  gulp.watch('src/app.js', ['babel'])
})

gulp.task('default', ['watch', 'riot', 'jade', 'babel'])
