/* Importing gulp node package */
var gulp = require('gulp')
var uglify = require('gulp-uglify'); /* a gulp plug-in to minify the code */

gulp.task('default', function () {
    gulp.src('js/*.js')
        .pipe(uglify()) /* The task */
        .pipe(gulp.dest('minjs')); /* The destination */
}); /* The name of your task  and the code that the task its goona dude*/


