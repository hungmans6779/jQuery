$(document).ready(function(){
$(':input').bind("blur",function(){
	$('#dis').text($(this).attr('name')+'='+$(this).val());
	});
});

