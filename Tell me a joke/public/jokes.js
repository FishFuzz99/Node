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

$('#joke').click(function() {
	$.get('/getajoke', function(data) {
		//$('.jokes-target').text(data)
		//var jsonObj = JSON.parse(data);
		var obj = data["body"];
		if (obj.hasOwnProperty('joke'))
		{
			$('#jokes-target').text(obj.joke);
		}
	});
});
//https://github.com/KiaFathi/tambalAPI.git

