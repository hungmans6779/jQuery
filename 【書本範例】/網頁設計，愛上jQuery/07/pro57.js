$(document).ready(function(){    
		$('#dd').click(function(){
		$.getScript("pro56-1.js", function(){
		$('#message').html(mytime);
		});
		$("#message").ajaxComplete(function(a, b, c){
   $(this).append('<p style="width:450">'+a.type+'<br>�i���w�����H�U���n�D<br><br>'+b.responseText+'<br><br>�n�D��URL�O '+c.url+'</p>');
   //c.global c.type c.timeout
   //b.readyState b.responeText
   //a.type
 });
		
	});
  });
 


 