import gulp from 'gulp';
import app from './package.json';
import fs from 'fs';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import connect from 'gulp-connect';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import history from 'connect-history-api-fallback';
import tsify from 'tsify';
import stringify from 'stringify';

function handleError(type, error) {
  console.log(`${type} error: ${error.message}`);
}

gulp.task('default', ['connect', 'bundle', 'assets', 'html'], function() {
  gulp.watch(['./app/**/*.ts', './app/**/*.html'], ['bundle']);
  gulp.watch(['./assets/**'], ['assets']);
  gulp.watch(['./app/views/**'], ['html']);
});

gulp.task('bundle', function() {
    browserify('./app/bootstrap.ts', {
      debug: false, extensions: ['.ts', '.js']
    })
    .plugin(tsify)
    .transform(babelify.configure({stage: 0, extensions: ['.ts', '.js']}))
    .transform(stringify(['.html']))
    .bundle()
    .on("error", (error) => {
      handleError('Bundle', error);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .on("error", (error) => {
      handleError('Sourcemaps', error);
      this.emit('end');
    })
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function() {
    return gulp.src([
            'views/index.html'
          ])
          .pipe(gulp.dest('./dist/'));
});

gulp.task('assets', function() {
    return gulp.src([
            'assets/**',
          ])
          .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080,
    middleware: function(connect, opt) {
      return [
        history()
      ]
    }
  });
});
