var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/index.html', function(req, res) {
	console.log("does this do anything");
	res.json(200, {status:"success"});
});
//app.post('/jokes', function(req, res) {
//	var newJoke = {text: request.body.joke, time: new Date().getTime()};
//});


var server = app.listen(8080);