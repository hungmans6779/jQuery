$(document).ready(function(){
$('#myform :input').change(function(){
	$('#myform').trigger('submit');
});
$('#myform').submit(function(){
var test=$('#myform :input').val();
$('#dis').html('§A·j¯Áªº¬O:'+test);
return false
});
});