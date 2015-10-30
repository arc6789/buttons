var gulp = require('gulp'), /*callinp gulp will call the gulp package */
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');
	
prettify = require('gulp-jsbeautifier');

//Scripts command will run Uglify and minify files
gulp.task('scripts', function(){
	gulp.src('js/meetup-map.js')
	.pipe(uglify())
	.pipe(gulp.dest('min.js'))
});

gulp.task('styles', function(){
	console.log('run styles');

});

gulp.task('autoprefixer', function(){
	gulp.src(['css/buttons.css'])
		.pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('css/buttons.css'));

});

gulp.task('imagecomp', function () {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],

        }))
        .pipe(gulp.dest('img'));
});

gulp.task('format-js', function() {
  gulp.src('css/styles.css')
    .pipe(prettify())
    .pipe(gulp.dest('css'))
});

//Setting up a Watch on your JS file so that everytime you saave your js file 
gulp.task('watch', function(){
	gulp.watch('javascript path file',['scripts'])
});

//Gulp-Sass and Watch
'use strict';
 
gulp.task('sass', function () {
  gulp.src('sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss',['sass']);
});

/*gulp.task('defaultfunct', function(){
process.stdout.write("hello: ");
  });*/

/* Default function Will run when issueing default gulp command*/
//gulp.task('default',['defaultfunct']);
gulp.task('sass-and-watch', ['sass','sass:watch']);
gulp.task('browserprefix', ['autoprefixer']);