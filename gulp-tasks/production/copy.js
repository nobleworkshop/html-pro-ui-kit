const gulp = require("gulp");

gulp.task("copy:docs", function(callback) {
    gulp.src("./build/php/**/*.*").pipe(gulp.dest("./docs/php/"));
    gulp.src("./build/files/**/*.*").pipe(gulp.dest("./docs/files/"));
    gulp.src("./build/libs/**/*.*").pipe(gulp.dest("./docs/libs/"));

    // gulp.src("./build/css/**/*.*").pipe(gulp.dest("./docs/css/"));
    // gulp.src("./build/js/**/*.*").pipe(gulp.dest("./docs/js/"));
    callback();
});
