$(document).ready(function(){
   	   $(":input:enabled").change( function() {
		$(this).attr({disabled: "disabled"});		   
	   });
	   $("#tt").click(function(){
	  $(":input:disabled").attr({disabled: ""});	   		
   });
    });

