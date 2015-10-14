var express = require('express');
var app = express();

app.get('/this/:that', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.send("That is " + req.params.that);
});

var server = app.listen(8080);