# Changelog

## v0.2.4

* add non-standard code to remove the 300ms tap delay on Windows phones

## v0.2.4 2014-06-25

* remove unused grunt plugin
* fix issue where imageoptim was failing sometimes

## v0.2.2 2014-05-15

* update HTML5 shiv (for picture element support)

## v0.2.1 2014-05-12

* add lang attribute

## v0.2.0 2014-04-23

* update grunticon to >=1.2.0
* add [time-grunt](https://github.com/sindresorhus/time-grunt)
* remove unused setup task
* use [jit-grunt](https://github.com/shootaroo/jit-grunt) instead of `grunt.loadNpmTasks()`

## v0.1.4 2013-12-17

* add print styles
* add X-UA-Compatible meta
* update GA script
* add style to align media elements
* copy paste the latest @h5bp .htaccess

## v0.1.3 2013-11-22

* add .gitignore to /dist/assets/images/ and /dist/assets/icons/ to prevent error when grunt is first run
* change name of templates/ to parts/ and index.html to template.html
* add `noCache: true` to Sass task options to prevent compile error
* New plugin! Grunt Connect to launch a server and give me local access on other devices

## v0.1.2 2013-06-24

* add grunticon
* use svgmin instead of (the now depracated) svgo
* reorganise assets folder

## v0.1.1 2013-06-22

* fix bug that prevented imageoptim running
* put minified html5 shiv in dist/js
* add [htmlbuild](https://github.com/spatools/grunt-html-build) task

## v0.1.0 2013-06-21

* Tidy up structure using src and dist folders
* Add svg2png and imageoptim tasks
* Updated .gitignore to include .DS_Store