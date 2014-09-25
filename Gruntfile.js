module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
          options: {
            banner: '/*\n* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n*/\n'
          }, 
          build: {
            src: 'src/scotchPanels.js',
            dest: 'dist/scotchPanels.js'
          }
        },

        // configure jshint to validate js files -----------------------------------
        jshint: {
          options: {
            reporter: require('jshint-stylish')
          },
          all: ['src/*.js']
        },

        // configure uglify to minify js files -------------------------------------
        uglify: {
          options: {
            banner: '/*\n* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n*/\n'
          }, 
          build: {
            files: {
              'dist/scotchPanels.min.js': 'dist/scotchPanels.js'
            }
          }
        },

        // configure watch to auto update ------------------------------------------
        watch: {
          scripts: {
            files: 'src/*.js',
            tasks: ['concat', 'uglify']
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify']);

};