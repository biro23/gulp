const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

function comprimeImages() {
  return gulp.src("./source/images/*");
  pipe(imagemin()).pipe(gulp.dest("./build/images"));
}
