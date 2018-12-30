$(document).ready(function(){
	$('p').click(function(){
	   var myoffset=$(this).offset();
	   $('#dis').html(myoffset.top);
	});
    });

