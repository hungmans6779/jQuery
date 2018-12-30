$(document).ready(function(){
   $("#tt").click(function(){
	$("ul li:first-child").addClass('myborder');
	$("ul li:not(:first-child)").addClass('myborder1');
   });
  
  });

