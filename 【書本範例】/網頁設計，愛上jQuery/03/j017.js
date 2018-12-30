$(document).ready(function(){
	$('img').click(function(){
		$(this).prevAll().animate({ left: -15 }, 65).animate({ left: 15 }, 65).animate({ left: -15 }, 65).animate({ left: 15 }, 65).animate({ left: 0 }, 65);
	});
  });

