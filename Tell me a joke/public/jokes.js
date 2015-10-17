
$('#joke').click(function() {
	$.get('/getajoke', function(data) {
		//$('.jokes-target').text(data)
		//var jsonObj = JSON.parse(data);
		var obj = data["body"];
		if (obj.hasOwnProperty('joke'))
		{
			$('#jokes-target').removeClass("hidden");
			$('#jokes-target').text(obj.joke);
		}
	});
});


