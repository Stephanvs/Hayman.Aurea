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
