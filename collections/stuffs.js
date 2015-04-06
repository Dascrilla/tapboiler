Stuffs = new Meteor.Collection('stuffs'); 

Stuffs.allow({
    insert: function () { return true; },
});

