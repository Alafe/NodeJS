var http = require('http');

var server = http.createServer(function(req, res) {
	res.end("<html><head><title>Noticias</title><head/><body>Portal de Noticias<body/></html>")
});

server.listen(3000);