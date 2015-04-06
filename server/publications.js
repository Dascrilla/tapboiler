Meteor.publish('stuffs', function() {
	return Stuffs.find(); 

});

Houston.add_collection(Meteor.users);
Houston.add_collection(Stuffs);