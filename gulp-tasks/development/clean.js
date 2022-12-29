const gulp = require('gulp'); // Подключаем Gulp
const del = require('del');

gulp.task('clean:build', async function () {
	return del('./build/');
});
