module.exports = function(grunt){
        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                clean: {
                        build: ['.tmp/'],
                        release: ['dist/']
                },
                jshint: {
                        all: ['js/*.js']
                },
                copy: {
                        html: {
                                files: [
                                        {src: ["index.html"], dest: "dist/"}
                                ]
                        }
                },
                filerev: {
                        options: {
                                length: 8
                        },
                        generated: {
                                files:[
                                        {src: "dist/*.min.js"},
                                        {src: "dist/*.min.css"}
                                ]
                        }
                },
                useminPrepare: {
                        html: ['index.html']
                },
                usemin: {
                        options: {
                                assetsDirs: ['dist/']
                        },
                        html: 'dist/index.html'
                }
        });
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-usemin');
        grunt.loadNpmTasks('grunt-filerev');
        grunt.registerTask('default', [
                'clean',
                'jshint',
                'copy',
                'useminPrepare',
                'concat:generated',
                'cssmin:generated',
                'uglify:generated',
                'filerev',
                'usemin',
                'clean:build'
        ]);
}