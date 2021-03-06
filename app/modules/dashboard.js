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
        "click #btn-create-metaitem": "createmetaitem",
        "click #btn-goto-schema-dashboard": "gotoschema"
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
    },
    
    gotoschema: function() {
        hayman.app.router.navigate('schema/dashboard', true);
    }

  });

})(hayman.module("dashboard"));
