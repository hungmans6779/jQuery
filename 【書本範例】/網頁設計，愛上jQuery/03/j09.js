$(document).ready(function(){
 	var test=$('div:eq(1)').children();
	var message="";
	$(test).each(function(e){
message=message+' '+test[e].tagName;
	});	
	alert(message);
	$(test).eq(1).css('border','2px solid #D4D0C8');
  });

