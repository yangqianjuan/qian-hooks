const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const del = require('del');

gulp.task('clean', async function () {
  await del('es/**');
  await del('lib/**');
  await del('dist/**');
});

gulp.task('es', function () {
  const tsconfig = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsconfig.src().pipe(tsconfig()).pipe(babel()).pipe(gulp.dest('es/'));
});

gulp.task('cjs', function () {
  return gulp
    .src('es/**/*.js')
    .pipe(babel({ configFile: '../../.babelrc' }))
    .pipe(gulp.dest('lib/'));
});

gulp.task('declaration', function () {
  const tsconfig = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsconfig.src().pipe(tsconfig()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});
exports.default = gulp.series('clean', 'es', 'cjs', 'declaration');
