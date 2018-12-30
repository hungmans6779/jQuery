$(document).ready(function(){ 
	$('#myform :input.required').after('*');
	$('#myform').submit(function(){
		var myv = $("#myform").serialize();
      alert(myv);
		return false
	});
});

