$(document).ready(function(){
   $("#tt").click(function(){
	   $(":input:not(:image#tt)").addClass('myinput');
	   $(":image").animate({left: '+200px'}, 500);		
   });
    });

