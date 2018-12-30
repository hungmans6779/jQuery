$(document).ready(function(){
   $("#tt").click(function(){
	$("a[href*='y']").addClass('myborder');
	$("a:not([href*='y'])").addClass('myborder1');
   });
  
  });

