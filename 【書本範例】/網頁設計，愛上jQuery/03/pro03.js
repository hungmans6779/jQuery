$(document).ready(function(){
   	$("#firstul li:eq(2)").addClass('active');
	$(":not(#news)").removeClass('active');
	$("#login").click(function(){
	$("#mypage").toggle("slow").load("login.html");
	});
	
  });

