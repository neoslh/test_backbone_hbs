module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

   grunt.registerTask('neo','test',function(){
	grunt.log.writeln("test");
});

};
