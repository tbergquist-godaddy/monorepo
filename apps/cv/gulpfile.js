/* eslint-disable import/no-extraneous-dependencies */
const { src, dest, series } = require('gulp');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const hash = require('gulp-hash-filename');
const inject = require('gulp-inject');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

function css() {
  return src(['./src/*.css'])
    .pipe(concatCss('index.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(hash())
    .pipe(dest('./dist'));
}

function html() {
  return src('dist/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'));
}

function injectCSS() {
  const css = src('dist/*.css', { read: false });
  return src('dist/*.html')
    .pipe(
      inject(css, {
        transform: (filepath) => {
          return `<link rel="stylesheet" href="${filepath.replace('/dist', '')}" />`;
        },
      }),
    )
    .pipe(dest('./dist'));
}

function copy() {
  return src('favicon.ico').pipe(dest('./dist'));
}
function copyFonts() {
  return src('src/styles/typography/fonts/*').pipe(dest('./dist/styles/typography/fonts'));
}

exports.default = series(css, html, injectCSS, copy, copyFonts);
