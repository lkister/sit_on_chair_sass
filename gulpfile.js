var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require('gulp-autoprefixer');
var serve = require('gulp-serve');
var htmlmin = require('gulp-htmlmin');

gulp.task("sass", function () {
    return gulp.src("src/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/dist/css"));
});

gulp.task("watch", function() {
    gulp.watch("src/sass/*.scss", ["sass"]);
    gulp.watch("src/**/*.html", ["minifyHTML"]);
})

gulp.task("minifyHTML", function(){
    return gulp.src("src/*html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("src/dist"));
})

gulp.task("serve", serve({
    root: ["src/dist", "src/dist/css"],
    port: 8000
}))

gulp.task("default", ["serve", "minifyHTML", "sass", "watch"]);
