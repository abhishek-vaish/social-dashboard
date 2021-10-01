const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();

const sassTask = () => {
  return gulp
    .src("./app/sass/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(gulp.dest("./dist/css/", { sourcemaps: "." }));
};

const browserSync = (cb) => {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
};

const browserSyncReload = (cb) => {
  browsersync.reload();
  cb();
};

const taskWatch = () => {
  gulp.watch("*.html", browserSyncReload);
  gulp.watch(
    ["./app/sass/**/*.scss"],
    gulp.series(sassTask, browserSyncReload)
  );
};
exports.default = gulp.series(sassTask, browserSync, taskWatch);
