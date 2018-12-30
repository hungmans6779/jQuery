$(document).ready(function(){
 	$('#myimg img').each(function(){
		if ($(this).hasClass('fade'))
		{
			$(this).fadeOut(1000);
		}		
	});	
  });

