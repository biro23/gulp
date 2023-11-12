const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImages() {
  return gulp
    .src("./source/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
  console.log("executing Gulp");
  // Faça alguma coisa
  callback();
}

function dizOi(callback) {
  setTimeout(function () {
    console.log("Hello Gulp");
    dizTchau();
    callback();
  }, 2000);
}

function dizTchau() {
  console.log("goodbye Gulp so I will see you later");
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;

exports.watch = function () {
  gulp.watch(
    "./source/styles/**/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );

  gulp.watch(
    "./source/scripts/**/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );

  gulp.watch("./source/images/**/*", { ignoreInitial: false }, comprimeImages);
};

exports.javascript = comprimeJavaScript;
exports.images = comprimeImages;
