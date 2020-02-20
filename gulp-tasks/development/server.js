const gulp = require("gulp"); // Подключаем Gulp

gulp.task("server:build", function() {
    browserSync.init({
        notify: false,
        port: 1000,
        server: { baseDir: "./build/" }
    });
});
