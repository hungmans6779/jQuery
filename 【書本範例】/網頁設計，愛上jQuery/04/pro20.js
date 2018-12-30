$(document).ready(function(){
   	$("#firstul li:eq(2)").addClass('active');
	$(":not(#news)").removeClass('active');
	$("a:eq(2)").removeAttr('href');
	var ss=$("#promotion").html();
	$("span").html(ss);
  });

