$(document).ready(function(){
$(':input').dblclick(function(){
	if ($(this).val()=="")	{
		$('#dis').html('�п�J'+$(this).attr('name')+'�����e!!');
	}
	else{
$('#dis').text($(this).attr('name')+'='+$(this).val());
	}	
	});
});

