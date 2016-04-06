var events = require('events');

function HotelService(){
	
	/**
	 * call super 
	 */
	events.EventEmitter.call(this);
	
	this.hotels = {};
	
};

/**
 * inheritance 
 */
HotelService.prototype = Object.create(events.EventEmitter.prototype);

HotelService.log = "";
HotelService.event = {UP:"up", DOWN:"down"};

HotelService.prototype.rankUp = function(hotelName){
	
	if(this.hotels[hotelName] == undefined) this.hotels[hotelName]= 1;
	else this.hotels[hotelName]++;
	
	HotelService.log += "ranked up hotel: "+hotelName+"\n";
	this.emit(HotelService.event.UP);
	
}

HotelService.prototype.rankDown = function(hotelName){
	
	if(this.hotels[hotelName] == undefined) this.hotels[hotelName] = 0;
	else if( this.hotels[hotelName] > 0 ) this.hotels[hotelName]--;
	HotelService.log += "ranked down hotel: "+hotelName+"\n";
	this.emit(HotelService.event.DOWN);
}

HotelService.prototype.getHotels = function(){
	
	return this.hotels;
	
}
HotelService.prototype.getLog = function(){
	
	return HotelService.log;
	
}

module.exports = new HotelService();
