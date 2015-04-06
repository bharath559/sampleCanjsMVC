var carModel = can.Model.extend({
	findAll: 'GET /images',
	findOne: 'getCarData/{id}',
	fetchResults: 'GET /SearchResults'
    
},{});

 
 var imageList=[
 	{"id":"0","src":"menu_audi1.png"},	
 	{"id":"1","src":"menu_ferrari1.png"},
 	{"id":"2", "src":"menu_bmw1.png"},
 	{"id":"3","src":"menu_bentley.png"},
 	{"id":"4","src":"menu_lamborghini1.png"},
 	{"id":"5", "src":"menu_benz1.png"},
 	{"id":"6", "src":"menu_wolks1.png"},
 	{"id":"7", "src":"menu_alfa1.png"},
 	{"id":"8","src":"menu_cadillac1.png"},
 	{"id":"9", "src":"menu_chevrolet1.png"} 	
 ];

 var carData=
 	[
	 	{
	 		"id":0,
	 		"title":"Audi",
	 		"description":"When you pay attention to detail, it pays off. Such is the case with our beautiful LED daytime running lights. These iconic lights are intended to help make you more visible to other drivers, but they’re designed so beautifully they attract attention for their style alone. It’s something that has us beaming with pride.",
	 		"imgsrc":"audi_car4.jpg",
	 		"year":[2001,2005,2012,2009],
	 		"model":["A3 Cabriolet","A5 Cabriolet","S5 Cabriolet","TTS Roadster"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":1,
	 		"title":"Ferrari",
	 		"description":"Ferrari’s relationship with the US has continued to grow ever since the first Maranello model landed stateside 60 years ago. We tell the story of gentlemen racing drivers, spirited team privateers and faithful tifosi, who nourish American appetites for the Prancing Horse to this day.",
	 		"imgsrc":"ferrari_2.jpg",
	 		"year":[1996,2112,4567,8888],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":2,
	 		"title":"BMW",
	 		"description":"BMW i is a comprehensive and ground-breaking concept for sustainable mobility. It represents visionary electric vehicles and mobility services, inspiring design and a new understanding of premium that is strongly defined by sustainability. And it thrills with its innovative vehicles: the all-electric BMW i3, a locally emission-free car for city driving that is sustainably designed throughout, and the BMW i8 as the most progressive sports car.",
	 		"imgsrc":"bmw_1.jpg",
	 		"year":[1995,1445,2012,2009],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":3,
	 		"title":"Bentley Motors",
	 		"description":"They say that vision comes from within. And if there is one space perfectly designed to free your mind, it is the flagship of the Bentley range: the ultimate expression of performance and luxury, the Mulsanne.Now, for the first time, there is a choice to be made – the Mulsanne, or its powerful new sibling, the Mulsanne Speed. Both cars offer peerless comfort, exquisitely handcrafted to create a unique environment; one in which time on the road becomes time to think.",
	 		"imgsrc":"bentley.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":4,
	 		"title":"Lambhorgini",
	 		"description":"There is nothing from the past that rivals the technology of the new Huracán, which comes together in a perfect car that seems straight out of the future.The first thrill you get will be looking at it. Sharp, aerodynamic lines designed to fend the air and tame the road.",
	 		"imgsrc":"lambo7.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":5,
	 		"title":"Mercedes",
	 		"description":"The world awaits the arrival of an achievement of intense passion and beauty for the senses: breathtaking performance, scene-stealing looks, and a growl that intimidates the road itself. Introducing the all-new 2016 Mercedes-AMG GT S.With track-bred performance, refined craftsmanship and unrivalled fuel economy, the all-new 2015 Mercedes-AMG C63** stands alone in its class.",
	 		"imgsrc":"benz.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":6,
	 		"title":"The Beetle",
	 		"description":"The Beetle was designed for sustained high speed on the autobahn. It ultimately gave rise to variants, including the Volkswagen Karmann Ghia and the Volkswagen Type 2 bus. The Beetle had marked a significant trend led by Volkswagen, Fiat, and Renault whereby the rear-engine, rear-wheel drive layout had increased from 2.6 percent of continental Western Europe's car production in 1946 to 26.6 percent in 1956.",
	 		"imgsrc":"wolks.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":7,
	 		"title":"Alfa Romeo",
	 		"description":"Alfa Romeo has competed successfully in many different categories of motorsport, including Grand Prix motor racing, Formula One, sportscar racing, touring car racing and rallies. It has competed both as a constructor and an engine supplier, via works entries (usually under the name Alfa Corse or Autodelta) and private entries. The first racing car was made in 1913, three years after the foundation of the company.",
	 		"imgsrc":"alfa.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":8,
	 		"title":"Cadillac",
	 		"description":"The next generation Escalade and Escalade ESV. Is the arrival of the most anticipated generation of Cadillac’s crown jewel worthy merely of an introduction, or more of a celebration? We would argue the latter considering the level of design, craftsmanship and detail that transformed it into the epitome of luxury. ",
	 		"imgsrc":"cadillac.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	},
	 	{
	 		"id":9,
	 		"title":"Chevrolet",
	 		"description":"The new 2015 Camaro is the perfect combination of distinct design, cutting edge technology and exhilarating performance – a combination that represents the bold and iconic design that makes a Camaro a Camaro.The Z/28 is back. With a powerful 505 horsepower V8 engine and sculpted aerodynamic body.",
	 		"imgsrc":"camaro.jpg",
	 		"year":[1653,2055,2059,2099],
	 		"model":["model A","model B","model C"],
	 		"exterior_color":["black","white","metallic silver","classic red"]
	 	}

 	]


 can.fixture("GET /images",function(){
 	return imageList;
 });
 can.fixture("getCarData/{id}",function(){
 	console.log("fetching data from id ",this.url.substring(11,this.url.length));
 	var lookup = this.url.substring(11,this.url.length);
 	return carData[lookup];
 });
  can.fixture("GET /SearchResults",function(){
 	return searchData;
 });