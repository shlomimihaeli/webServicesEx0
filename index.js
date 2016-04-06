var http = require ('http');
var hotelService = require('./hotels');

http.createServer(function(req, res){

	res.writeHead(200);
	
	hotelService.rankUp("cramim");
	hotelService.rankDown("cramim");
	
	res.write(hotelService.getLog());
	res.end();
}).listen(3000);
console.log('listening on port 3000');
