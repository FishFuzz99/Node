var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){//only works at ~/hello.txt url
	res.send('Hello Express');
});

var server = app.listen(8080, function() {
	console.log('Listening on port 8080');
});
