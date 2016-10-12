module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      coffee: {
        cmd: 'coffee -c server.coffee && \
          coffee -c javascripts/plot.coffee && \
          coffee -c javascripts/taxonomy.coffee && \
          coffee -c javascripts/main.coffee'
      },
      scss: {
        cmd: 'sass --sourcemap=none --watch stylesheets'
      },
      server: {
        cmd: 'node server.js'
      },
      bundle: {
        cmd: 'browserify javascripts/main.js --exclude jquery -o javascripts/bundle.js'
      },
      deploy: {
        cmd: 'git branch -D gh-pages && \
          git checkout -b gh-pages && \
          grunt coffee && \
          grunt bundle && \
          sass --sourcemap=none --no-cache --update stylesheets && \
          git add -f javascripts/main.js && \
          git add -f stylesheets/main.css && \
          git commit -m "adds compiled assets for github pages" && \
          git push -f --set-upstream origin gh-pages && \
          git checkout master'
      },
      database: {
        cmd: 'mongod --dbpath=data --port 27017'
      }
    },
    concurrent: {
      all: ['exec:scss', ['exec:coffee', 'exec:bundle', 'exec:server']]
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.registerTask('server', ['exec:server']);
  grunt.registerTask('deploy', ['exec:deploy']);
  grunt.registerTask('coffee', ['exec:coffee']);
  grunt.registerTask('bundle', ['exec:bundle']);
  grunt.registerTask('scss', ['exec:scss']);
  grunt.registerTask('default', ['concurrent:all']);
};
