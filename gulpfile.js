// require plugins
var gulp = require('gulp'),
    nodeInspector = require('gulp-node-inspector'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: './src/app',  // location of webserver module
    ext: 'js',
    tasks: ['jshint'],  // any task you want to run before refreshing the server
    nodeArgs: ['--debug']  //important must pass the debug flag to work
  });
});

gulp.task('node-inspector', ['nodemon'], function() {
  gulp.src([])
    .pipe(nodeInspector({
      debugPort: 5858,
      webHost: '0.0.0.0',
      webPort: 8080,
      saveLiveEdit: false,
      preload: true,
      inject: true,
      hidden: [],
      stackTraceLimit: 50,
      sslKey: '',
      sslCert: ''
    }));
});

gulp.task('default', function() {
     gulp.start('node-inspector');
});
