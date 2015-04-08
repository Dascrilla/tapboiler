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

//Marketing Routes
  this.route('landing', {
    path: '/',
    layoutTemplate: 'landing'
  });

  this.route('home', {
    path: '/home',
    layoutTemplate: 'landing'
  });

//Dash Routes
  this.route('dashboard', {
    path: '/dashboard',
    onBeforeAction: function() {
      AccountsEntry.signInRequired(this);
    },
    waitOn: function() {
      return Meteor.subscribe('stuffs');
    }
  });

//Apps Routes
    this.route('apps', {
        path: '/apps',
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        waitOn: function() {
            return Meteor.subscribe('stuffs');
        }
    });

    this.route('createApp', {
        path: '/apps/create',
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        }
    });

//Account Routes
    this.route('account', {
        path: '/account',
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        waitOn: function() {
            return Meteor.subscribe('stuffs');
        }
    });

//Stats Routes
    this.route('stats', {
        path: '/stats',
        onBeforeAction: function() {
            AccountsEntry.signInRequired(this);
        },
        waitOn: function() {
            return Meteor.subscribe('stuffs');
        }
    });

//Themes Routes
    this.route('themes', {
        path: '/themes'
    });


});

/*requires the user logs in otherwise routes to Access Denied*/
var requireLogin = function() {
  if (!Meteor.user()) {
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