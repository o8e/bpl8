var gulp = require('gulp'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      livereload = require('gulp-livereload'),
      cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
  gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
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
