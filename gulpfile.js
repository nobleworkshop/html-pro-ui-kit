const gulp = require("gulp"); // Подключаем Gulp
global.browserSync = require("browser-sync").create(); // Делаем browserSync глоабальным, чтобы всегда обновлялся единственный один и тот же сервер
var requireDir = require("require-dir");

requireDir("./gulp-tasks/development");
requireDir("./gulp-tasks/production");

/* *****************************
 * Таски для разработки
 ***************************** */

gulp.task(
    "build::dev",
    gulp.series(
        "clean:build",
        gulp.parallel(
            "scss",
            "pug:pages",
            "pug:ui-kit",
            "copy:img",
            "copy:files",
            "copy:libs",
            "copy:js"
        )
    )
);

gulp.task("server::dev", gulp.parallel("server:build", "watch:build"));
gulp.task("default", gulp.series("build::dev", "server::dev"));

/* *****************************
 * Таск для продакшена
 ***************************** */

// gulp.task("server::docs", gulp.parallel("server:docs")); // ??????? !!!!! ??????

gulp.task(
    "docs",
    gulp.series(
        // 1. Собрать билд из исходников
        "build::dev",
        "clean:docs",
        // 2. Собрать файлы из билда в DOCS
        gulp.parallel("html:docs", "img:docs", "copy:docs"),
        // 3. Запустить сервер для DOCS
        "server:docs"
    )
);
