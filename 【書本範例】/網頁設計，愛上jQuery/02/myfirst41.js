$(document).ready(function(){
   $("#tt").click(function(){
	$("ul li:last-child").addClass('myborder');
	$("ul li:not(:last-child)").addClass('myborder1');
   });
  
  });

