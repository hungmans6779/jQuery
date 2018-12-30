$(document).ready(function(){
$(':input').bind("change",function(){
	$('#dis').text($(this).attr('name')+'='+$(this).val());
	});
});

