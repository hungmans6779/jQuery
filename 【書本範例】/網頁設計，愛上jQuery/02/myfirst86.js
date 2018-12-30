$(document).ready(function(){
	$('input').focus(function(){
		$('#mydis').remove();
	$("<span id=mydis>Focused!</span>").appendTo("body").fadeOut(1000);
});
	$('#aa').click(function(){
	$('input').trigger("focus");	
	});
$('#bb').click(function(){
		$('input').triggerHandler("focus");
		});
});