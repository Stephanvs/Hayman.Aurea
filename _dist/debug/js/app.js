// Change *namespace* to your namespace!
// This contains the module definition factory function, application state,
// events, and the router.
this.hayman = {
  // Assist with code organization, by breaking up logical components of code
  // into modules.
  module: function() {
    // Internal module cache.
    var modules = {};

    // Create a new module reference scaffold or load an existing module.
    return function(name) {
      // If this module has already been created, return it.
      if (modules[name]) {
        return modules[name];
      }

      // Create a module and save it under this name
      return modules[name] = { Views: {} };
    };
  }(),

  // This is useful when developing if you don't want to use a
  // build process every time you change a template.
  //
  // Delete if you are using a different template loading method.
  fetchTemplate: function(path, done) {
    window.JST = window.JST || {};

    // Should be an instant synchronous way of getting the template, if it
    // exists in the JST object.
    if (JST[path]) {
      return done(JST[path]);
    }

    // Fetch it asynchronously if not available from JST
    return $.get(path, function(contents) {
      var tmpl = _.template(contents);
      JST[path] = tmpl;

      done(tmpl);
    });
  },

  // Keep active application instances namespaced under an app object.
  app: _.extend({}, Backbone.Events)
};

// Use an IIFE...
// (http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
// to assign your module reference to a local variable.
//
// Change line 16 'Example' to the name of your module, and change line 38 to
// the lowercase version of your module name.  Then change the namespace
// for all the Models/Collections/Views/Routers to use your module name.
//
// For example: Renaming this to use the module name: Project
//
// Line 16: (function(Project) {
// Line 38: })(namespace.module("project"));
//
// Line 18: Project.Model = Backbone.Model.extend({
//
(function(Dashboard) {

  Dashboard.Model = Backbone.Model.extend({ /* ... */ });
  
  Dashboard.Collection = Backbone.Collection.extend({ /* ... */ });

  Dashboard.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the template and render it.
  Dashboard.Views.Dashboard = Backbone.View.extend({
    template: "app/templates/dashboard.html",

    events: {
        "click #btn-create-metaitem": "createmetaitem"
    },

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      hayman.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        done(view.el);
      });
    },

    createmetaitem: function(){
        hayman.app.router.navigate('metaitem/create', true);
    }

  });

})(hayman.module("dashboard"));

// Use an IIFE...
// (http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
// to assign your module reference to a local variable, in this case Example.
//
// Change line 16 'Example' to the name of your module, and change line 38 to
// the lowercase version of your module name.  Then change the namespace
// for all the Models/Collections/Views/Routers to use your module name.
//
// For example: Renaming this to use the module name: Project
//
// Line 16: (function(Project) {
// Line 38: })(namespace.module("project"));
//
// Line 18: Project.Model = Backbone.Model.extend({
//
(function(Example) {

  Example.Model = Backbone.Model.extend({ /* ... */ });
  Example.Collection = Backbone.Collection.extend({ /* ... */ });
  Example.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  Example.Views.Tutorial = Backbone.View.extend({
    template: "app/templates/example.html",

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      hayman.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        done(view.el);
      });
    }
  });

})(hayman.module("example"));

(function(MetaItem) {

  MetaItem.Model = Backbone.Model.extend({ /* ... */ });
  
  MetaItem.Collection = Backbone.Collection.extend({ /* ... */ });

  MetaItem.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the template and render it.
  MetaItem.Views.Create = Backbone.View.extend({
    template: "app/templates/metaitem-create.html",

    events: {
        "click #btn-create": "create",
        "click #btn-cancel": "cancel"
    },

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      hayman.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        done(view.el);
      });
    },

    create: function() {
      
    },

    cancel: function() {
      console.log('creation of metaitem canceled...');

      hayman.app.router.navigate('dashboard', true);
    }

  });

})(hayman.module("metaitem"));

// Treat the jQuery ready function as the entry point to the application.
// Inside this function, kick-off all initialization, everything up to this
// point should be definitions.
jQuery(function($) {

  // Shorthand the application namespace
  var app = hayman.app;

  // Load the modules used by the application
  var Dashboard = hayman.module("dashboard");
  var MetaItem = hayman.module("metaitem");

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    
    routes: {
      // Dashboard
      "": "dashboard",
      ":hash": "dashboard",
      "dashboard": "dashboard",

      // MetaItem Creation
      "metaitem/create": "metaitemcreate",

      // Search
      "search/:query": "search"
    },

    renderer: function(el) {
      $("#main").html(el);

      // Fix for hashes in pushState and hash fragment
      if (hash && !route._alreadyTriggered) {
        // Reset to home, pushState support automatically converts hashes
        Backbone.history.navigate("", false);

        // Trigger the default browser behavior
        location.hash = hash;

        // Set an internal flag to stop recursive looping
        route._alreadyTriggered = true;
      }
    },

    dashboard: function(hash) {

      var route = this;
      var view = new Dashboard.Views.Dashboard();

      // Attach the tutorial to the DOM
      view.render(this.renderer);
    },

    metaitemcreate: function () {

      var route = this;
      var view = new MetaItem.Views.Create();

      view.render(this.renderer);

    },

    search: function (query) {

      console.log('searching for: ' + query);

    }
  });
  
  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // Trigger the initial route and enable HTML5 History API support
  Backbone.history.start({ pushState: true });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // This uses the default router defined above, and not any routers
      // that may be placed in modules.  To have this work globally (at the
      // cost of losing all route events) you can change the following line
      // to: Backbone.history.navigate(href, true);
      app.router.navigate(href, true);
    }
  });
});
