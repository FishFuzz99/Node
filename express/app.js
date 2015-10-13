var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
	res.send('Hello Express');
});

var server = app.listen(8080, function() {
	console.log('Listening on port 8080');
});