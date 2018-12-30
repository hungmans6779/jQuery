$(document).ready(function(){ 
	$('#myform :input.required').after('*');
	var message;
	$('#myform').submit(function(){
		message="";
		var myv = $("#myform").serializeArray();
		$(myv).each(function(e){
		var temp=myv[e].value;
		message=message+' '+temp;
      	});
		alert(message);
		return false
	});
});

