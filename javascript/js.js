$(function() {
	$('#first').css({color: 'green', backgroundColor:'yellow'});
	
	alert($('#first').text());
	
	alert($('#secound').html());
	$('#secound').html('<b>Cześć</b>');
	$('#secound').before('<p>przykładowy paragraf</p>');
	$('#secound').after('<p>przykładowy11 paragraf</p>');
	
})