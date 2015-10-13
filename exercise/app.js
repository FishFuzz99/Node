var express = require('express');
var app = express();

app.get('/greet.txt', function(res, res) {
	res.send('Stay a while and listen.');
});

app.get('/goodbye.txt', function(res, res) {
	res.send('Farewell');
});

var server = app.listen(8080, function() {
	console.log('Listening on port 8080');
});