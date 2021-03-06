"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const sass = require('gulp-sass');
const cssmin = require("gulp-cssmin");
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");
const concatCss = require("gulp-concat-css");
const jsmin = require("gulp-jsmin");
// const browserSync = require('browser-sync').create();

sass.compiler = require("node-sass");

function styles() {
	return src("./css/main.scss")
		.pipe(sass())
		.pipe(concatCss("main.css"))
		.pipe(cssmin())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("./css"));
}

// function html() {
// 	return src("./src/*.html")
// 		.pipe(
// 			htmlmin({
// 				// удаляем все перносы
// 				collapseWhitespace: true,
// 				// удаляем все комментарии
// 				removeComments: true,
// 			})
// 		)
// 		.pipe(dest("./"));
// }

function js() {
	return src("./src/js/main.js")
		.pipe(jsmin())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest("./js"));
}

function watching() {
	watch("./css/*.scss", styles);
	// watch("./src/*.html", html);
	watch("./src/js/main.js", js);
}

// function serve() {
// 	browserSync.init({
// 		server: './'
// 	});
// 	//следим за обновлением файлов и при изменении перезагружаем страницу
// 	browserSync.watch('./**/*.*').on('change', browserSync.reload);
// }

exports.styles = styles;
// exports.html = html;
exports.js = js;
exports.watching = watching;

exports.default = parallel(styles, js, watching);
// exports.default = parallel(styles, js, watching, serve);

// exports.sass = function () {
// 	return src("./sass/main.scss")
// 		.pipe(sass())
// 		.pipe(concatCss("main.css"))
// 		.pipe(cssmin())
// 		.pipe(rename({ suffix: ".min" }))
// 		.pipe(dest("./css"));
// };

// exports.task("minify", () => {
// 	return src("./*.html")
// 		.pipe(
// 			htmlmin({
// 				// удаляем все перносы
// 				collapseWhitespace: true,
// 				// удаляем все комментарии
// 				removeComments: true,
// 			})
// 		)
// 		.pipe(dest("./dist"));
// });

// exports.default = function () {
// 	// series - выполнение задач последовательно
// 	// parallel - запустить задачи одновременно
// 	watch("./sass/*.scss", series("sass"));
// };
