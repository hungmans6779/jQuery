$(document).ready(function(){
	//var mylast=$('#last');
	$('img').click(function(){
		$(this).prev().animate({ left: -15 }, 65).animate({ left: 15 }, 65).animate({ left: -15 }, 65).animate({ left: 15 }, 65).animate({ left: 0 }, 65);
	});
  });

