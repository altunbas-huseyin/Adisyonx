$(document).ready(function(){
    $(document).bind('deviceready', function(){
        //Phonegap ready
        onDeviceReady();
    });

    var output = $('#output');
    var url = 'http://lifeafterracing.ustrotting.com/landmarks.cfc?method=remoteGetLandMarks&callback=?';
	
	$.ajax({
		type: 'GET',
		url: url,
		jsonpCallback: 'jsonCallback',
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(data) {
			$.each(data, function(i,item){ 
                var landmark = '<h1>'+item.NAME+'</h1>'
                + '<p>'+item.LATITUDE+'<br>'
                + item.LONGITUDE+'</p>';
                output.append(landmark);
			});
		},
		error: function(e) {
			console.log(e.message);
		}
	});
});