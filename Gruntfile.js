module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt, {htmlbuild: 'grunt-html-build'});

	// config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// watch
		watch: {
			html: {
				files: 'src/**/*.html',
				tasks: ['htmlbuild'],
				option: {
					interrupt: true
				}
			},

			css: {
				files: 'src/sass/*.scss',
				tasks: ['sass'],
				options: {
					interrupt: true
				}
			},

			js: {
				files: 'src/js/*.js',
				tasks: ['uglify'],
				options: {
					interrupt: true
				}
			}
		},

		// tasks
		htmlbuild: {
			prod: {
				src: 'src/*.html',

				dest: 'dist/',

				options: {
					beautify: false,
					sections: {
						header: 'src/parts/header.part.html',
						footer: 'src/parts/footer.part.html'
					}
				}
			}
		},

		sass: {
			prod: {
				options: {
					style: 'compressed',
					//noCache: true
				},

				files: {
					'dist/css/style.css': 'src/sass/style.scss',
					'dist/css/old-ie.css': 'src/sass/old-ie.scss',
					'dist/css/really-old-ie.css': 'src/sass/really-old-ie.scss',
					'dist/css/fonts.css': 'src/sass/webfonts.scss'
				}
			}
		},

		csslint: {
			prod: {
				options: {
					'import': 2,
					'empty-rules': 2,
					'compatible-vendor-prefixes': false,
					'box-sizing': false
				},

				src: ['css/style.css']
			}
		},

		uglify: {
			prod: {
				options: {
					preserveComments: false
				},

				files: {
					'dist/js/script.min.js': ['src/js/main.js']
				}
			}
		},

		jshint: {
			prod: ['Gruntfile.js']
		},

		svgmin: {
			prod: {
				options: {
					plugins: [
						{
							removeViewBox: false
						}
					]
				},

				files: [
					{
						expand: true,
						cwd: 'src/assets/images',
						src: '{,*/}*.svg',
						dest: 'dist/images/'
					},

					{
						expand: true,
						cwd: 'src/assets/icons',
						src: '{,*/}*.svg',
						dest: 'src/assets/icons'
					}
				]
			}
		},

		svg2png: {
			prod: {
				files: [
					{
						src: ['dist/images/**/*.svg']
					}
				]
			}
		},

		imageoptim: {
			prod: {
				options: {
					imageAlpha: true,
					quitAfter: true
				},

				src: ['dist/images']
			}
		},

		grunticon: {
			prod: {
				files: [{
					expand: true,
					cwd: 'src/assets/icons/',
					src: ['*.svg', '*.png'],
					dest: 'dist/css/icons/'
				}]

				/*options: {
					customselectors: {
						"*": [".icon-$1:before"]
						// (this is going to be very useful)
					}
					
				}*/
			}
		},

		// Connect plugin for server and synchronisation between browsers/devices
		connect: {
			server: {
				options: {
					port: 9001,
					hostname: '0.0.0.0',
					base: 'dist',
					keepalive: true
				}
			}
		}
	});

	grunt.registerTask('default', ['htmlbuild','sass','uglify','csslint','jshint']);

	grunt.registerTask('img', ['svgmin','grunticon','svg2png','imageoptim']);

	grunt.registerTask('server', ['connect:server']);
};
