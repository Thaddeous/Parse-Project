Parse.initialize("lxTMGChjTMuMPw4K8CII2dbFToa07o2ZI0hQrenq", "qtlcgfkOE8dHec9aZ8Z5Eko394uYd9x5twNB3Iv8");

var Animal = Parse.Object.extend({
	className: "Animal"
});

var fido = new Animal; 
	fido.save({
		name: "Fido"
	}).done(function(){
		console.log("it worked!");
	}).fail(function(){
			console.log("OOPS!");
	})

	animalQuery = new Parse.Query(Animal)
	animalQuery
		.get("WQXpLmojxw")
		.done( function(animal) {
			console.log("animal is", animal)
		})
		.fail( function(object, error) {
	})





// ============================================
// ================Router======================
console.log("Router Loaded")
AppRouter = Backbone.Router.extend({
	routes: {
		"home": "splashPage",
		"index": "anotherPage"
	},

	initialize: function(){
		this.coolDogs = new PostCollection();
	},

	splashPage: function(){
		new splashPageView();
	}

})

var Router = new AppRouter();
Backbone.history.start();




// ============================================
// =================Views======================
console.log("View Loaded")
AppModel = Backbone.Model.extend({

})







// ============================================
// ===========Models and Collections===========
console.log("Model Loaded")
AppModel = Backbone.Model.extend({
	defaults: {
		"photo": "None",
		"title": "None"
	}

	initialize: function(){
		
	}

})



console.log("Collection Loaded")
AppCollection = Backbone.Collection.extend({

})