$(document).ready(function(){ 	
	   $('p').click(function(){
		  var mycolor= $(this).css('background-color');
		  $('#dis').css('background-color',mycolor).html(mycolor);
	   });
    });

