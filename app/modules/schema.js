(function(Schema) {

  Schema.Model = Backbone.Model.extend({ /* ... */ });
  
  Schema.Collection = Backbone.Collection.extend({ /* ... */ });

  Schema.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the template and render it.
  Schema.Views.Dashboard = Backbone.View.extend({
      
    template: "app/templates/schema/dashboard.html",

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      hayman.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        done(view.el);
      });
    }

  });

})(hayman.module("schema"));
