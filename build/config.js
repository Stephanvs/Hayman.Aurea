// This is the main Backbone Boilerplate build configuration file.
//
// This is a JavaScript file, you can define any functions you would like in
// here.
config.init({

  lint: {
    files: ["build/config.js", "app/**/*.js"]
  },

  concat: {

    // The core library files
    "dist/debug/js/libs.js": [
      "assets/js/libs/jquery.js",
      "assets/js/libs/underscore.js",
      "assets/js/libs/backbone.js",
      "assets/js/libs/hogan.js",
      "assets/js/libs/less.js",
      "assets/js/libs/modernizr.js",
      "assets/js/libs/modal.js"
    ],

    // Application files
    "dist/debug/js/app.js": ["app/namespace.js", "app/modules/**/*.js", "app/index.js"],

    // LESS Styles
    "dist/debug/less/style.less": [
      "assets/less/variables.less",
      "assets/less/colors.less",
      "assets/less/mixins.less",
      "assets/less/reset.less",
      "assets/less/**/*.less"
    ]
  },

  jst: {
    "dist/debug/js/templates.js": ["app/templates/**/*.html"]
  },

  min: {
    "dist/release/js/libs.js": ["dist/debug/js/libs.js"],
    "dist/release/js/app.js": ["dist/debug/js/app.js"],
    "dist/release/js/templates.js": ["dist/debug/js/templates.js"]
  },

  mincss: {
    "dist/release/less/style.less": ["dist/debug/less/style.less"]
  },

  watch: {
    files: ["assets/**/*", "app/**/*"],
    tasks: "lint:files concat jst",

    min: {
      files: ["assets/**/*", "app/**/*"],
      tasks: "default"
    }
  },

  clean: {
    folder: "dist/"
  }

});

// Run the following tasks...
task.registerTask("default", "clean lint:files concat jst min mincss");
