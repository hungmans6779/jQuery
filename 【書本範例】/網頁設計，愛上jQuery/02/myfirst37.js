$(document).ready(function(){
   $("#tt").click(function(){
	$("a[href$='.com']").addClass('myborder');
	$("a:not([href$='.com'])").addClass('myborder1');
   });
  
  });

