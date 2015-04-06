Template.layout.helpers({
	isLanding: function(){
		if (location.pathname === "/") {
			return true; 
		}
		else {
			return false;
		}
	}
}); 