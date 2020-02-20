const gulp = require("gulp"); // Подключаем Gulp
const watch = require("gulp-watch");

// Слежение за HTML и CSS и обновление браузера
gulp.task("watch:build", function() {
    // Запуск слежения и компиляции LESS с задержкой
    watch("./src/scss/**/*.scss", function() {
        setTimeout(gulp.parallel("scss"), 250);
    });

    // Слежение за PUG и сборка страниц и шаблонов
    watch("./src/pug/**/*.pug", gulp.parallel("pug:pages", "pug:ui-kit"));

    // Слежение за JSON данным
    watch("./src/data/**/*.json", gulp.parallel("pug:pages", "pug:ui-kit"));

    // Слежение за разделом UI-Kit
    watch("./src/pug/ui-kit/**/*.pug", gulp.parallel("pug:ui-kit"));
    watch("./src/pug/ui-kit/**/*.md", gulp.parallel("pug:ui-kit"));

    // Слежение и копирование статических файлов и скриптов
    watch("./src/img/**/*.*", gulp.parallel("copy:img"));
    watch("./src/files/**/*.*", gulp.parallel("copy:files"));
    watch("./src/libs/**/*.*", gulp.parallel("copy:libs"));
    watch("./src/js/**/*.*", gulp.parallel("copy:js"));
});
