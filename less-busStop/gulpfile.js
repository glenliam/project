var gulp = require('gulp'),
	less = require('gulp-less'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	filterGradient = require('postcss-filter-gradient'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-minify-css'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename');


var browserOptions = {
  browsers: [
    'last 3 versions',
    'ie >= 6',
    'firefox >= 30',
    'chrome >= 34',
    'safari >= 6',
    'opera >= 12.1',
    'ios >= 6',
    'android >= 2.3',
    'and_uc 9.9',
  ],
  cascade: true
}

var destPath = {
	style: './dest/css',
	html: './dest'
}

var srcPath = {
	less: [
		'./src/less/neat.less',
		'./src/less/main.less'
	],
	html: [
		'./src/*.html'
	]
}

//less编译、预处理、合并、压缩
gulp.task('less', function() {
	return gulp.src(srcPath.less)
		.pipe(less())
		.pipe(postcss([
			filterGradient(),
			autoprefixer(browserOptions)
		]))
		.pipe(concat('mainout.css'))
		.pipe(cssmin({compatibility: 'ie7'}))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(destPath.style))
});

//html压缩
gulp.task('html', function() {
	return gulp.src(srcPath.html)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(destPath.html))
});


gulp.task('watch', function () {
	var watcher = gulp.watch([srcPath.less,srcPath.html],['less','html']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks');
	});
});

gulp.task('default', ['less', 'html', 'watch'], function() {
	console.log('default task');
});