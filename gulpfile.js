// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function(cb) {
    gulp.src('src/styles/base.scss')
    .pipe(sass())
    .pipe(concat("fluent.css"))
    .pipe(gulp.dest("./dist/css"));
    cb();
});

gulp.task('js', function(cb){
    gulp.src('src/scripts/*.js')
    .pipe(concat('fluent.js'))
    .pipe(gulp.dest('./dist/js'));
    cb();
});

gulp.task('default', gulp.parallel('sass', 'js', function(cb) {
    gulp.watch('src/**/*.scss', gulp.series('sass'));
    gulp.watch('src/**/*.js', gulp.series('js'));
    cb();
}));