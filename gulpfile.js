var gulp = require('gulp')
  , riot = require('gulp-riot')
  , concat = require('gulp-concat')
  , jade = require('gulp-jade')
  , babel = require('gulp-babel')

gulp.task('riot', function () {
  return gulp.src('src/components/**/*.tag')
    .pipe(riot())
    .pipe(concat('tags.js'))
    .pipe(gulp.dest('dest'))
})

gulp.task('babel', function () {
  return gulp.src('src/components/**/*.js')
    .pipe(babel())
    .pipe(concat('api.js'))
    .pipe(gulp.dest('dest'))
})

gulp.task('jade', function () {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dest'))
})

gulp.task('watch', function () {
  gulp.watch('src/componebts/**/*.tag', ['riot'])
  gulp.watch('src/componebts/**/*.js', ['babel'])
  gulp.watch('src/index.jade', ['jade'])
})

gulp.task('default', ['watch', 'riot', 'jade', 'babel'])
