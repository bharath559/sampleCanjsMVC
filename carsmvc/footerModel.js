var footerData = can.Model.extend({
	
	findOne: 'getFooterData/{id}'

},{});

footerContent = {

	"Data":[

				{"img":"fb_icon.png","link":"http://facebook.com"},
				{"img":"twitter_icon.png","link":"http://twitter.com"},
				{"img":"googlePlus_icon.png","link":"http://googleplus.com"},
				{"img":"linkedIn_icon.png","link":"http://linkedin.com"}
	],
	"emailId":"sjagarla@cs.odu.edu",
	"phone":"(806)-252-1886"
}

can.fixture("getFooterData/{id}",function(){

	return footerContent;

});