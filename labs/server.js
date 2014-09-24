var http = require('http');
var fs = require('fs');
var svr = http.createServer(function(req, res){
	console.log(req.url);
	var file = req.url === '/' ? './index.html' : './'+req.url; 

	fs.readFile(file, function(err,data){
		if (err){
			res.writeHead(404);
			res.write(JSON.stringify(err));
			return res.end();
		} else {
			res.writeHead(200);
			res.write(data);
			return res.end();
		}
	});
});

var port = process.argv[2];

svr.listen(8000);




