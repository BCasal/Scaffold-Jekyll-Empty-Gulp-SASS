

// DEPENDENCIAS

const child        = require('child_process');
const browserSync  = require('browser-sync').create();
const gulp         = require('gulp');
const gutil        = require('gulp-util');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require('gulp-rename');

// RUTAS

const siteRoot     = '_site';
const sassSrc      = '_sass/style.scss';
const sassDest     = 'assets/css/';



// TAREA SASS

gulp.task('sass', () => {

	gulp.src(sassSrc)
	.pipe(sass({outputStyle: 'nested'}))
	.pipe(autoprefixer('last 15 versions', '> 1%'))
	.pipe(gulp.dest(sassDest))
	.pipe(rename({suffix: '.min'}))
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest(sassDest));

});

// TAREA JEKYLL-BUILD

gulp.task('jekyll-build', ['sass'], () => {

	// CONFIGURACION LOCAL
	// baseurl & url (vacio)

  const jekyll = child.spawn('jekyll', ['build']);

});

// TAREA JEKYLL

gulp.task('jekyll', ['sass'], () => {

	// CONFIGURACION LOCAL
	// baseurl & url (vacio)

  const jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental'
  ]);

	// CONFIGURACION DE PROD. + CONFIGURACION LOCAL
	// baseurl & url (definido)
	// añadir _config-dev.yml con baseurl & url (vacio)

	/*
	const jekyll = child.spawn('jekyll', ['build',
		'--watch',
		'--incremental',
		'--config',
		'_config.yml,_config-dev.yml'
	]);
	*/

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);

});

// TAREA SERVE

gulp.task('serve', ['jekyll'], () => {

  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  gulp.watch(('_sass/**'), ['sass']);

});

// TAREA DEFAULT

gulp.task('default', ['serve']);
