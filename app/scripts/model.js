'use strict';
Parse.initialize("lxTMGChjTMuMPw4K8CII2dbFToa07o2ZI0hQrenq", "qtlcgfkOE8dHec9aZ8Z5Eko394uYd9x5twNB3Iv8");

var Photo = Parse.Object.extend({
	className: "Photo",

	defaults: {
		username: "No Username",
		caption: "Missing Description",
		file: "Blank URL"
	}
})

var Photos = Parse.Collection.extend({
	model: Photo
})