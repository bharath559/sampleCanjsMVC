var  carDataController=can.Control.extend({
	
		defaults:{
			view:"carDataFilter.mustache",
			currentCarModelId:can.compute(),
			parent:""
		},
		init:function(el,options){
			this.defaults.parent = el;		
		},
		setCarDetails:function()
		{
			
			var self=this;
			var images = new carModel({name:"sesigga"});
			carModel.findOne({id:self.defaults.currentCarModelId()},function(carDetailsList){
			$("#car_info").hide().html(can.view(self.defaults.view,carDetailsList)).fadeIn( "slow", function() {
			    // Animation complete
			  });
				
			});

		},
		"#filter_btn click":function(el,ev)
		{
			console.log("clicked filter btn");
			$("#searchResults").fadeIn( "slow", function() {
			   var elementPosition = $('#searchResults').position();
			   $('body').animate({
			   		scrollTop:elementPosition.top
			   },400);
			    return false;
			  });

			var filterController = new filterResultsController("#searchResults",{"year":$("#year").val()});

		}


});