/*subscriptions that WaitOn on the subscriptions to be loaded, displaying loading spinner in the interm */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('stuffs'); 
  }
});

Router.onBeforeAction('loading');

Router.map(function() {

    this.route('landing', {
    path: '/',
    layoutTemplate: 'landing'
  });

    this.route('home', {
      path: '/home', 
      layoutTemplate: 'landing'
    });


    this.route('dashboard', {
    path: '/dashboard', 
     onBeforeAction: function () {
      AccountsEntry.signInRequired(this);
    },
     waitOn: function() {
    return Meteor.subscribe('stuffs'); 
  }
  });

  
 });

/*requires the user logs in otherwise routes to Access Denied*/
var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    
    this.stop();
  }
}

/*
Router.onBeforeAction(requireLogin, {only: 'docSubmit'})
 */