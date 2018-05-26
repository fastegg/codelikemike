var gulp = require('gulp');
var gutil = require('gulp-util');
var $    = require('gulp-load-plugins')();
var tsc  = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var webpack = require('webpack');
var config = require('./webpack.config');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('typescript', () => {
  var tsResult = tsProject.src().pipe(tsProject());

  return tsResult.js.pipe(gulp.dest('build/clientjs'));
});

gulp.task('webpack', ['typescript'], function(callback) {
	// run webpack
	webpack(config, function(err, stats) {
		if(err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			// output options
		}));
		callback();
	});
});

gulp.task('default', ['sass', 'typescript', 'webpack'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['clientjs/**/*'], ['typescript', 'webpack']);
  //gulp.watch(['build/clientjs/app.js'], ['webpack']);
});
