const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sass()) // Removi o ponto e vírgula aqui
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
  setTimeout(function () {
    console.log("Executando via Gulp");
    callback();
  }, 2000);
}

function dizOi(callback) {
  setTimeout(function () {
    console.log("Olá, Gulp");
    callback();
  }, 1000);
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
