module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                src: ['js/*.js'],
                dest: 'main_js/script.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'main_js/main.css': ['css/style.css', 'css/style1.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js', 'css/*.css'],
                tasks: ['cssmin', 'uglify']
            }
        }
    });

		grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', [ 'watch', 'cssmin', 'uglify' ]);
};
