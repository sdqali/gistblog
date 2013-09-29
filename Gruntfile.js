module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	compress: {
	    main: {
		options: {
		    archive: 'out/gistblog.tar.gz',
		    mode: "tgz"
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
			],
			dest: 'out/gistblog'
		    }
		]
	    }
	}
    });

    grunt.registerTask('default', []);
};
