const gulp = require("gulp"); // Подключаем Gulp
// const browserSync = require("browser-sync").create();

gulp.task("server:docs", function() {
    browserSync.init({
        server: { baseDir: "./docs/" }
    });
});
