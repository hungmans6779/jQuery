$(document).ready(function(){
	
	var myparents = $("img").parents();
	var message="";
	$(myparents).each(function(e){
	message=message+' '+myparents[e].tagName;
	});
	alert(message);
	$(myparents[2]).css('background-color','green');
  });

