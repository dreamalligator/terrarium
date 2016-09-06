module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      coffee: {
        cmd: 'coffee -c server.coffee && \
          coffee -c js/*.coffee'
      },
      server: {
        cmd: 'node server.js'
      },
      deploy: {
        cmd: 'git checkout gh-pages && \
          git merge master && \
          git push origin gh-pages && \
          git checkout master',
      },
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('server', ['exec:server']);
  grunt.registerTask('deploy', ['exec:deploy']);
  grunt.registerTask('coffee', ['exec:coffee']);
  grunt.registerTask('default', ['exec:coffee', 'exec:server']);
};
