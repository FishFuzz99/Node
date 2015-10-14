//$.ajax({
//	type: "GET",
//	url: "/ajax",
//	success: function(data) {
//		for (var i = 0; i < data.jokes.length; i++) {
//			appendNewTweet(data.tweets[i]);
//		}
//	}
//});

//function appendNewJoke(joke) {
//	$('#jokes-target').text(newJoke);
//}

$('#joke').click(funtion() {
	$.ajax({
		type: "POST",
		url: "http://tambal.azurewebsites.net/joke/random",
		success: function(data) {
			//console.log(data);
			//console.log(data.joke);
			$('.jokes').text(JSON.stringify(data));
			//appendNewJoke(data);
			//$('$new-tweet').val('');
		},
		dataType: 'jsonp',
	});
});