module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // image optimization
        imagemin: {
            dynamic: {
                options: {
                    loops: 7,
                    progressive: true
                },
                files: [{
                    expand: true,
                    src: ['img/*.{png,jpg,gif}', 'views/images/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            }
        },
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
        // minify html
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    dest: 'dist',
                    src: ['*.html', 'views/*.html*']
                }]
            }
        },
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Task lists
    grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify', 'htmlmin']);
};
