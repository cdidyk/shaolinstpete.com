var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
  // return sass('content/styles/main.sass', { style: 'expanded' })
  return gulp.src('./content/stylesheets/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('output/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('output/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('./content/stylesheets/**/*.sass', ['styles']);
});

gulp.task('default', function() {
  gulp.start('styles');
});
