$(document).ready(function(){
   	$("#firstul li:eq(2)").addClass('active');
	$(":not(#news)").removeClass('active');
	$("#join").hide("slow");
	$("#login").hide("slow");
	$("#addtowatch").show("slow");
	$("#checkwatch").show("slow");
	$("#logout").show("slow");	
  });

