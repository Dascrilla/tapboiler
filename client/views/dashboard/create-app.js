Template.createApp.rendered = function() {
    Parse.initialize("e7zOnAnUJdteQlnooWsAgTL9VU9QmpgFO3G8Qaon", "8hDJB6rSLRDOygxJfDILCy6itWKkotmWIdYEzDXq");
}

Template.createApp.events({
    var : createNew = function(){
        var Apps = Parse.Object.extend("Apps");
        var apps = new Apps();
        var appTitle = document.getElementById("appTitle").value;
        var appDesc = document.getElementById("appDesc").value;
        apps.save({title: appTitle, AppDesc: appDesc}).then(function(object) {
            alert("Parse object posted to tapsell!");
        });
    }
});