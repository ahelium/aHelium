var browserify = require('browserify');
var del = require('del');
var gulp = require('gulp');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var runSequence = require('run-sequence').use(gulp);
var eslint = require('gulp-eslint');



var paths = {
    /*
     * Set the path to the frontend app.
     * Require will follow main.jsx to the React .jsx dependencies.
     */
    frontedApp: './app/main.jsx',
    buildDir: './app/public/*/**'
};


gulp.task('build', ['clean', 'sass'], function() {
    return browserify({entries: paths.frontedApp})
        .transform(reactify)
        .bundle()
        .pipe(source('bundled.js'))
        .pipe(gulp.dest('app/public/js'));
});

gulp.task('clean', function(cb) {
    console.log('Cleaning: ' + paths.buildDir);
    del(paths.buildDir, cb);
});

gulp.task('sass', function() {
     gulp.src('./app/styles/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./app/public/css'));
});

gulp.task('nodemon', function() {
    var opts = {
        script: 'app.js',
        ext: 'js html scss jsx',
        ignore: ['app/public/**'],
        env: { 'NODE_ENV': 'development' }
    };
    nodemon(opts)
        .on('start', function() {
            console.log('Restarting Server ******************');
            runSequence('build');
        });

});

gulp.task('lint', function() {
    return gulp.src(['app.js', '!./app/bower_components/**/*.js', './app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failOnError());
});


gulp.task('default', function(cb) {
    runSequence('nodemon',  cb)
});
