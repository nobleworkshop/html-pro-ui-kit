const gulp = require("gulp");
const usemin = require("gulp-usemin");
const htmlclean = require("gulp-htmlclean");
const rev = require("gulp-rev");
const minifyCss = require("gulp-minify-css");
const uglify = require("gulp-uglify");

gulp.task("html:docs", function() {
    return gulp
        .src("./build/*.html")
        .pipe(
            usemin({
                css1: [
                    function() {
                        return rev();
                    },
                    function() {
                        return minifyCss();
                    }
                ],
                css2: [
                    function() {
                        return rev();
                    },
                    function() {
                        return minifyCss();
                    }
                ],
                js1: [
                    function() {
                        return rev();
                    },
                    function() {
                        return uglify();
                    }
                ],
                js2: [
                    function() {
                        return rev();
                    },
                    function() {
                        return uglify();
                    }
                ],
                js3: [
                    function() {
                        return rev();
                    },
                    function() {
                        return uglify();
                    }
                ]
            })
        )
        .pipe(htmlclean())
        .pipe(gulp.dest("./docs/"));
});
