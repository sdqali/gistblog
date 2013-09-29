module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	compress: {
	    main: {
		options: {
		    archive: 'gistblog.tar.gz',
		    mode: 'tgz'
		},
		files: [
		    {
			src: [
			    'index.html',
			    'fonts',
			    'gistio.json',
			    'gistio.js',
			    'jquery-1.10.2.min.js',
			    'showdown.js',
			    'LICENSE.txt',
			    'README.md'
			]
		    }
		]
	    }
	}
    });

    grunt.registerTask('default', ["compress"]);
};
