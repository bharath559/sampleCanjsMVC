var  listController=can.Control.extend({
	
		defaults:{
			view:"listModel.mustache"
		},
		init:function(el){
			var self=this;
			 var images = new carModel({name:"sesigga"});

			carModel.findAll({},function(imagesSrcList){

				var jsonArr = [];

	for (var i = 0; i < imagesSrcList.length; i++) {
    	jsonArr.push({
    	id: imagesSrcList[i].id,
        src: imagesSrcList[i].src,
    });
}
				$(el).html(can.view(self.defaults.view,{imagesList:jsonArr}));
                $(el).slick({infinite: false, arrows:true, slidesToShow: 6,slidesToScroll: 6});

			});
		
		},
	".image click":function(el,ev)
	{
		$("#searchResults").fadeOut( "slow", function() {
			    // Animation complete
			  });
		

		var clickedCarId = el.attr("id");
		var carDetailsController = new carDataController("#car_info",{id:"1"});
		carDetailsController.defaults.currentCarModelId(clickedCarId);
		carDetailsController.setCarDetails();
	},
	".slick-slide mouseover":function(el,ev)
	{
					var image = $(el).find('img');
					console.log("inside slick-slide");
					
					image.css("border-radius","80px");
					image.css('-webkit-border-radius',"80px");
					image.css('-moz-border-radius',"80px");

					image.css('-webkit-transition',"border-radius 1s ease");
					image.css('-moz-transition',"border-radius 1s ease");
					image.css('-o-transition',"border-radius 1s ease");
					image.css('transition',"border-radius 1s ease");


	},
	".slick-slide mouseout":function(el,ev)
	{
					var image = $(el).find('img');
					console.log("inside slick-slide");
					
					image.css("border-radius","0px");
					image.css('-webkit-border-radius',"0px");
					image.css('-moz-border-radius',"0px");

					image.css('-webkit-transition',"border-radius 1s ease");
					image.css('-moz-transition',"border-radius 1s ease");
					image.css('-o-transition',"border-radius 1s ease");
					image.css('transition',"border-radius 1s ease");


	},

});