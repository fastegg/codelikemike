var gulp = require('gulp');
var gutil = require('gulp-util');
var git = require('gulp-git');
var $    = require('gulp-load-plugins')();
var tsc  = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var webpack = require('webpack');
var config = require('./webpack.config');
var fs = require('fs');

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
});

gulp.task('cloneRepo', function(callback) {
  console.log('clone!');
  if (fs.existsSync('./publish')) {
    git.pull('origin', 'master', callback);
  } else {
    git.clone('git@github.com:fastegg/fastegg.github.io.git', {args: './publish'}, callback);
  }
});

gulp.task('copyChanges', ['sass', 'typescript', 'webpack', 'cloneRepo'], function() {
  return gulp.src('./public/**/*').pipe(gulp.dest('./publish'));
});

gulp.task('commitChanges', ['webpack', 'copyChanges'], function() {
  return gulp.src('./publish')
    .pipe(git.add({args: '-A', cwd: './publish'}))
    .pipe(git.commit('new version', {cwd: './publish'}));
})
gulp.task('pushChanges', ['commitChanges'], function() {
  return git.push('origin', 'master', {cwd: './publish'});
});

gulp.task('publish', ['sass', 'typescript', 'webpack', 'pushChanges'], function() {
  console.log('done!');
});