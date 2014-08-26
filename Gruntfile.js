module.exports = function (grunt) {
    grunt.initConfig({
        'coveralls': {
            'options': {
                'src': 'coverage/files/lcov.info',
                'force': true
            }
        },
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
        'mochaTest': {
            'test': {
                'options': {
                    'reporter': 'spec',
                    'require': 'coverage/blanket'
                },
                'src': [
                    'tests/*.spec.js'
                ]
            },
            'html-cov': {
                'options': {
                    'captureFile': 'coverage/files/coverage.html',
                    'reporter': 'html-cov',
                    'require': 'coverage/blanket',
                    'quiet': true
                },
                'src': [
                    'tests/**/*.js'
                ]
            },
            'travis': {
                'options': {
                    'captureFile': 'coverage/files/lcov.info',
                    'reporter': 'mocha-lcov-reporter',
                    'require': 'coverage/blanket',
                    'quiet': true
                },
                'src': [
                    'tests/**/*.js'
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Registers a tast to test the npm module
    grunt.registerTask('test', [
        'jshint',
        'jscs',
        'mochaTest:test'
    ]);

    // Registers a tast to test the npm module with coverage for Coveralls.io
    grunt.registerTask('ci-test', [
        'jshint',
        'jscs',
        'mochaTest:travis'
    ]);

    grunt.registerTask('default', ['test']);
};
