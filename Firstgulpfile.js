const gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
browserSync = require("browser-sync").create();

gulp.task("default", function() {
    console.log("Na so e dey be for the first time");
});

gulp.task("html", function() {
    console.log("I don try run the second one o. This one na for HTML");
});

gulp.task("styles", function() {
    // console.log("This one is for css");

    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./app/temp/styles"))
});

gulp.task("watch", function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch("./app/index.html", function() {
        // gulp.start("html");
        browserSync.reload();
    })
    watch("./app/assets/styles/**/*.css", function() {
        // gulp.start("styles");
        gulp.start("cssInject");
    })
})

gulp.task("cssInject", ["styles"], function() {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
})