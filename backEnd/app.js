var http = require('http');
var app = require('./config/server');


http.createServer(app).listen(app.get('port'), function() {
	console.log('Express executando na porta 3000');
})