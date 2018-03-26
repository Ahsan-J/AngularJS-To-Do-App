module.exports = function(grunt){
    grunt.initConfig({
        clean:{
            options:{
                'force':true
            },
            html:['../public/assets/html/**'],
            js_dep:['../public/assets/js/depending.js'],
            js:['../public/assets/js/app.js'],
            css:['../public/assets/css/**'],
        },
        concat:{
            css:{
                src:[
                    './node_modules/bootstrap/dist/css/bootstrap.css',
                    './mode_modules/@fontawesome/fontawesome/style.css',
                    './modules/**/*.css',
                ],
                dest:'../public/assets/css/bundle.css'
            },
            js_dep:{
                src:[
                    './node_modules/angular/angular.js',
                    './node_modules/angular-resource/angular-resource.js',
                    './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
                    './node_modules/moment/moment.js',
                    './node_modules/angular-moment/angular-moment.js',
                    // '/.node_modules/jquery/dist/jquery.slim.js',
                    './assets/js/jquery-3.2.1.slim.js',
                    './assets/js/popper.js',
                    // './assets/js/bootstrap.js',
                    // './node_modules/popper.js/dist/popper.js',
                    './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
                    './mode_modules/@fontawesome/fontawesome/index.js',
                ],
                dest:'../public/assets/js/depending.js'
            },
            js:{
                src:[
                    './modules/mainModule/Main_app.js',
                    './modules/**/!(Main_app).js',
                ],
                dest: '../public/assets/js/app.js'
            },
        },
        uglify:{
            js_dep:{
              files:{
                  '../public/assets/js/depending.js':['../public/assets/js/depending.js'],
              }  
            },
            js:{
                files:{
                    '../public/assets/js/app.js':['../public/assets/js/app.js'],
                }
            },
            // css:{
            //     files:{
            //         '../public/assets/css/bundle.css':['../public/assets/css/bundle.css'],
            //     }
            // }
        },
        copy:{
            html:{
                expand:true,
                flatten: true,
                src:'./modules/**/*.html',
                dest:'../public/assets/html/'
            }
        },
        watch:{
            js:{
                files:['./modules/**/*.js'],
                tasks:['js'],
            },
            gruntOnly:{
                files:['./Gruntfile.js'],
                tasks:['default'],
            },
            html:{
                files:['./modules/**/*.html'],
                tasks:['html']
            },
            css:{
                files:['./modules/**/*.css'],
                tasks:['css']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default',[
        'clean',
        'concat',
        'copy',
        // 'uglify',
        'watch',
    ]);
    grunt.registerTask('html',[
        'clean:html',
        'copy:html',
        'watch',
    ]);
    grunt.registerTask('js',[
        'clean:js',
        'concat:js',
        // 'uglify:js',
        'watch',
    ]);
    grunt.registerTask('css',[
        'clean:css',
        'concat:css',
        // 'uglify:css',
        'watch',
    ]);
};