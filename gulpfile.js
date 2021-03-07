var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var postcssSass = require("postcss-sass");
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	var processors = [
	autoprefixer({browsers: ['last 2 version']}),

	//nested,
	//stylelint('config'),
    // Pretty reporting configreporter({   clearMessages: true,  throwError: true}),
	//doiuse({
    //browsers: [
  //    'IE 10',
   // ],
   //  ignore: ['rem'], // an optional array of features to ignore
  //  ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
   // onFeatureUsage: function (usageInfo) {
   //   console.log(usageInfo.message)} })
//	cssnano,
	];
    return gulp.src('app/css/incss.sass')
        .pipe(sass().on('error', sass.logError))
        //.pipe(sass())
        .pipe(postcss(processors))
        .pipe(rename('outcss.css'))
        .pipe(gulp.dest('app/css/mystyle.css'))
        .pipe(browserSync.reload({
          stream:true
          }));
});

gulp.task('default', function(){
	gulp.watch('app/css/*.sass', 
    gulp.parallel('css')
    )
  gulp.parallel('server')
		});



sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/css/incss.sass')
    .pipe(gulp.dest('app/css/mystyle.css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/css/incss.sass', gulp.parallel('sass'));
});














gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        files:['app/index.html','app/css/mystyle.css/outcss.css','app/img/']
    });
});
