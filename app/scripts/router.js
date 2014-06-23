'use strict';
var AppRouter = Parse.Router.extend({
	routes: {
		"": "home",
		"upload": "upload"
	},

	home: function(){
		console.log("The Home View has loaded.")
		appView = new AppView()
	},

	upload: function(){
		console.log("The Upload View had loaded.")
		uploadView = new UploadView()
	}
})

new AppRouter()
Parse.history.start()