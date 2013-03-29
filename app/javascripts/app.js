// This is your main javascript file. You can use write your entire application
// in this file if you like. Files are compiled into minispade modules
// based on the file name. All JS files inside "app/javascripts" are
// automatically prefixed with your application name. You can require
// this file like so:
//
//   require('app')
//
// This file makes all the code available. Your app is initialized in the
// boot file. Here's an example
//
//   require('models')
//   require('views')
//   require('controllers')
//   require('helpers')
//
// Your application begins here...

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource("messages");
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("messages");
  }
});

App.MessagesRoute = Ember.Route.extend({
  model: function() {
    return App.Message.all();
  }
});

App.NewMessageView = Ember.TextArea.extend({
  classNames: "new-message",
  keyDown: function(event) {
    if (event.keyCode === 13) { // enter
      App.Message.createRecord({ text: this.get("value"), author: App.username });
      event.preventDefault();
      this.set("value", "");
    }
  }
});



App.Message = Ember.Object.extend({
  author: null,
  text: null
}).reopenClass({

  records: [],
  all: function() {
    return this.records;
  },
  createRecord: function(attributes) {
    this.records.pushObject(App.Message.create(attributes));
  }

});

App.Message.createRecord({ text: "lorem ipsum dolor sit amet", author: "johndoe" });
App.Message.createRecord({ text: "lorem ipsum dolor sit amet", author: "johndoe" });
App.Message.createRecord({ text: "lorem ipsum dolor sit amet", author: "johndoe" });
App.Message.createRecord({ text: "lorem ipsum dolor sit amet", author: "johndoe" });
App.Message.createRecord({ text: "lorem ipsum dolor sit amet", author: "johndoe" });

