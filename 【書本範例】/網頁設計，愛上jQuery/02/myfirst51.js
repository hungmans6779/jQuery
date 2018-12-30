$(document).ready(function(){   	   
	   $("#tt").click(function(){
	  $(":input:checked").attr({disabled: "disabled"});	
	  $(":input:checked").addClass('mychecked');	
	  $(":input:not(:checked:button)").addClass('mychecked1');	
  
   });
    });

