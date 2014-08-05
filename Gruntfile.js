module.exports = function (grunt) {
    grunt.initConfig({
        'jshint': {
            'src': [
                './*.js'
            ],
            'options': {
                'jshintrc': '.jshintrc'
            }
        },
        'jscs': {
            'src': '<%= jshint.src %>'
        },
        'nodeunit': {
            all: ['tests/*.spec.js']
        }
    });

    require('load-grunt-tasks')(grunt);

    // Registers a task to test the task
    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'nodeunit'
    ]);

    grunt.registerTask('default', ['test']);
};
