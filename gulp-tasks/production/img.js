const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("img:docs", function() {
    return (
        gulp
            .src("./build/img/**/*.*")
            // .pipe(imagemin(''))
            .pipe(
                imagemin({
                    progressive: true,
                    interlaced: true
                })
            )
            .pipe(gulp.dest("./docs/img/"))
    );
});
