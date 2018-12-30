$(document).ready(function(){
   $("#tt").click(function(){
	$("ul li:only-child").addClass('myborder');
	$("ul li:not(:only-child)").addClass('myborder1');
   });
  
  });

