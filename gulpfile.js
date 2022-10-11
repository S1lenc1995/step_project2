const gulp = require ("gulp");
const sass = require("gulp-sass")(require("sass"))
const browserSync = require('browser-sync').create();
const imagemin = require ("gulp-imagemin");
const uglify = require ("gulp-uglify");
const autoprefixer = require('gulp-autoprefixer');


function buildStyles() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        })) 
        .pipe(gulp.dest('./dist/css'));
};
exports.buildStyles = buildStyles; 

function img () {
    return gulp.src('./src/img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
};
exports.img = img;


function buildJs () {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
};
exports.buildJs = buildJs;





function watchStyles() {
    gulp.watch('./src/scss/*.scss', buildStyles).on('change', browserSync.reload);
    gulp.watch('/Step_Project2/index.html', buildStyles).on('change', browserSync.reload);
    gulp.watch('./src/js/*.js', buildJs).on('change', browserSync.reload);
    
};
exports.watchStyles = watchStyles;

function serve(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}
exports.serve = serve;




exports.build = gulp.series(buildStyles, img, buildJs);
exports.dev = gulp.parallel(watchStyles, serve);

 