$(document).ready(function(){
	var b='';
	  $.each($.browser, function(i, val) {
      if (i=='safari' && val==true){b='safari';}
	if (i=='opera' && val==true){b='opera';}
	if (i=='msie' && val==true){b='msie';}
	if (i=='mozilla' && val==true){b='mozilla';}
    });
	$('#dis').html(b);
});

