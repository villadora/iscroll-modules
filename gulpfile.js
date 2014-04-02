var gulp = require('gulp'),
    build = require('./build');

gulp.task('all', function() {
    ['iscroll', 'main', 'lite', 'probe', 'zoom', 'infinite'].forEach(function(release) {
        build(release);
    });
});


gulp.task('default', ['all']);
