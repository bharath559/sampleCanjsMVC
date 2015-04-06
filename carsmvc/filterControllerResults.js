var filterResultsController = can.Control.extend({
	
	defaults:{
		view:"filterResultsView.mustache"
	},
	init:function(el,options){
		var self = this;
		var results = new filterDataModel({name:"sesigga"});

		 filterDataModel.findOne({"id":1},function(carDetailsList){
			$("#searchResults").html(can.view(self.defaults.view,carDetailsList));
		});
	}
});