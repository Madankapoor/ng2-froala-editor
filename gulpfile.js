var gulp = require("gulp");

gulp.task("build", function(){
  gulp.src("./dist/**/*")
    .pipe(gulp.dest("../ng2-froala-editor"));
  gulp.src("./readme.md")
    .pipe(gulp.dest("../ng2-froala-editor"));
  gulp.src("./package.json")
    .pipe(gulp.dest("../ng2-froala-editor"));
});