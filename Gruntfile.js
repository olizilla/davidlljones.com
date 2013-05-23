module.exports = function(grunt) {

	grunt.initConfig({

		// Create the html files from page layouts and partial html fragments
		assemble:{
			options: {
				assets: 'dist/assets',
				layout:'src/layout.hbs',
				partials: ['src/structure/components/*.hbs'],
				data: 'src/content/data/*.json'
			},
			pages: {
				files:[{
					expand:true,
					cwd: 'src/content/pages/',
					src: ['*.hbs','**/*.hbs'],
					dest: 'dist',
					ext: '.html'
				}]
			}
		},

		// Compile the mobile first site stylesheet (and the no @media queries version for lt-ie8) 
		less: {
			all: {
				files: {
					'dist/assets/css/main.css': 'src/css/main.less'
				}
			}
		},		

		copy:{
			res:{
				files:[{
					expand:true,
					cwd: 'src',
					src: ['js/*', 'js/**/*', 'css/**/*'],
					dest: 'dist/assets',
					ext: ''
				}]
			},
			content:{
				files:[{
					expand:true,
					cwd: 'src/content/pages',
					src: ['**/*.{jpg,jpeg,png,gif}'],
					dest: 'dist',
					ext: ''
				}]
			}
		},

		watch:{
			all:{
				files:['src/**/*', 'Gruntfile.js'],
				tasks:['default'],
				options:{
					livereload:true
				}
			}
		}

		// // Minify the site CSS
		// mincss: {
		// 	compress: {
		// 		files: {
		// 			'dist/css/main.css': 'dist/css/main.css'
		// 		}
		// 	}
		// },

		// "imagemagick-resize":{
		// 	all:{
		// 		from:'raw/img/',
		// 		to:'src/img/',
		// 		files:'**',
		// 		props:{
		// 			width:800
		// 		}
		// 	}
		// },

		// imagemin: {
		// 	dist: {
		// 		options: {
		// 			optimizationLevel: 3
		// 		},
		// 		files: [
		// 			{dest: 'dist/', src: 'img/**', expand: true, cwd: 'src/'}
		// 		]
		// 	}
		// },

		// // Watch CoffeeScript, LESS & HTML files for changes, copy & compile but not minify for easy debug during dev
		// watch: {
		// 	project: {
		// 		files: ['src/js/**/*.coffee', 'src/css/**/*.less', 'src/**/*.html'],
		// 		tasks: ['copy', 'imagemin', 'less', 'coffee']
		// 	}
		// }
	});



	// Load the grunt-conrtib plugin so we can compile and compress CoffeeScript and LESS files
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-imagemagick');

	grunt.registerTask('default', ['assemble', 'less', 'copy']);

	// grunt.registerTask('default', ['copy', 'imagemin', 'coffee', 'less', 'uglify', 'mincss']);
};
