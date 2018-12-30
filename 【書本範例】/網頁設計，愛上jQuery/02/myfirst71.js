$(document).ready(function(){
$(':input').dblclick(function(){
	if ($(this).val()=="")	{
		$('#dis').html('請輸入'+$(this).attr('name')+'的內容!!');
	}
	else{
$('#dis').text($(this).attr('name')+'='+$(this).val());
	}	
	});
});

