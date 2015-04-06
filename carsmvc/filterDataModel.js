var filterDataModel = can.Model.extend({
	findOne: 'GET /fetchData{id}',

},{});


var searchData={
					"results":
					[
						{
							"id":2,
							"carName":"A3 Cabriolet",
							"img":"audi_7.jpg",
							"Starting_at":"$35,600",
							"Key_Features":"Xenon plus headlights with LED daytime running lights and LED taillightsather seating surfaces al-zone automatic climate control LUETOOTH® streaming audio and wireless technology preparation for compatible mobile phone Rain/light sensor for automatic windshield wipers and headlights",
							"Interior":["Single-zone manual climate control",
										"Three-spoke multifunction sport steering wheel",
										"Tilt and telescopic manually adjustable steering column",
										"Folding front center armrest",
										"Power windows with one-touch up/down operation and pinch protection",
										"Decorative interior inlays1",
										"Acoustic folding roof - folds at speeds up to 31 mph",
										"Dual front sun visors with lighted vanity mirrors",
										"12-volt power outlet",
										"Four beverage holders",
										"Front and rear floor mats",
										"Safety | Security"],
							"Transmission":"Automatic",
							"MPG": "23/30",
							"Color":"Reflex Silver Metallic",
							"Drivetrain":"FWD",
							"Engine":"2.5L I5 170hp 177ft. lbs. PZEV",
							"Fuel_Type":"Gasoline"
						},
						{
							"id":3,
							"carName":"A5 Cabriolet",
							"img":"audi_2.jpg",
							"Starting_at":"$35,600",
							"Key_Features":"Xenon plus headlights with LED daytime running lights and LED taillightsather seating surfaces al-zone automatic climate control LUETOOTH® streaming audio and wireless technology preparation for compatible mobile phone Rain/light sensor for automatic windshield wipers and headlights",
							"Interior":["Single-zone manual climate control",
										"Three-spoke multifunction sport steering wheel",
										"Tilt and telescopic manually adjustable steering column",
										"Folding front center armrest",
										"Power windows with one-touch up/down operation and pinch protection",
										"Decorative interior inlays1",
										"Acoustic folding roof - folds at speeds up to 31 mph",
										"Dual front sun visors with lighted vanity mirrors",
										"12-volt power outlet",
										"Four beverage holders",
										"Front and rear floor mats",
										"Safety | Security"],
							"Transmission":"Automatic",
							"MPG": "23/30",
							"Color":"Deep Black Pearl",
							"Drivetrain":"FWD",
							"Engine":"2.5L I5 170hp 177ft. lbs. PZEV",
							"Fuel_Type":"Gasoline"
						},
						{
							"id":4,
							"carName":"S5 Cabriolet",
							"img":"audi_3.jpg",
							"Starting_at":"$35,600",
							"Key_Features":"Xenon plus headlights with LED daytime running lights and LED taillightsather seating surfaces al-zone automatic climate control LUETOOTH® streaming audio and wireless technology preparation for compatible mobile phone Rain/light sensor for automatic windshield wipers and headlights",
							"Interior":["Single-zone manual climate control",
										"Three-spoke multifunction sport steering wheel",
										"Tilt and telescopic manually adjustable steering column",
										"Folding front center armrest",
										"Power windows with one-touch up/down operation and pinch protection",
										"Decorative interior inlays1",
										"Acoustic folding roof - folds at speeds up to 31 mph",
										"Dual front sun visors with lighted vanity mirrors",
										"12-volt power outlet",
										"Four beverage holders",
										"Front and rear floor mats",
										"Safety | Security"],
							"Transmission":"Automatic",
							"MPG": "23/30",
							"Color":"Deep Black Pearl",
							"Drivetrain":"FWD",
							"Engine":"2.5L I5 170hp 177ft. lbs. PZEV",
							"Fuel_Type":"Gasoline"
						},
						{
							"id":5,
							"carName":"TTS Roadster",
							"img":"audi_4.jpg",
							"Starting_at":"$35,600",
							"Key_Features":"Xenon plus headlights with LED daytime running lights and LED taillightsather seating surfaces al-zone automatic climate control LUETOOTH® streaming audio and wireless technology preparation for compatible mobile phone Rain/light sensor for automatic windshield wipers and headlights",
							"Interior":["Single-zone manual climate control",
										"Three-spoke multifunction sport steering wheel",
										"Tilt and telescopic manually adjustable steering column",
										"Folding front center armrest",
										"Power windows with one-touch up/down operation and pinch protection",
										"Decorative interior inlays1",
										"Acoustic folding roof - folds at speeds up to 31 mph",
										"Dual front sun visors with lighted vanity mirrors",
										"12-volt power outlet",
										"Four beverage holders",
										"Front and rear floor mats",
										"Safety | Security"],
							"Transmission":"Automatic",
							"MPG": "23/30",
							"Color":"Deep Black Pearl",
							"Drivetrain":"FWD",
							"Engine":"2.5L I5 170hp 177ft. lbs. PZEV",
							"Fuel_Type":"Gasoline"
						}
					],
					"name":"hie"
				};

can.fixture("GET /fetchData{id}",function(){
 	return searchData;
 });