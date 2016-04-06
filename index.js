var http = require ('http');

var hotelService = require('./hotels');

http.createServer(function(req, res){

	res.writeHead(200);
	
	hotelService.on("up", function(){
		
		res.write('rank up called\n');
		res.write('total ranking: '+JSON.stringify(hotelService.getHotels())+"\n");
	});
	
	hotelService.on("down", function(){
		
		res.write('rank down called'+"\n");
		res.write('total ranking: '+JSON.stringify(hotelService.getHotels())+"\n");
	});
	
	hotelService.rankUp("cramim");
	hotelService.rankUp("cramim");
	hotelService.rankUp("cramim");
	hotelService.rankDown("cramim");
	
	
	res.end();
}).listen(3000);
console.log('listening on port 3000');
