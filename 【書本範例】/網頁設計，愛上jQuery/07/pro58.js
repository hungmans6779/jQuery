$(document).ready(function(){
	$('#dd').click(function(){
	     $.getScript("pro58-1.js", function(){
		$('#message').html(mytime);			
	});
  });
  
$("#message").ajaxError(function(a, b,c){
   $(this).append("<p style='width:450'>您的呼叫有誤" + a.type + " 在 <br>"+b.responseText+"<br><br>執行的URL是 "+c.url+"</p>");
 });
$("#message").ajaxComplete(function(d,e,f){
   $(this).append("<li>"+d.type+"執行完成</li>");
 });
 
 });

 