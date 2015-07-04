var gulp = require('gulp')
  , riot = require('gulp-riot')

gulp.task('riot', function () {
  return gulp.src('src/tags/*.tag')
    .pipe(riot())
    .pipe(gulp.dest('dest/tags'))
})

gulp.task('default', ['riot'])
