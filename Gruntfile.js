module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            coffee: {
                cmd: 'coffee -c server.coffee'
            },
            server: {
                cmd: 'node server.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('server', ['exec:server']);
    grunt.registerTask('coffee', ['exec:coffee']);
    grunt.registerTask('default', ['exec:coffee', 'exec:server'])
};
