$(document).ready(function(){
$('#myform').submit(function(){
	$('#myform :input:not("#submit")').each(function(){
		var test=$(this).val();
		if (test=="")
		{
			alert($(this).attr('name')+'���i�ť�');
		}
		if (test!="")
		{
			$('#dis').append($(this).attr('name')+'='+test);
			}	
});
return false
});
});