$(document).ready(function(){
	$('#dd').click(function(){
	     $.getScript("pro58-1.js", function(){
		$('#message').html(mytime);			
	});
  });
  
$("#message").ajaxError(function(a, b,c){
   $(this).append("<p style='width:450'>�z���I�s���~" + a.type + " �b <br>"+b.responseText+"<br><br>���檺URL�O "+c.url+"</p>");
 });
$("#message").ajaxComplete(function(d,e,f){
   $(this).append("<li>"+d.type+"���槹��</li>");
 });
 
 });

 