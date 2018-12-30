$(document).ready(function(){
$('#dd').click(function(){
	var str=$(':input[name=test]').val();
	str=jQuery.trim(str);
$(':input[name=test1]').val(str);
});
});

