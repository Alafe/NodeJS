var http = require('http');

var server = http.createServer(function(req, res) {
	var categoria = req.url;
	if (categoria == "/tecnologia") {
		res.end("<html><head><title>Noticias</title><head/><body>Portal de tecnologias<body/></html>");
	}else if(categoria == "/moda"){
		res.end("<html><head><title>Noticias</title><head/><body>Portal de modas<body/></html>");
	}else if(categoria == "/beleza"){
		res.end("<html><head><title>Noticias</title><head/><body>Portal de belezas<body/></html>");
	}else{
		res.end("<html><head><title>Noticias</title><head/><body>Portal de Noticias<body/></html>");
	}
})

server.listen(3000);