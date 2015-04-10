Template.dashboard.helpers({
	stuffs: function() {
		return Stuffs.find();
	}
});

Template.dashboard.rendered = function() {
    Parse.initialize("e7zOnAnUJdteQlnooWsAgTL9VU9QmpgFO3G8Qaon", "8hDJB6rSLRDOygxJfDILCy6itWKkotmWIdYEzDXq");

   var appsArr = [];
    // init variable arr
    //Create a Parse Query for Post objects
    var query = new Parse.Query("Apps");
    var eventObj = {};
    query.find({
        success: function(results) {

            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                eventObj = {};
                eventObj.id = results[i].id;
                eventObj.title = results[i].attributes.title;
                eventObj.screenshot1 = results[i].attributes.screenshot1._url;
                eventObj.appIcon = results[i].attributes.appIcon._url;
                appsArr.push(eventObj);
            }
            var app = appsArr;
            app.forEach(function(entry) {
                var div = document.createElement('div');
                div.className = 'row app-cont';
                div.innerHTML = '<div class="col-md-3"><img id="app-screenshot" class="app-screenshot" src="'+entry.screenshot1+'" ></div><div class="col-md-9"><img class="app-icon" id="app-icon" src="'+entry.appIcon+'" ><h3 class="app-title">'
                    + entry.title
                    +'</h3></div><div class="col-md-3"> </div><div class="col-md-3"><h3 class="number">273</h3><h4 class="number-label">orders</h4></div> <div class="col-md-3"> <h3 class="number">2.6k</h3> <h4 class="number-label">users</h4> </div>';
               document.getElementById('apps').appendChild(div);
               console.log(entry);

            });
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
//    var Apps = Parse.Object.extend("Apps");
//    var query = new Parse.Query(Apps);
//    query.get("7fWMKvkJTR", {
//        success: function(apps) {
//            console.log(apps);
//            document.getElementById('title').innerHTML = (apps.attributes.title);
//            $('#app-icon').attr('src',apps.attributes.appIcon._url);
//            $('#app-screenshot').attr('src',apps.attributes.screenshot1._url);
//            $('.app-cont').removeClass('transparent');
//        },
//        error: function(object, error) {
//            // The object was not retrieved successfully.
//            // error is a Parse.Error with an error code and message.
//        }
//    });

};