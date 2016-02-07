module.exports = function(grunt) {

  // Project configuration.
  	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    nodemon: {
	      dev: {
	        script: 'app.js'
	      }
	    }
  	});

  // load nodemon
  grunt.loadNpmTasks('grunt-nodemon');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['nodemon']); 

};





