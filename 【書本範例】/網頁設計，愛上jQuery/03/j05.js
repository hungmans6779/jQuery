$(document).ready(function(){
 	$('#myimg img').each(function(){
		if ($(this).is('.fade'))
		{
			$(this).fadeOut(1000);
		}
	});
  });

