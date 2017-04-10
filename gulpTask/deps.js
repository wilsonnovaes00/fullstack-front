const gulp        = require('gulp')
const uglify      = require('gulp-uglify')
const uglifycss   = require('gulp-uglifycss')
const concat      = require('gulp-concat')
 
gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function() {
  gulp.src([
    /*Arquivos de Javacripts*/
  ])
  .pipe(uglify())
  .pipe(concat('deps.min.js'))
  .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function() {
  gulp.src([
    /*Arquivos de Css*/
  ])
  .pipe(uglifycss({ "uglyComments": true }))
  .pipe(concat('deps.min.css'))
  .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function() {
  gulp.src([
    /*Arquivos de Fonts*/
  ])
  .pipe(gulp.dest('public/assets/fonts'))
})
