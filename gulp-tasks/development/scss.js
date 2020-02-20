const gulp = require("gulp"); // Подключаем Gulp
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const gcmq = require("gulp-group-css-media-queries");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

// Таск для компиляции LESS в CSS
gulp.task("scss", function(callback) {
    return gulp
        .src("./src/scss/main.scss")
        .pipe(
            plumber({
                errorHandler: notify.onError(function(err) {
                    return {
                        title: "SCSS error",
                        sound: false,
                        message: err.message
                    };
                })
            })
        )
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(
            sass({
                indentType: "tab",
                indentWidth: 1,
                outputStyle: "expanded"
            })
        )
        .pipe(gcmq())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 4 versions"]
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./build/css/"))
        .pipe(browserSync.stream());
    callback();
});
