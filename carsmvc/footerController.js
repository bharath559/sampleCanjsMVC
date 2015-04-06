var footerController = can.Control.extend({
	
	defaults:{
		view:"footer.mustache"
	},
	init:function(el)
	{

		var getFooterData = new footerData({name:"sesigga"});
		var self = this;

		footerData.findOne({id:"1"},function(footerResponse){
			$(el).html(can.view(self.defaults.view,footerResponse));
				
		});


	}
});