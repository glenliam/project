// 配置依赖
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	filterGradient = require('postcss-filter-gradient'),
	concat = require('gulp-concat'),
	cssmin = require('gulp-minify-css'),
	htmlmin = require('gulp-htmlmin'),
	rename = require('gulp-rename'),
	seajsCombo = require('gulp-seajs-combo'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	pngcrush = require('imagemin-pngcrush'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector');

// 配置浏览器选项
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

// 配置路径
var srcPath = {
	images: [
		'./src/images/*.{jpeg,jpg,png,gif}'
	],
	sass: [
		'./src/sass/neat.scss',
		'./src/sass/common.scss',
		'./src/sass/swiper.scss',
		'./src/sass/index.layer.scss'
	],
	js: [
		'./src/js/main.js'
	],
	otherjs: [
		'./src/js/sea.js',
		'./src/js/swiper.js'
	],
	html: [
		'./src/*.html'
	]
}

var destPath = {
	images: './dest/images',
	css: './dest/css',
	js: './dest/js',
	html: './dest'
}

var revPath = './rev';

//图片压缩
gulp.task('imagemin', function() {
	return gulp.src(srcPath.images)
		.pipe(imagemin({
	        progressive: true,
	        svgoPlugins: [{removeViewBox: false}],
	        use: [pngcrush()]
	    }))
	    .pipe(gulp.dest(destPath.images))
})


//sass编译、预处理、合并、压缩
gulp.task('sass', function() {
	return gulp.src(srcPath.sass)
		.pipe(sass())
		.pipe(postcss([
			filterGradient(),
			autoprefixer(browserOptions)
		]))
		//.pipe(concat('layout.css'))
		.pipe(cssmin({compatibility: 'ie7'}))
		//.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest(destPath.css))
});

//js压缩
gulp.task('seajscombo', function() {
	return gulp.src(srcPath.js)
		.pipe(seajsCombo())
		.pipe(uglify())
		.pipe(gulp.dest(destPath.js))
});
gulp.task('otherjs', function() {
	return gulp.src(srcPath.otherjs)
		.pipe(uglify())
		.pipe(gulp.dest(destPath.js))
});


//html压缩
gulp.task('html', function() {
	return gulp.src(srcPath.html)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(destPath.html))
});

// GULP任务设置
gulp.task('watch', function () {
	var watcher = gulp.watch([srcPath.images,srcPath.sass,srcPath.js,srcPath.otherjs,srcPath.html],['imagemin','sass','seajscombo','otherjs','html']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks');
	});
});

gulp.task('default', ['imagemin', 'sass', 'seajscombo', 'otherjs', 'html', 'watch'], function() {
	console.log('default task');
});
