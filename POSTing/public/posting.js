$('#submit-btn').click(function() {
	$.ajax({
		type: "POST",
		url: "login",
		contentType: "application/json",
		data: JSON.stringify({
			username: $("#username").val(),
			password: $("$password").valu()
		}),
		success: function(data) 
		{
			console.log('data', data)
		}
	})
});