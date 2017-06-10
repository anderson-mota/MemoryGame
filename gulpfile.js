var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    //importcss = require('gulp-import-css'),
    concat = require('gulp-concat'),
    include = require('gulp-include'),
    compass = require('gulp-compass'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

var source = "./game/";

gulp.task('compass', function () {
    gulp.src([source+"sass/*.sass"])
        .pipe(compass({
            css: source+"sass",
            sass: source+"sass",
            image: source+"images",
            import_path: './',
            style: 'nested',
            require: [],
            line_comments: false,
            sourcemap: true,
            relative_assets: true
        }))
        .on('error', function (error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest(source+"sass"))
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(source+"sass/**/*.scss", ['compass']);
    gulp.watch([source+"**/*.css", "index.html"]).on('change', livereload.changed);
});