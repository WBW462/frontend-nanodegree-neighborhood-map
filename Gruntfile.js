module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // minify css
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['css/*.*', 'views/css/*.*'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        // minfiy js
        uglify: {
            my_target: {
                options: {
                    beautify: true,
                    compress: {}
                },
                files: [{
                    expand: true,
                    src: ['js/*.js', 'views/js/*.js'],
                    dest: 'dist',
                    ext: '.min.js'
                }]
            },
            my_advance_target: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: [{
                    expand: true,
                    src: ['js/*.js', 'views/js/*.js'],
                    dest: 'dist',
                    ext: '.min.js'
                }]
            }
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task lists
    grunt.registerTask('default', ['cssmin', 'uglify']);
};
