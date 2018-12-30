$(document).ready(function(){
   $("#tt").click(function(){
	$("ul li:nth-child(1)").addClass('myborder');
	$("ul li:not(:nth-child(1))").addClass('myborder1');
   });
  
  });

