module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
	copy: {
	    main: {
		files: [
		    {
			expand: true,
			src: [
			    'index.html',
			    'fonts/**',
			    'gist.json',
			    'gistio.css',
			    'jquery-1.10.2.min.js',
			    'showdown.js',
			    'LICENSE.txt',
			    'README.md'
			],
			dest: 'out/'
		    }
		]
	    }
	},
	uglify: {
	    my_target: {
		files: {
		    'out/gistio.js': ['gistio.js']
		}
	    },
	    options: {
		preserveComments: "all"
	    }
	},
	shell: {
	    compress: {
		command: "mkdir -p ../dist && tar -czf ../dist/gistblog.tar.gz .",
		options: {
		    stdout: true,
		    execOptions: {
			cwd: 'out'
                    }
		}
	    }
	}
    });

    grunt.registerTask('default', ["copy", "uglify", "shell:compress"]);
};
