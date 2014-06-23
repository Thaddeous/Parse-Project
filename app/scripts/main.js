'use strict';	

var photoInstanceView;
var appView;
var uploadView;




$(".plus").click(function(){
	$(".upload-main").addClass("activated");
	$(".main-photo-block").addClass("activated");
	uploadView = new UploadView()
})