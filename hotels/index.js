HotelService = function(){
};

HotelService.log = "";

HotelService.prototype.rankUp = function(hotelName){
	
	HotelService.log += "ranked up hotel: "+hotelName+"\n";
	
}

HotelService.prototype.rankDown = function(hotelName){
	
	HotelService.log += "ranked down hotel: "+hotelName+"\n";
	
}

HotelService.prototype.getLog = function(){
	
	return HotelService.log;
	
}

module.exports = new HotelService();
