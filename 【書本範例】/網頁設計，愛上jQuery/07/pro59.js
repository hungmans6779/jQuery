$(document).ready(function(){
	$('#dd').click(function(){
		$.getScript("pro59-1.js", function(){
		$('#message').html(myv);
		});	     
  });
	  $("#wait").ajaxStart(function(){
   $(this).show();
 });
$("#wait").ajaxStop(function(){
   $(this).hide();
 });
 
 });

 