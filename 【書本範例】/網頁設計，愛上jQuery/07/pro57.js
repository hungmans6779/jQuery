$(document).ready(function(){    
		$('#dd').click(function(){
		$.getScript("pro56-1.js", function(){
		$('#message').html(mytime);
		});
		$("#message").ajaxComplete(function(a, b, c){
   $(this).append('<p style="width:450">'+a.type+'<br>告知已完成以下的要求<br><br>'+b.responseText+'<br><br>要求的URL是 '+c.url+'</p>');
   //c.global c.type c.timeout
   //b.readyState b.responeText
   //a.type
 });
		
	});
  });
 


 