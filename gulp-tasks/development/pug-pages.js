const gulp = require("gulp"); // Подключаем Gulp
const pugGlobbing = require("gulp-pug-globbing");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const htmlbeautify = require("gulp-html-beautify");
const fs = require("fs");

// Настройки для htmlbeautify
const htmlbeautifyOptions = {
    indent_size: 1,
    indent_char: "	",
    eol: "\n",
    indent_level: 0,
    indent_with_tabs: true,
    preserve_newlines: false,
    max_preserve_newlines: 10,
    jslint_happy: false,
    space_after_anon_function: false,
    brace_style: "collapse",
    keep_array_indentation: false,
    keep_function_indentation: false,
    space_before_conditional: true,
    break_chained_methods: false,
    eval_code: false,
    unescape_strings: false,
    wrap_line_length: 0,
    wrap_attributes: "auto",
    wrap_attributes_indent_size: 4,
    end_with_newline: false
};

// Таск для сборки HTML и шаблонов
gulp.task("pug:pages", function(callback) {
    return (
        gulp
            .src("./src/pug/pages/**/*.pug")
            .pipe(
                plumber({
                    errorHandler: notify.onError(function(err) {
                        return {
                            title: "Pug error",
                            sound: false,
                            message: err.message
                        };
                    })
                })
            )
            // .pipe(fileinclude({ prefix: "@@" }))
            .pipe(pugGlobbing())
            .pipe(
                pug({
                    pretty: true,
                    locals: {
                        jsonData: JSON.parse(
                            fs.readFileSync("./src/data/data.json", "utf8")
                        )
                    }
                })
            )
            .pipe(htmlbeautify(htmlbeautifyOptions))
            .pipe(gulp.dest("./build/"))
            .pipe(browserSync.stream())
    );
    callback();
});
