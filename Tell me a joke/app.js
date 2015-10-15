var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var unirest = require('unirest');
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/getajoke', function(req, res) {
	console.log("does this do anything");
	unirest.get("https://webknox-jokes.p.mashape.com/jokes/random?maxLength=1000")
		.header("X-Mashape-Key", "QP2d1lomwJmshbGmaWZEAOj31wi1p15ReV1jsncTPKzi0zK771")
		.header("Accept", "application/json")
		.end(function (result) {
  			console.log(result.status, result.headers, result.body);
  			res.send(result);
  			console.log('res.send completed');
	});
});
//app.post('/jokes', function(req, res) {
//	var newJoke = {text: request.body.joke, time: new Date().getTime()};
//});


var server = app.listen(8080);