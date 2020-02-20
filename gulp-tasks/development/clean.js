const gulp = require("gulp"); // Подключаем Gulp
const del = require("del");

gulp.task("clean:build", function() {
    return del("./build/");
});
