# Readme

## v 0.2.3 (2014-06-25)

A modified version of [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate) with [Sass](http://sass-lang.com/) and [Grunt](http://gruntjs.com/).

### Features

#### HTML
* files built from templates and partials in ./src/ and ./src/parts/

#### CSS
* CSS compiled from Sass in ./src/sass/
* CSS Lint task available

#### JS
* concatenated and minified from ./src/js
* JSHint task available

#### Images

##### SVG images

* SVG's in ./src/assets/images optimised using svgmin
* Optimised SVG's rasterised using svg2png
* PNG's optimised using imageoptim and imagealpha

##### Icons

* SVG's in /src/assets/icons optimised using svgmin
* grunticon works its magic on them, saving all relevant files to dist/css

#### Server

* Uses connect to serve files in ./dist/ to any device on the same network

#### Grunt

* Tasks loaded using jit-grunt for approximately 1.5s (75%) time saving on `grunt`. Much more on watch tasks.