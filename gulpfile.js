/* Importing gulp node package */
var gulp = require('gulp')
var uglify = require('gulp-uglify'); /* a gulp plug-in to minify the code */
var sass = require('gulp-sass');


gulp.task('scripts', function() { /* to run this task only type gulp scripts */
     gulp.src('js/*.js')
        .pipe(uglify()) /* The task */
        .pipe(gulp.dest('build/js')); /* The destination */
});

gulp.task('styles', function() { /* to run this task only type gulp styles */
    gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    /* the function watch is looking for changes in the  files you want */
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']); /* to run this task only type gulp in the terminal */
 /* The name of your task  and the code that the task its goona do*/
 /* The default task run other task in the array of dependencies */


