$(document).ready(function(){
$(':input').mousedown(function(){
	$(this).addClass('myinput');
});
$(':input').mouseup(function(){
	$('#dis').html($(this).val());
});
});

