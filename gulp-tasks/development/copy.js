const gulp = require("gulp"); // Подключаем Gulp

// Следим за картинками images
gulp.task("copy:img", function(callback) {
    return gulp
        .src("./src/img/**/*.*")
        .pipe(gulp.dest("./build/img/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за картинками Upload
gulp.task("copy:files", function(callback) {
    return gulp
        .src("./src/files/**/*.*")
        .pipe(gulp.dest("./build/files/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за картинками Upload
gulp.task("copy:libs", function(callback) {
    return gulp
        .src("./src/libs/**/*.*")
        .pipe(gulp.dest("./build/libs/"))
        .pipe(browserSync.stream());
    callback();
});

// Следим за скриптами
gulp.task("copy:js", function(callback) {
    return gulp
        .src("./src/js/**/*.*")
        .pipe(gulp.dest("./build/js/"))
        .pipe(browserSync.stream());
    callback();
});
