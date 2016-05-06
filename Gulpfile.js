var gulp = require('gulp');
var serve = require('gulp-serve');

gulp.task('serve', serve({
    root: ['client'],
    port: 9000
}));
