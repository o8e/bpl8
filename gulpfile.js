var gulp = require('gulp'),
      sass = require('gulp-ruby-sass'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      minify = require('gulp-minify-css');

gulp.task('sass', function() {
  return sass('src/scss/style.scss')
  .on('error', function(err) { console.error('Error!', err.message); })
  .pipe(minify({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('vendor', function() {
  return gulp.src('src/vendor/modernizr/*.js')
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['sass','js','vendor','watch']);
