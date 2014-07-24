'use strict';

var PhotoInstanceView = Parse.View.extend({
	className: "photo-Instance-View",
	template: _.template($(".photo-instance-template").text()),
	events: {
	},

	initialize: function(){
		$(".main-photo-block").append(this.el)
		this.render()
		console.log("photoinstanceview this.model.attributes", this.model.attributes)
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	}
})



var AppView = Parse.View.extend({
	className: "app-View",
	events: {
	},

	initialize: function(){
		$(".main-photo-block").append(this.el)
		this.collection = new Photos()
		this.collection.on('add', function (photoModel) {

			new PhotoInstanceView({ model: photoModel })
		})
		this.collection.fetch({add:true});
		
	},

})



var UploadView = Parse.View.extend({
	className: "upload-View",
	template: _.template($(".upload-template").text()),
	events: {
		"click .file-upload"	: "addInfo",
		"change .file-uploader"	: "previewPic" 
	},

	initialize: function(){
		console.log("initialize upload view is working");
		$(".upload-main").html("").append(this.el)
		this.render()
	},

	render: function(){
		console.log("its working");
		var renderedTemplate = this.template;
		this.$el.append(renderedTemplate); 
	},

	addInfo: function(){
		console.log("addInfo is working");
		var fileUploadControl = $(".file-uploader")[0];
		if (fileUploadControl.files.length > 0) {
			var file = fileUploadControl.files[0];
			var photoRef = "photo.jpg";
			var parseFile = new Parse.File(photoRef, file);
		}
		var that = this;
		parseFile.save().done(function() {
			console.log("The file has been saved!");
			var image = new Photo();
			console.log(that.$el)
			var words = that.$el.find(".caption-field").val();
			image.set("caption", words);
			// image.set("username", "none"); // undefined
			image.set("file", parseFile);
			image.save();
			appView.collection.add(image);

			uploadView.remove();
			$(".upload-main").removeClass("activated");
			$(".main-photo-block").removeClass("activated");

			

		}, function(error) {
			console.log("Something went wrong in the upload process dude.");
		});

	},

	placeholder: function(){
		var profilePhoto = Photo.get("file");

		$(".placeholder").attr('src', profilePhoto.url())
	},

	previewPic: function () {
		var fileUploadControl = $(".file-uploader")[0];
		previewImage(fileUploadControl);
	}	
})

function previewImage (input) {

	var reader = new FileReader();
	reader.onload = function(e) {
		var picture = e.target.result;
		$('.placeholder').attr('src', picture);
	};
	reader.readAsDataURL(input.files[0]);
				
}