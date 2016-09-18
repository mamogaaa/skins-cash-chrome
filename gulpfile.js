var gulp = require('gulp');

var exec = require("exec");
gulp.task('iced', function() {
  exec(["iced",  "-o",  "./dist", "-c", "./dev/coffee"], function(err, out, code) {
    console.log(out)
  })
});
gulp.task('dist_iced', function() {
  exec(["iced",  "-o",  "./dist", "-c", "./dev/coffee"], function(err, out, code) {
    console.log(out)
  })
});

gulp.task('default', ['dev'], function() {
  // place code for your default task here
});
// gulp.task('coffee', function() {
//   gulp.src('./coffee/*.coffee')
//     .pipe(coffee({bare: true}))
//     .pipe(gulp.dest('./js'))
// });



gulp.task('dev', ['dev_watch'])
gulp.task('build', ['dist_iced'], function(){
	gulp.src("./dev/manifest.json").pipe(gulp.dest("./dist"))
})



gulp.task('dev_watch', function () {
	gulp.watch("./dev/coffee/**/*.coffee", ['iced']);
});