var gulp = require('gulp'),
    build = require('./build');

gulp.task('all', function() {
    ['iscroll', 'main', 'lite', 'probe', 'zoom', 'infinite'].forEach(function(release) {
        build(release);
    });
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['all']);
});


gulp.task('default', ['all']);
