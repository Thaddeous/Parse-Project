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

